import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let currentProgress = 0;
    
    // Simulate loading
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Short pause at 100%
      }
      
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--theme-bg)] text-[var(--theme-text)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[clamp(6rem,15vw,10rem)] font-primary tracking-tighter leading-none mix-blend-difference text-white"
              >
                {progress}%
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm uppercase tracking-widest font-mono opacity-50">
            Fundament Studio
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
