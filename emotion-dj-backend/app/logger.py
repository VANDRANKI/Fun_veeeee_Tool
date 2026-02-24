import json
from pathlib import Path

LOG_FILE = Path("logs/requests.jsonl")


def log_request(request_id: str, text_length: int, top_emotion: str, probabilities: list):
    LOG_FILE.parent.mkdir(exist_ok=True)
    entry = {
        "id": request_id,
        "text_length": text_length,
        "top_emotion": top_emotion,
        "scores": {p["emotion"]: p["prob"] for p in probabilities},
    }
    with open(LOG_FILE, "a") as f:
        f.write(json.dumps(entry) + "\n")
