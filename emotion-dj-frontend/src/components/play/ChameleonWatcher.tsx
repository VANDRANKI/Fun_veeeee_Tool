"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ChameleonWatcher() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pupil, setPupil] = useState({ dx: 0, dy: 0 });

  // Eye centre in viewBox "0 0 300 175"
  const EYE = { x: 248, y: 82 };

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const eyeScreenX = rect.left + (EYE.x / 300) * rect.width;
      const eyeScreenY = rect.top  + (EYE.y / 175) * rect.height;
      const angle = Math.atan2(e.clientY - eyeScreenY, e.clientX - eyeScreenX);
      const dist = 4;
      setPupil({ dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const ex = EYE.x + pupil.dx;
  const ey = EYE.y + pupil.dy;

  return (
    <motion.div
      className="flex flex-col items-center select-none pointer-events-none mt-2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 300 175"
        width="300"
        height="175"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="g-body" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%"   stopColor="#166534" />
            <stop offset="35%"  stopColor="#16a34a" />
            <stop offset="65%"  stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="g-head" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%"   stopColor="#14532d" />
            <stop offset="40%"  stopColor="#15803d" />
            <stop offset="80%"  stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="g-tail" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <linearGradient id="g-branch" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%"   stopColor="#92400e" />
            <stop offset="45%"  stopColor="#78350f" />
            <stop offset="100%" stopColor="#3b1809" />
          </linearGradient>
          <radialGradient id="g-iris" cx="38%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#a7f3d0" />
            <stop offset="28%"  stopColor="#10b981" />
            <stop offset="68%"  stopColor="#065f46" />
            <stop offset="100%" stopColor="#022c22" />
          </radialGradient>
          <radialGradient id="g-eye-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="55%"  stopColor="#4ade80" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0"   />
          </radialGradient>
          <radialGradient id="g-scale" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#14532d" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#14532d" stopOpacity="0"   />
          </radialGradient>
          <filter id="f-drop" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <filter id="f-blur4" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="f-blur2" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* ── BRANCH ── */}
        <path d="M2 161 Q150 156 298 160" stroke="#000" strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.25" />
        <path d="M0 160 Q150 155 300 159" stroke="url(#g-branch)" strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M6 157 Q150 153 294 156" stroke="#b45309" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4" />
        <path d="M35 158 Q130 156 230 158" stroke="#3b1809" strokeWidth="1.5" fill="none" opacity="0.55" />
        <path d="M90 161 Q200 159 270 162" stroke="#92400e" strokeWidth="1" fill="none" opacity="0.3" />

        {/* ── TAIL ── */}
        <path d="M83 124 C60 133 44 150 41 163 C38 175 51 179 64 173 C77 168 79 157 71 151 C64 146 55 150 57 158"
          fill="none" stroke="#0a3d1f" strokeWidth="14" strokeLinecap="round" />
        <path d="M83 124 C60 133 44 150 41 163 C38 175 51 179 64 173 C77 168 79 157 71 151 C64 146 55 150 57 158"
          fill="none" stroke="url(#g-tail)" strokeWidth="10" strokeLinecap="round" />
        <path d="M83 124 C60 133 44 150 41 163 C38 175 51 179 64 173 C77 168 79 157 71 151 C64 146 55 150 57 158"
          fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />

        {/* ── BODY ── */}
        <ellipse cx="153" cy="124" rx="68" ry="28" fill="#000" opacity="0.22" />
        <ellipse cx="150" cy="117" rx="68" ry="28" fill="url(#g-body)" filter="url(#f-drop)" />
        <ellipse cx="147" cy="126" rx="50" ry="15" fill="#86efac" opacity="0.2" />
        <ellipse cx="150" cy="104" rx="63" ry="11" fill="#166534" opacity="0.48" />

        {/* Body scale rows */}
        {[100,116,132,148,164,178].map((x,i) => (
          <ellipse key={`s1${i}`} cx={x} cy={109} rx="7.5" ry="5" fill="url(#g-scale)" />
        ))}
        {[108,124,140,156,170].map((x,i) => (
          <ellipse key={`s2${i}`} cx={x} cy={118} rx="7"   ry="4.5" fill="url(#g-scale)" />
        ))}
        {[116,132,148,162].map((x,i) => (
          <ellipse key={`s3${i}`} cx={x} cy={126} rx="6"   ry="4"   fill="url(#g-scale)" />
        ))}

        {/* Gold bioluminescent spots — glow layer */}
        {[110,127,144,161,176].map((x,i) => (
          <circle key={`sg${i}`} cx={x} cy={106} r="6" fill="#fbbf24" opacity="0.25" filter="url(#f-blur2)" />
        ))}
        {/* Spots */}
        {[110,127,144,161,176].map((x,i) => (
          <circle key={`sp${i}`} cx={x} cy={106} r="3.2" fill="#fde047" opacity="0.8" />
        ))}
        {[110,127,144,161,176].map((x,i) => (
          <circle key={`sh${i}`} cx={x} cy={105} r="1.3" fill="#fef9c3" opacity="0.95" />
        ))}

        {/* ── DORSAL SPINES ── */}
        {[112,127,142,157,171,183].map((x,i) => (
          <polygon key={`dg${i}`} points={`${x-4},88 ${x},75 ${x+4},88`} fill="#4ade80" opacity="0.18" filter="url(#f-blur2)" />
        ))}
        {[112,127,142,157,171,183].map((x,i) => (
          <polygon key={`dp${i}`} points={`${x-4},88 ${x},75 ${x+4},88`} fill="#15803d" />
        ))}
        {[112,127,142,157,171,183].map((x,i) => (
          <line key={`dl${i}`} x1={x} y1={75} x2={x} y2={84} stroke="#4ade80" strokeWidth="1" opacity="0.4" />
        ))}

        {/* ── NECK ── */}
        <ellipse cx="204" cy="109" rx="25" ry="22" fill="url(#g-head)" />

        {/* ── HEAD ── */}
        <ellipse cx="236" cy="100" rx="37" ry="29" fill="url(#g-head)" filter="url(#f-drop)" />
        {[[224,96],[238,92],[250,97],[228,106],[242,104]].map(([hx,hy],i) => (
          <ellipse key={`hs${i}`} cx={hx} cy={hy} rx="5.5" ry="3.5" fill="url(#g-scale)" />
        ))}

        {/* ── CASQUE ── */}
        <path d="M214 89 Q221 67 237 70 Q253 67 261 82" fill="#0a3d1f" opacity="0.55" />
        <path d="M214 89 Q221 67 237 70 Q253 67 261 82" fill="#14532d" />
        <path d="M219 81 Q237 64 256 79" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.35" />

        {/* ── MOUTH ── */}
        <path d="M265 111 Q271 117 266 124" fill="none" stroke="#0a3d1f" strokeWidth="3" strokeLinecap="round" />
        <path d="M266 124 Q262 127 259 125" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />

        {/* ── NOSTRIL ── */}
        <ellipse cx="269" cy="104" rx="2.5" ry="2" fill="#0a3d1f" />

        {/* ── EYE ── */}
        {/* Ambient halo */}
        <circle cx={EYE.x} cy={EYE.y} r="32" fill="url(#g-eye-halo)" />
        {/* Glow blur layer */}
        <circle cx={EYE.x} cy={EYE.y} r="22" fill="#4ade80" opacity="0.12" filter="url(#f-blur4)" />
        {/* Outer socket */}
        <circle cx={EYE.x} cy={EYE.y} r="19" fill="#083d20" />
        {/* Top eyelid arc */}
        <path d={`M${EYE.x-16} ${EYE.y-4} Q${EYE.x} ${EYE.y-21} ${EYE.x+16} ${EYE.y-4}`} fill="#0d3d1e" />
        {/* Eyeball */}
        <circle cx={EYE.x} cy={EYE.y} r="15" fill="#f0fdf4" />
        {/* Iris — moves with cursor */}
        <circle cx={ex} cy={ey} r="10" fill="url(#g-iris)" />
        {/* Pupil */}
        <ellipse cx={ex} cy={ey} rx="5" ry="5.5" fill="#000" />
        {/* Main catchlight */}
        <circle cx={ex + 3.5} cy={ey - 3.5} r="3"   fill="white" opacity="0.95" />
        {/* Secondary catchlight */}
        <circle cx={ex - 2.5} cy={ey + 3}   r="1.4" fill="white" opacity="0.45" />
        {/* Lower eyelid shade */}
        <path d={`M${EYE.x-14} ${EYE.y+7} Q${EYE.x} ${EYE.y+17} ${EYE.x+14} ${EYE.y+7}`} fill="#0d3d1e" opacity="0.5" />

        {/* ── FRONT LEFT LEG ── */}
        <path d="M107 137 Q100 143 97 151" stroke="#0a3d1f" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M107 137 Q100 143 97 151" stroke="url(#g-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M97 151 Q91 157 89 163" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M89 163 Q85 167 82 165 M89 163 Q87 168 85 170 M89 163 Q90 169 88 171 M89 163 Q93 167 95 165"
          stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* ── FRONT RIGHT LEG ── */}
        <path d="M194 137 Q201 143 204 151" stroke="#0a3d1f" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M194 137 Q201 143 204 151" stroke="url(#g-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M204 151 Q210 157 212 163" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M212 163 Q216 167 219 165 M212 163 Q214 168 216 170 M212 163 Q212 169 214 171 M212 163 Q209 167 207 165"
          stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      </svg>
    </motion.div>
  );
}
