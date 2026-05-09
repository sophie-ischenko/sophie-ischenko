import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Preloader } from './Preloader';
import { NoiseOverlay } from './NoiseOverlay';
import { MorphingShape } from './MorphingShape';
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
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

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
        <Link
  to="/"
  className="pointer-events-auto font-almoda text-xl"
>
  FUNDAMENT STUDIO<span className="text-[var(--color-accent)]">.</span>
</Link>
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