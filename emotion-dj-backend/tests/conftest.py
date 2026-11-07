import pytest
from fastapi.testclient import TestClient

import app.main as main_module


def fake_prediction(text: str) -> dict:
    return {
        "probabilities": [
            {"emotion": e, "prob": 1.0 if e == "joy" else 0.0}
            for e in ["anger", "disgust", "fear", "joy", "neutral", "sadness", "surprise"]
        ],
        "top_emotion": "joy",
        "confidence": 1.0,
        "processing_ms": 1,
    }


@pytest.fixture
def client(monkeypatch, tmp_path):
    """API client with the model stubbed out and the request log in a temp dir."""
    monkeypatch.setattr(main_module, "predict", fake_prediction)
    monkeypatch.setattr("app.logger.LOG_FILE", tmp_path / "logs" / "requests.jsonl")
    # No context manager, so the lifespan hook that loads the real model is not run.
    return TestClient(main_module.app)
