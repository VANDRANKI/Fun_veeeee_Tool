"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ChameleonWatcher from "@/components/play/ChameleonWatcher";

const PLACEHOLDERS = [
  "Confess to the Fox…",
  "Tell the Moon Whale your secrets…",
  "The Crane is listening…",
  "Even the Grumpy Toad is curious…",
  "Whisper to the Rabbit…",
];

interface Props {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

export default function MoodInputPanel({ onSubmit, isLoading }: Props) {
  const [text, setText] = useState("");
  const [placeholder] = useState(() => PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);

  const charCount = text.length;
  const maxChars = 500;
  const tooShort = charCount > 0 && charCount < 10;
  const tooLong = charCount > maxChars;
  const canSubmit = charCount >= 10 && !tooLong && !isLoading;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (canSubmit) onSubmit(text);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
          Spin Your Mood
        </h1>
        <p className="text-white/50 text-lg font-display">
          Type a sentence or your whole day.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative glass rounded-2xl overflow-hidden border border-white/10 focus-within:border-white/25 transition-colors">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={6}
            maxLength={maxChars + 10}
            disabled={isLoading}
            className="w-full bg-transparent p-6 text-white placeholder-white/25 text-lg resize-none outline-none font-display leading-relaxed"
          />

          <div className="flex items-center justify-between px-6 pb-4">
            <div className="flex items-center gap-3">
              {tooShort && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-yellow-400/80"
                >
                  Too short, come on.even the hamster is confused.
                </motion.span>
              )}
              {tooLong && (
                <span className="text-sm text-red-400/80">Even the whale can&apos;t hold this much.</span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-xs font-display tabular-nums ${tooLong ? "text-red-400" : "text-white/25"}`}>
                {charCount}/{maxChars}
              </span>

              <motion.button
                type="submit"
                disabled={!canSubmit}
                whileHover={canSubmit ? { scale: 1.03 } : {}}
                whileTap={canSubmit ? { scale: 0.97 } : {}}
                className="px-6 py-2.5 rounded-xl font-display font-semibold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: canSubmit ? "var(--e-primary)" : "rgba(255,255,255,0.1)",
                  color: canSubmit ? "#080811" : "rgba(255,255,255,0.3)",
                }}
              >
                {isLoading ? "Reading…" : "Spin My Mood ↗"}
              </motion.button>
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-col items-center mt-3 gap-0">
        <p className="text-center text-white/20 text-xs font-display">
          We promise the crane doesn&apos;t judge… much.
        </p>
        <ChameleonWatcher />
      </div>
    </motion.div>
  );
}
