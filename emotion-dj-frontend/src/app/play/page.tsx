"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MoodInputPanel from "@/components/play/MoodInputPanel";
import LoadingFoldAnimation from "@/components/play/LoadingFoldAnimation";
import ResultPanel from "@/components/play/ResultPanel";
import PlayBackground from "@/components/play/PlayBackground";
import { predictEmotion } from "@/lib/api";
import { PredictionResponse } from "@/types/emotion";

type PageState = "idle" | "loading" | "result" | "error";

export default function PlayPage() {
  const [state, setState] = useState<PageState>("idle");
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Apply emotion theme CSS variables whenever a result arrives
  useEffect(() => {
    if (result) {
      const { primary, secondary, glow } = result.ui_mapping.palette;
      document.documentElement.style.setProperty("--e-primary", primary);
      document.documentElement.style.setProperty("--e-secondary", secondary);
      document.documentElement.style.setProperty("--e-glow", glow);
    } else {
      document.documentElement.style.setProperty("--e-primary", "#bebebe");
      document.documentElement.style.setProperty("--e-secondary", "#808080");
      document.documentElement.style.setProperty("--e-glow", "rgba(190,190,190,0.2)");
    }
  }, [result]);

  async function handleSubmit(text: string) {
    setState("loading");
    setErrorMsg("");
    try {
      const data = await predictEmotion(text);
      setResult(data);
      setState("result");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. The toad is unimpressed.");
      setState("error");
    }
  }

  function handleReset() {
    setState("idle");
    setResult(null);
    setErrorMsg("");
  }

  const bg = result?.ui_mapping.palette.background ?? "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)";

  return (
    <main className="min-h-screen relative" style={{ background: bg, transition: "background 1.5s ease" }}>

      {/* Animated floating glow orbs */}
      <PlayBackground />

      {/* Subtle noise grain */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15] z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")" }}
      />

      <Navbar />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <AnimatePresence mode="wait">
          {state === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
              <MoodInputPanel onSubmit={handleSubmit} isLoading={false} />
            </motion.div>
          )}

          {state === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LoadingFoldAnimation />
            </motion.div>
          )}

          {state === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
              <ResultPanel result={result} onReset={handleReset} />
            </motion.div>
          )}

          {state === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-4"
            >
              <p className="font-display text-2xl text-white">Something went wrong.</p>
              <p className="text-white/40 font-display">{errorMsg}</p>
              <button onClick={handleReset} className="font-display text-sm text-white/50 underline underline-offset-4 hover:text-white/80 transition-colors">
                ← Try again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
