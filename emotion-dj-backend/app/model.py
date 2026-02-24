import time
from transformers import pipeline

TAXONOMY = ["anger", "disgust", "fear", "joy", "neutral", "sadness", "surprise"]
MODEL_NAME = "j-hartmann/emotion-english-distilroberta-base"

_classifier = None


def load_model():
    global _classifier
    if _classifier is None:
        print(f"Loading model: {MODEL_NAME}")
        _classifier = pipeline(
            "text-classification",
            model=MODEL_NAME,
            top_k=None,  # return all class scores (replaces return_all_scores in transformers v5+)
            device=-1,   # CPU
        )
        print("Model loaded.")
    return _classifier


def predict(text: str) -> dict:
    classifier = load_model()
    start = time.time()

    # Truncate to safe token length
    raw = classifier(text[:512])[0]
    processing_ms = int((time.time() - start) * 1000)

    total = sum(r["score"] for r in raw)
    prob_dict = {r["label"].lower(): round(r["score"] / total, 4) for r in raw}

    probabilities = [{"emotion": e, "prob": prob_dict.get(e, 0.0)} for e in TAXONOMY]
    top_emotion = max(probabilities, key=lambda x: x["prob"])["emotion"]
    confidence = max(p["prob"] for p in probabilities)

    return {
        "probabilities": probabilities,
        "top_emotion": top_emotion,
        "confidence": confidence,
        "processing_ms": processing_ms,
    }
