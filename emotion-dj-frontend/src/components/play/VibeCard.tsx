"use client";

import { motion } from "framer-motion";
import { Vibe, ColorPalette } from "@/types/emotion";

interface Props {
  vibe: Vibe;
  palette: ColorPalette;
  confidence: number;
}

export default function VibeCard({ vibe, palette, confidence }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="glass rounded-2xl p-5 border"
      style={{ borderColor: `${palette.primary}30` }}
    >
      {/* DJ badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-display font-semibold px-2 py-0.5 rounded-full" style={{ background: `${palette.primary}20`, color: palette.primary }}>
          ◈ DJ Card
        </span>
        <span className="text-xs text-white/25 font-display">
          {Math.round(confidence * 100)}% confidence
        </span>
      </div>

      {/* Vibe name */}
      <h3 className="font-display font-bold text-2xl mb-1" style={{ color: palette.primary }}>
        {vibe.name}
      </h3>
      <p className="text-white/50 text-sm font-display leading-relaxed mb-4">
        {vibe.tagline}
      </p>

      {/* Playlist link */}
      {vibe.suggested_playlist_url && (
        <a
          href={vibe.suggested_playlist_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-display font-medium transition-opacity hover:opacity-80"
          style={{ color: palette.primary }}
        >
          <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]" style={{ background: `${palette.primary}25` }}>▶</span>
          Open playlist on Spotify
        </a>
      )}
    </motion.div>
  );
}
