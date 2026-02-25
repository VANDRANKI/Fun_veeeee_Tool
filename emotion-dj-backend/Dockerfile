FROM python:3.11-slim

RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

COPY --chown=user requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN python -c "from transformers import pipeline; pipeline('text-classification', model='j-hartmann/emotion-english-distilroberta-base', return_all_scores=True)"

COPY --chown=user app/ ./app/

EXPOSE 7860

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]
