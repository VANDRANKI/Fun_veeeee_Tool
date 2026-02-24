from pydantic import BaseModel
from typing import List, Optional


class PredictRequest(BaseModel):
    text: str


class EmotionProbability(BaseModel):
    emotion: str
    prob: float


class ColorPalette(BaseModel):
    primary: str
    secondary: str
    accent: str
    background: str
    glow: str


class OrigamiAnimal(BaseModel):
    id: str
    name: str
    description: str


class Vibe(BaseModel):
    id: str
    name: str
    tagline: str
    suggested_playlist_url: Optional[str] = None


class UIMapping(BaseModel):
    palette: ColorPalette
    origami_animal: OrigamiAnimal
    vibe: Vibe


class ImportantToken(BaseModel):
    token: str
    weight: float


class ModelInfo(BaseModel):
    name: str
    version: str
    taxonomy: List[str]


class Prediction(BaseModel):
    top_emotion: str
    probabilities: List[EmotionProbability]
    confidence: float


class Explanation(BaseModel):
    important_tokens: List[ImportantToken]
    reasoning: str


class Meta(BaseModel):
    request_id: str
    processing_ms: int


class PredictResponse(BaseModel):
    input: dict
    model: ModelInfo
    prediction: Prediction
    ui_mapping: UIMapping
    explanation: Explanation
    meta: Meta
