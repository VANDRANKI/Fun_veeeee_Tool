"use client";

import { motion } from "framer-motion";
import { EmotionLabel } from "@/types/emotion";
import {
  OrigamiCrane, OrigamiWhale, OrigamiDragon,
  OrigamiFox, OrigamiToad, OrigamiCat, OrigamiRabbit,
} from "@/components/origami";

const ANIMAL_MAP: Record<EmotionLabel, React.ComponentType<{ size?: number }>> = {
  joy:     OrigamiCrane,
  sadness: OrigamiWhale,
  anger:   OrigamiDragon,
  fear:    OrigamiFox,
  disgust: OrigamiToad,
  neutral: OrigamiCat,
  surprise:OrigamiRabbit,
};

interface Props {
  emotion: EmotionLabel;
  animalName: string;
  animalDescription: string;
  palette: { primary: string; glow: string };
}

export default function OrigamiScene({ emotion, animalName, animalDescription, palette }: Props) {
  const Animal = ANIMAL_MAP[emotion];

  return (
    <div className="flex flex-col items-center justify-center relative py-8">
      {/* Ambient glow rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          background: `radial-gradient(circle, ${palette.glow} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{ width: 260, height: 260, borderColor: palette.primary, opacity: 0.12 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{ width: 300, height: 300, borderColor: palette.primary, opacity: 0.06 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* The animal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
        className="relative z-10"
      >
        <Animal size={220} />
      </motion.div>

      {/* Name + description */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-4 z-10 relative"
      >
        <p className="font-display font-bold text-xl" style={{ color: palette.primary }}>
          {animalName}
        </p>
        <p className="text-white/40 text-sm font-display mt-1 max-w-[200px] mx-auto">
          {animalDescription}
        </p>
      </motion.div>
    </div>
  );
}
