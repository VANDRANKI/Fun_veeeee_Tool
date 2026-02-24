import uuid
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import PredictRequest
from app.model import load_model, predict
from app.emotion_mapping import get_ui_mapping, get_explanation
from app.logger import log_request


@asynccontextmanager
async def lifespan(app: FastAPI):
    load_model()
    yield


app = FastAPI(title="Emotion DJ API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"status": "ok", "model": "emotion-english-distilroberta-base"}


@app.post("/api/predict")
def predict_emotion(req: PredictRequest):
    text = req.text.strip()
    if len(text) < 3:
        raise HTTPException(status_code=422, detail="Text must be at least 3 characters.")
    if len(text) > 2000:
        raise HTTPException(status_code=422, detail="Text must be under 2000 characters.")

    result = predict(text)
    ui_mapping = get_ui_mapping(result["top_emotion"])
    explanation = get_explanation(text, result["top_emotion"])
    request_id = str(uuid.uuid4())

    log_request(request_id, len(text), result["top_emotion"], result["probabilities"])

    return {
        "input": {"text": text},
        "model": {
            "name": "emotion-english-distilroberta-base",
            "version": "v1",
            "taxonomy": ["anger", "disgust", "fear", "joy", "neutral", "sadness", "surprise"],
        },
        "prediction": {
            "top_emotion": result["top_emotion"],
            "probabilities": result["probabilities"],
            "confidence": result["confidence"],
        },
        "ui_mapping": ui_mapping,
        "explanation": explanation,
        "meta": {
            "request_id": request_id,
            "processing_ms": result["processing_ms"],
        },
    }
