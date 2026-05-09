import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MorphingShape() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 20, damping: 20 });
  const springY = useSpring(y, { stiffness: 20, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-difference opacity-50 blur-[100px]"
      style={{
        x: springX,
        y: springY,
        zIndex: -1,
      }}
      animate={{
        scale: [1, 1.2, 0.8, 1],
        borderRadius: ["50%", "30%", "40%", "50%"],
      }}
      transition={{
        scale: { duration: 8, repeat: Infinity, ease: "linear" },
        borderRadius: { duration: 10, repeat: Infinity, ease: "linear" },
      }}
    />
  );
}