import json
import logging
from pathlib import Path

LOG_FILE = Path("logs/requests.jsonl")

_logger = logging.getLogger(__name__)


def log_request(request_id: str, text_length: int, top_emotion: str, probabilities: list):
    entry = {
        "id": request_id,
        "text_length": text_length,
        "top_emotion": top_emotion,
        "scores": {p["emotion"]: p["prob"] for p in probabilities},
    }
    # The log is a convenience. A read-only or missing directory (for example the container
    # working directory) must not turn a finished prediction into a 500 response.
    try:
        LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(LOG_FILE, "a") as f:
            f.write(json.dumps(entry) + "\n")
    except OSError as exc:
        _logger.warning("Could not write the request log %s: %s", LOG_FILE, exc)
