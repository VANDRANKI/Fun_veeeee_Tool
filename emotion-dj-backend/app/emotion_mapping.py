EMOTION_PALETTES = {
    "joy": {
        "primary": "#FFE066",
        "secondary": "#FFB347",
        "accent": "#FF8C42",
        "background": "linear-gradient(135deg, #1a0e00, #2d1800)",
        "glow": "rgba(255, 224, 102, 0.35)",
    },
    "sadness": {
        "primary": "#5B9CBD",
        "secondary": "#1A3A5C",
        "accent": "#2E6B8A",
        "background": "linear-gradient(135deg, #020d1a, #041a2e)",
        "glow": "rgba(91, 156, 189, 0.35)",
    },
    "anger": {
        "primary": "#FF4500",
        "secondary": "#8B0000",
        "accent": "#C0392B",
        "background": "linear-gradient(135deg, #0f0000, #1a0000)",
        "glow": "rgba(255, 69, 0, 0.45)",
    },
    "fear": {
        "primary": "#9B59B6",
        "secondary": "#4A1A7A",
        "accent": "#00FF88",
        "background": "linear-gradient(135deg, #060011, #0d0022)",
        "glow": "rgba(155, 89, 182, 0.4)",
    },
    "disgust": {
        "primary": "#82C271",
        "secondary": "#4A6741",
        "accent": "#B5CC8E",
        "background": "linear-gradient(135deg, #050d04, #0a1809)",
        "glow": "rgba(130, 194, 113, 0.35)",
    },
    "neutral": {
        "primary": "#BEBEBE",
        "secondary": "#808080",
        "accent": "#D4C5B0",
        "background": "linear-gradient(135deg, #0a0a0a, #141414)",
        "glow": "rgba(190, 190, 190, 0.2)",
    },
    "surprise": {
        "primary": "#00FFFF",
        "secondary": "#FF00FF",
        "accent": "#FFD700",
        "background": "linear-gradient(135deg, #00000f, #0d0020)",
        "glow": "rgba(0, 255, 255, 0.45)",
    },
}

ORIGAMI_ANIMALS = {
    "joy":     {"id": "crane",  "name": "Sunny Crane",    "description": "A bright crane that flaps with quiet excitement."},
    "sadness": {"id": "whale",  "name": "Moon Whale",     "description": "A deep-sea whale drifting through silent currents."},
    "anger":   {"id": "dragon", "name": "Ember Dragon",   "description": "A fierce dragon crackling with restless energy."},
    "fear":    {"id": "fox",    "name": "Night Fox",      "description": "A watchful fox stepping carefully through shadows."},
    "disgust": {"id": "toad",   "name": "Grumpy Toad",    "description": "A skeptical toad who's seen enough, thank you."},
    "neutral": {"id": "cat",    "name": "Sitting Cat",    "description": "A composed cat watching the world with mild interest."},
    "surprise":{"id": "rabbit", "name": "Popcorn Rabbit", "description": "A wide-eyed rabbit who just heard everything."},
}

VIBES = {
    "joy":     {"id": "lofi-sunrise",   "name": "Sunrise Lo-Fi",     "tagline": "Gentle hype for getting things done.",         "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX9RwfGbeGQwP"},
    "sadness": {"id": "rainy-window",   "name": "Rainy Window",      "tagline": "Soft echoes for slow, heavy days.",            "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1"},
    "anger":   {"id": "lightning-riffs","name": "Lightning Riffs",   "tagline": "High-voltage beats to cool your sparks.",      "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe"},
    "fear":    {"id": "neon-escape",    "name": "Neon Escape",       "tagline": "Careful steps through neon alleys.",           "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j"},
    "disgust": {"id": "glitch-garage",  "name": "Glitch Garage",     "tagline": "Weird beats for 'eww, why' moments.",          "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"},
    "neutral": {"id": "coffee-shop",    "name": "Coffee Shop Noise", "tagline": "Background hum for ok-ish days.",              "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"},
    "surprise":{"id": "firework-pop",   "name": "Firework Pop",      "tagline": "Bouncy tunes for plot twists.",                "suggested_playlist_url": "https://open.spotify.com/playlist/37i9dQZF1DX0s5kDXi1oC5"},
}

