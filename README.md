# Vibe Canvas: Your Mood, Decoded by AI

Type how you feel. Watch an origami zoo turn your words into color, creatures, and emotion music vibes.

---

## What it does

Vibe Canvas takes a short piece of text, runs it through a real transformer emotion model, and returns:

- The dominant emotion from 7 classes (joy, sadness, anger, fear, disgust, neutral, surprise)
- An origami animal that embodies that emotion, animated and themed
- A full emotion probability breakdown
- A DJ vibe card with a matching music playlist
- Key words that drove the prediction, with a plain-language explanation

---

## Project Structure

```
emotion-dj-frontend/   -- Next.js 14 frontend (App Router)
emotion-dj-backend/    -- FastAPI backend (model serving)
emotion-dj-ml/         -- Python notebooks for data exploration and evaluation
```

---

## Stack

| Layer      | Technology                                          |
|------------|-----------------------------------------------------|
| Frontend   | Next.js 14, Tailwind CSS, Framer Motion, Recharts   |
| Backend    | FastAPI, Python, Pydantic v2                        |
| ML / Model | HuggingFace Transformers, DistilRoBERTa, PyTorch    |
| Dataset    | GoEmotions (58k Reddit comments, Apache 2.0)        |

---

## Running Locally

### Backend

```bash
cd emotion-dj-backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The model (`emotion-english-distilroberta-base`) downloads automatically from HuggingFace on first startup (~300 MB).

### Frontend

```bash
cd emotion-dj-frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Open `http://localhost:3000`.

---

## ML Notebooks

Run these in `emotion-dj-ml/` with a Python environment that has `datasets`, `transformers`, `torch`, `scikit-learn`, `matplotlib`, and `seaborn`.

| Notebook                        | What it does                                        |
|---------------------------------|-----------------------------------------------------|
| `01_explore_goemotions.ipynb`   | Downloads GoEmotions, explores label distribution   |
| `02_baseline_evaluation.ipynb`  | Evaluates DistilRoBERTa on GoEmotions val split     |

Artifacts saved to `emotion-dj-ml/artifacts/`.

---

## Model

**`emotion-english-distilroberta-base`**

- Architecture: DistilRoBERTa-base (~82M parameters)
- Trained on: 6 diverse emotion datasets (Twitter, Reddit, etc.)
- Output: 7-class softmax probabilities
- Baseline accuracy on GoEmotions (7-class): ~65%

---

## Pages

| Route                 | Description                              |
|-----------------------|------------------------------------------|
| `/`                   | Landing page, hero + how it works       |
| `/play`               | Main Vibe Canvas playground               |
| `/behind-the-scenes`  | Dataset, model, and evaluation details   |
| `/about`              | Project story, tech stack, architecture  |
