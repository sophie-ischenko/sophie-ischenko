import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Preloader } from './Preloader';
import { NoiseOverlay } from './NoiseOverlay';
import { MorphingShape } from './MorphingShape';
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent, frame, cancelFrame } from 'motion/react';
import Lenis from 'lenis';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [headerVisible, setHeaderVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 150) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Lenis in den Frame-Loop von Framer Motion einhängen, statt einen
    // eigenen requestAnimationFrame-Loop zu fahren. So ticken Lenis'
    // Scroll-Updates und Framer Motions scrollYProgress im selben Frame -
    // vorher liefen beide leicht versetzt, wodurch Transforms (Slider,
    // Clip-Path etc.) der tatsächlichen Scroll-Position hinterherhinkten.
    function update({ timestamp }: { timestamp: number }) {
      lenis.raf(timestamp);
    }

    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Preloader />
      <NoiseOverlay />
      <MorphingShape />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left z-50"
        style={{ scaleX }}
      />

      <motion.header
  className="fixed top-0 left-0 w-full p-6 z-40 pointer-events-none"
  initial={{ y: 0 }}
  animate={{ y: headerVisible ? 0 : "-100%" }}
>
  <a
    href="https://fundament-studio.de"
    target="_blank"
    rel="noopener noreferrer"
    className="pointer-events-auto"
  >
    <img
      src="./Logo_klein.svg"
      alt="Fundament Studio"
      className="h-22 w-auto"
    />
  </a>
</motion.header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex-1 w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
