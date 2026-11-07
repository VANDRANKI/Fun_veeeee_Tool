import json


def test_request_is_logged_without_the_text(client, tmp_path):
    resp = client.post("/api/predict", json={"text": "I am so happy today"})
    assert resp.status_code == 200
    lines = (tmp_path / "logs" / "requests.jsonl").read_text().splitlines()
    entry = json.loads(lines[0])
    assert entry["top_emotion"] == "joy"
    assert entry["text_length"] == len("I am so happy today")
    assert "happy" not in lines[0]


def test_prediction_still_returned_when_the_log_cannot_be_written(client, monkeypatch, tmp_path):
    blocker = tmp_path / "blocker"
    blocker.write_text("a file where the log directory should be")
    monkeypatch.setattr("app.logger.LOG_FILE", blocker / "logs" / "requests.jsonl")

    resp = client.post("/api/predict", json={"text": "I am so happy today"})

    assert resp.status_code == 200
    assert resp.json()["prediction"]["top_emotion"] == "joy"