EMOTION_KEYWORDS = {
    "joy":     ["happy","happiness","great","excellent","wonderful","love","joy","excited","amazing","fantastic","proud","glad","delighted","thrilled","pleased","grateful","thankful","blessed","smile","laugh","celebrate","win","success","beautiful","awesome","incredible","perfect","best"],
    "sadness": ["sad","depressed","unhappy","miss","lost","cry","tears","lonely","hurt","pain","sorry","regret","wish","empty","tired","hopeless","down","blue","grief","mourn","alone","broken","miserable","devastated","heartbroken","weep","sorrow"],
    "anger":   ["angry","furious","hate","annoyed","frustrated","mad","rage","irritated","outraged","livid","bitter","resentful","hostile","enraged","infuriated","disgusted","furious","boiling","explode"],
    "fear":    ["afraid","scared","anxious","worried","nervous","terror","panic","dread","fearful","frightened","uneasy","threat","danger","paranoid","phobia","terrified","horrified","shaking","trembling"],
    "disgust": ["disgusting","gross","nasty","horrible","awful","terrible","revolting","eww","yuck","loathe","despise","repulsed","sick","nauseous","repelled","hideous","vile","foul"],
    "neutral": ["okay","fine","normal","average","usual","ordinary","regular","standard","typical","mediocre","alright","decent"],
    "surprise":["surprised","shocked","unexpected","wow","amazing","unbelievable","astonished","astounded","stunned","incredible","whoa","gasp","plot","twist","suddenly","never","expected"],
}

REASONING_TEMPLATES = {
    "joy":     "Words like {tokens} light up the text: accomplishment, warmth, and contentment radiate through your message.",
    "sadness": "The weight in {tokens} carries a quiet melancholy, your words drift like leaves on still water.",
    "anger":   "The sharp heat in {tokens} reveals frustration bubbling just beneath the surface.",
    "fear":    "Words like {tokens} point to tension: a sense of stepping carefully through unknown territory.",
    "disgust": "The presence of {tokens} reveals a strong aversion; something here just doesn't sit right.",
    "neutral": "Your text reads with a measured, even tone; grounded and balanced, neither high nor low.",
    "surprise":"The unexpected energy in {tokens} suggests a plot-twist moment, something clearly caught you off guard.",
}


def get_ui_mapping(emotion: str) -> dict:
    return {
        "palette": EMOTION_PALETTES[emotion],
        "origami_animal": ORIGAMI_ANIMALS[emotion],
        "vibe": VIBES[emotion],
    }


def get_explanation(text: str, top_emotion: str) -> dict:
    words = text.lower().split()
    keywords = EMOTION_KEYWORDS.get(top_emotion, [])

    found_tokens = []
    for word in words:
        clean = "".join(c for c in word if c.isalpha())
        if clean in keywords and clean not in [t["token"] for t in found_tokens]:
            weight = round(min(0.1 + len(clean) / 40, 0.95), 2)
            found_tokens.append({"token": clean, "weight": weight})

    found_tokens.sort(key=lambda x: x["weight"], reverse=True)
    found_tokens = found_tokens[:5]

    if found_tokens:
        token_str = ", ".join(f"'{t['token']}'" for t in found_tokens[:3])
        reasoning = REASONING_TEMPLATES.get(top_emotion, "Your emotional signature has been decoded.").format(tokens=token_str)
    else:
        reasoning = f"The overall tone and rhythm of your message carries a strong {top_emotion} signature; emotion lives in every sentence, not just individual words."

    return {"important_tokens": found_tokens, "reasoning": reasoning}
