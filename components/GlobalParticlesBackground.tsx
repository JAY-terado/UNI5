"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import type { Engine } from "@tsparticles/engine";

const GlobalParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine: Engine) => {
      // Use slim to load only what's necessary, ensuring GPU-efficient, lightweight rendering
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!mounted || !init) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-[-50]">
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <Particles
            id={`tsparticles-${resolvedTheme}`}
            className="w-full h-full"
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fullScreen: {
                enable: false, // We handle full screen via tailwind fixed inset-0 to avoid styling conflicts
              },
              fpsLimit: 60,
              particles: {
                color: {
                  value: isDark ? "#ffffff" : "#a61e23",
                },
                links: {
                  enable: false, // Premium SaaS look usually avoids spider-web links, prefers clean floating orbs
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: true,
                  speed: isDark ? 0.3 : 0.2, // Slow, ambient motion
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    width: 1920,
                    height: 1080,
                  },
                  value: isDark ? 120 : 85, // Increased density for a more eye-catching effect
                },
                opacity: {
                  value: { min: isDark ? 0.1 : 0.02, max: isDark ? 0.3 : 0.1 },
                  animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false,
                  },
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 0.5, max: isDark ? 3 : 2 },
                  animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                  },
                },
                shadow: isDark
                  ? {
                      enable: true,
                      blur: 15,
                      color: "#ffffff",
                      offset: { x: 0, y: 0 },
                    }
                  : undefined,
              },
              detectRetina: true,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GlobalParticlesBackground;
