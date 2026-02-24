import { EmotionLabel, ColorPalette, OrigamiAnimal, Vibe } from "@/types/emotion";

export const EMOTION_PALETTES: Record<EmotionLabel, ColorPalette> = {
  joy: {
    primary: "#FFE066",
    secondary: "#FFB347",
    accent: "#FF8C42",
    background: "linear-gradient(135deg, #1a0e00 0%, #2d1800 100%)",
    glow: "rgba(255, 224, 102, 0.35)",
  },
  sadness: {
    primary: "#5B9CBD",
    secondary: "#1A3A5C",
    accent: "#2E6B8A",
    background: "linear-gradient(135deg, #020d1a 0%, #041a2e 100%)",
    glow: "rgba(91, 156, 189, 0.35)",
  },
  anger: {
    primary: "#FF4500",
    secondary: "#8B0000",
    accent: "#C0392B",
    background: "linear-gradient(135deg, #0f0000 0%, #1a0000 100%)",
    glow: "rgba(255, 69, 0, 0.45)",
  },
  fear: {
    primary: "#9B59B6",
    secondary: "#4A1A7A",
    accent: "#00FF88",
    background: "linear-gradient(135deg, #060011 0%, #0d0022 100%)",
    glow: "rgba(155, 89, 182, 0.4)",
  },
  disgust: {
    primary: "#82C271",
    secondary: "#4A6741",
    accent: "#B5CC8E",
    background: "linear-gradient(135deg, #050d04 0%, #0a1809 100%)",
    glow: "rgba(130, 194, 113, 0.35)",
  },
  neutral: {
    primary: "#BEBEBE",
    secondary: "#808080",
    accent: "#D4C5B0",
    background: "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
    glow: "rgba(190, 190, 190, 0.2)",
  },
  surprise: {
    primary: "#00FFFF",
    secondary: "#FF00FF",
    accent: "#FFD700",
    background: "linear-gradient(135deg, #00000f 0%, #0d0020 100%)",
    glow: "rgba(0, 255, 255, 0.45)",
  },
};

export const ORIGAMI_ANIMALS: Record<EmotionLabel, OrigamiAnimal> = {
  joy:     { id: "crane",  name: "Sunny Crane",    description: "A bright crane that flaps with quiet excitement." },
  sadness: { id: "whale",  name: "Moon Whale",     description: "A deep-sea whale drifting through silent currents." },
  anger:   { id: "dragon", name: "Ember Dragon",   description: "A fierce dragon crackling with restless energy." },
  fear:    { id: "fox",    name: "Night Fox",      description: "A watchful fox stepping carefully through shadows." },
  disgust: { id: "toad",   name: "Grumpy Toad",    description: "A skeptical toad who's seen enough, thank you." },
  neutral: { id: "cat",    name: "Sitting Cat",    description: "A composed cat watching the world with mild interest." },
  surprise:{ id: "rabbit", name: "Popcorn Rabbit", description: "A wide-eyed rabbit who just heard everything." },
};

export const VIBES: Record<EmotionLabel, Vibe> = {
  joy:     { id: "lofi-sunrise",   name: "Sunrise Lo-Fi",     tagline: "Gentle hype for getting things done.",        suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX9RwfGbeGQwP" },
  sadness: { id: "rainy-window",   name: "Rainy Window",      tagline: "Soft echoes for slow, heavy days.",           suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1" },
  anger:   { id: "lightning-riffs",name: "Lightning Riffs",   tagline: "High-voltage beats to cool your sparks.",     suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe" },
  fear:    { id: "neon-escape",    name: "Neon Escape",       tagline: "Careful steps through neon alleys.",          suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j" },
  disgust: { id: "glitch-garage",  name: "Glitch Garage",     tagline: "Weird beats for 'eww, why' moments.",         suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP" },
  neutral: { id: "coffee-shop",    name: "Coffee Shop Noise", tagline: "Background hum for ok-ish days.",             suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6" },
  surprise:{ id: "firework-pop",   name: "Firework Pop",      tagline: "Bouncy tunes for plot twists.",               suggested_playlist_url: "https://open.spotify.com/playlist/37i9dQZF1DX0s5kDXi1oC5" },
};

export const EMOTION_DESCRIPTIONS: Record<EmotionLabel, string> = {
  joy:     "Warmth, pride, and bright energy radiate outward.",
  sadness: "A quiet ache, reflective and honest.",
  anger:   "Sharp heat, frustration seeking release.",
  fear:    "Tension in the shadows, hyper-alert.",
  disgust: "A strong aversion for something's just off.",
  neutral: "Balanced, measured, neither here nor there.",
  surprise:"A plot twist. The world just got unpredictable.",
};
