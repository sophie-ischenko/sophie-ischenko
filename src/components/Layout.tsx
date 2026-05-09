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
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-700 bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <Preloader />
      <NoiseOverlay />
      <MorphingShape />
      
      {/* Progress Indicator / Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--theme-accent)] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header (Minimal Logo Only) */}
      <motion.header 
        className="fixed top-0 left-0 w-full p-6 z-40 mix-blend-difference text-white pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: headerVisible ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-primary tracking-tighter pointer-events-auto hover-trigger">
            FUNDAMENT STUDIO<span className="text-[var(--theme-accent)]">.</span>
          </Link>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
