import pytest

from app.emotion_mapping import (
    EMOTION_KEYWORDS,
    EMOTION_PALETTES,
    ORIGAMI_ANIMALS,
    REASONING_TEMPLATES,
    VIBES,
    get_explanation,
    get_ui_mapping,
)
from app.model import TAXONOMY
from app.schemas import UIMapping


@pytest.mark.parametrize(
    "table", [EMOTION_PALETTES, ORIGAMI_ANIMALS, VIBES, REASONING_TEMPLATES, EMOTION_KEYWORDS]
)
def test_every_table_covers_exactly_the_model_taxonomy(table):
    assert set(table) == set(TAXONOMY)


@pytest.mark.parametrize("emotion", TAXONOMY)
def test_ui_mapping_matches_the_response_schema(emotion):
    mapping = UIMapping.model_validate(get_ui_mapping(emotion))
    assert mapping.origami_animal.id
    assert mapping.vibe.suggested_playlist_url.startswith("https://")


def test_origami_animals_are_unique_per_emotion():
    ids = [animal["id"] for animal in ORIGAMI_ANIMALS.values()]
    assert len(ids) == len(set(ids))


def test_explanation_finds_keywords_through_punctuation_and_case():
    result = get_explanation("I am HAPPY, truly... Wonderful!", "joy")
    assert {t["token"] for t in result["important_tokens"]} == {"happy", "wonderful"}


def test_explanation_lists_each_token_once_longest_first():
    result = get_explanation("happy happy wonderful happy", "joy")
    assert [t["token"] for t in result["important_tokens"]] == ["wonderful", "happy"]
    weights = [t["weight"] for t in result["important_tokens"]]
    assert weights == sorted(weights, reverse=True)


def test_explanation_keeps_at_most_five_tokens_and_quotes_three():
    text = "happy great proud glad pleased delighted thrilled grateful"
    result = get_explanation(text, "joy")
    assert len(result["important_tokens"]) == 5
    assert result["reasoning"].count("'") == 6


def test_explanation_ignores_keywords_of_other_emotions():
    result = get_explanation("furious and terrified", "joy")
    assert result["important_tokens"] == []
    assert "joy signature" in result["reasoning"]


def test_explanation_for_an_unknown_emotion_falls_back_to_the_generic_text():
    result = get_explanation("happy", "boredom")
    assert result["important_tokens"] == []
    assert "boredom" in result["reasoning"]
