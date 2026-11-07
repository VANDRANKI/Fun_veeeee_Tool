import pytest

import app.main as main_module
from app.schemas import PredictResponse


def test_health_reports_ok(client):
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json()["status"] == "ok"


def test_response_matches_the_declared_schema(client):
    resp = client.post("/api/predict", json={"text": "I am so happy today"})
    assert resp.status_code == 200
    body = PredictResponse.model_validate(resp.json())
    assert body.prediction.top_emotion == "joy"
    assert body.ui_mapping.origami_animal.id == "crane"
    assert body.meta.request_id


def test_text_is_stripped_before_it_is_echoed_and_scored(client, monkeypatch):
    seen = []
    stub = main_module.predict

    def spy(text):
        seen.append(text)
        return stub(text)

    monkeypatch.setattr(main_module, "predict", spy)
    resp = client.post("/api/predict", json={"text": "   so happy   "})
    assert resp.json()["input"]["text"] == "so happy"
    assert seen == ["so happy"]


@pytest.mark.parametrize("text", ["", "  ", "ab", "  a  "])
def test_text_shorter_than_three_characters_is_rejected(client, text):
    resp = client.post("/api/predict", json={"text": text})
    assert resp.status_code == 422
    assert "at least 3" in resp.json()["detail"]


def test_text_of_exactly_2000_characters_is_accepted_and_2001_is_not(client):
    assert client.post("/api/predict", json={"text": "a" * 2000}).status_code == 200
    resp = client.post("/api/predict", json={"text": "a" * 2001})
    assert resp.status_code == 422
    assert "2000" in resp.json()["detail"]


@pytest.mark.parametrize("body", [{}, {"text": None}, {"text": 5}, {"txt": "hello there"}])
def test_missing_or_non_string_text_is_rejected(client, body):
    assert client.post("/api/predict", json=body).status_code == 422
