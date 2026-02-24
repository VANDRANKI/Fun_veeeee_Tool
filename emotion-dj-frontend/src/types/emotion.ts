export type EmotionLabel = "joy" | "sadness" | "anger" | "fear" | "disgust" | "neutral" | "surprise";

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  glow: string;
}

export interface OrigamiAnimal {
  id: string;
  name: string;
  description: string;
}

export interface Vibe {
  id: string;
  name: string;
  tagline: string;
  suggested_playlist_url?: string;
}

export interface UIMapping {
  palette: ColorPalette;
  origami_animal: OrigamiAnimal;
  vibe: Vibe;
}

export interface EmotionProbability {
  emotion: EmotionLabel;
  prob: number;
}

export interface ImportantToken {
  token: string;
  weight: number;
}

export interface PredictionResponse {
  input: { text: string };
  model: {
    name: string;
    version: string;
    taxonomy: EmotionLabel[];
  };
  prediction: {
    top_emotion: EmotionLabel;
    probabilities: EmotionProbability[];
    confidence: number;
  };
  ui_mapping: UIMapping;
  explanation: {
    important_tokens: ImportantToken[];
    reasoning: string;
  };
  meta: {
    request_id: string;
    processing_ms: number;
  };
}
