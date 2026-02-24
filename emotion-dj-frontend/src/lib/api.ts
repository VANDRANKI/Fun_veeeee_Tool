import { PredictionResponse } from "@/types/emotion";

export async function predictEmotion(text: string): Promise<PredictionResponse> {
  const res = await fetch(`/api/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `Request failed: ${res.status}`);
  }

  return res.json();
}

export async function healthCheck(): Promise<{ status: string }> {
  const res = await fetch(`/api/health`);
  return res.json();
}
