import pytest

import app.model as model

LABELS = ["anger", "disgust", "fear", "joy", "neutral", "sadness", "surprise"]


class FakeClassifier:
    """Mimics the text-classification pipeline: one list of label/score dicts per input."""

    def __init__(self, scores):
        self.scores = scores
        self.calls = []

    def __call__(self, text):
        self.calls.append(text)
        return [[{"label": label, "score": score} for label, score in self.scores.items()]]


@pytest.fixture
def use_classifier(monkeypatch):
    def install(scores):
        fake = FakeClassifier(scores)
        monkeypatch.setattr(model, "_classifier", fake)
        return fake

    return install


def test_probabilities_follow_the_taxonomy_order(use_classifier):
    use_classifier({"joy": 0.7, "anger": 0.1, "fear": 0.05, "sadness": 0.05,
                    "surprise": 0.04, "disgust": 0.03, "neutral": 0.03})
    result = model.predict("what a day")
    assert [p["emotion"] for p in result["probabilities"]] == LABELS
    assert result["top_emotion"] == "joy"
    assert result["confidence"] == 0.7


def test_scores_are_renormalised_to_sum_to_one(use_classifier):
    use_classifier({label: 2.0 for label in LABELS})
    result = model.predict("same score everywhere")
    assert all(p["prob"] == round(1 / 7, 4) for p in result["probabilities"])


def test_labels_are_matched_case_insensitively(use_classifier):
    use_classifier({"JOY": 0.9, "Sadness": 0.1})
    result = model.predict("mixed case labels")
    assert result["top_emotion"] == "joy"
    assert result["confidence"] == 0.9


def test_emotion_missing_from_the_output_gets_zero(use_classifier):
    use_classifier({"joy": 0.6, "anger": 0.4})
    probs = {p["emotion"]: p["prob"] for p in model.predict("two labels")["probabilities"]}
    assert probs["fear"] == 0.0
    assert probs["joy"] == 0.6


def test_only_the_first_512_characters_reach_the_model(use_classifier):
    fake = use_classifier({"neutral": 1.0})
    model.predict("x" * 1500)
    assert fake.calls == ["x" * 512]
