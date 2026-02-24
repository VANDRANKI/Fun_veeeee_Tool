"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-16">

        {/* Header */}
        <FadeIn>
          <h1 className="font-display font-bold text-5xl text-white mb-4">About</h1>
          <p className="text-white/45 text-lg leading-relaxed">
            The honest story behind this fun-vee project.
          </p>
        </FadeIn>

        {/* Why Emotion DJ */}
        <FadeIn delay={0.1}>
          <div className="glass rounded-2xl p-8 border border-white/5 space-y-5">
            <h2 className="font-display font-bold text-2xl text-white">Scooby-Dooby-Doo!</h2>

            <p className="text-white/60 text-sm leading-relaxed">
              You know that thing where you have a day so deeply, specifically bad that you
              desperately need to talk about it, but then you open your chat list and realize
              every single person on it is also just{" "}
              <span className="text-white/85">barely holding it together?</span>
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Your friends are already running on three hours of sleep and silent anxiety. Your
              family would turn it into a life lesson you didn&apos;t ask for. And your therapist
              costs money per hour, so you&apos;re saving that for the{" "}
              <em className="text-white/80">real</em> emergencies.
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              So you just... sit there. Feeling a feeling with no outlet. Very mature. Very fine.
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Vibe Canvas is what happens when you build the friend who is{" "}
              <span className="text-white/85">always available</span>, never tired, and
              genuinely does not have their own problems to redirect the conversation toward.
              You type whatever you&apos;re feeling about a rough meeting, a weird 3 AM thought, a
              sentence you can&apos;t explain and it names the emotion, wraps it in an origami
              animal, shifts the whole screen to match your vibe, and hands you a soundtrack.
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              No follow-up questions.{" "}
              <span className="text-white/35 italic text-xs">
                (definitely no &quot;have you tried journaling?&quot;)
              </span>
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              The data science underneath is real: a DistilRoBERTa model trained on 58k labeled
              texts, seven emotion classes, actual F1 scores. The experience on top is just honest
              about the fact that sometimes you need an outlet that{" "}
              <span className="text-white/85">won&apos;t text you about it later.</span>
            </p>
          </div>
        </FadeIn>

        {/* Links */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4">
            <Link href="/play">
              <span className="inline-flex items-center gap-2 glass rounded-xl px-5 py-3 border border-white/8 font-display text-sm text-white/70 hover:text-white hover:border-white/15 transition-all">
                Try the playground →
              </span>
            </Link>
          </div>
        </FadeIn>

      </div>
      <Footer />
    </main>
  );
}
