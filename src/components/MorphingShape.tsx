import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function MorphingShape() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="morphing-shape fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-difference opacity-50 blur-[100px]"
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
        scale: [1, 1.2, 0.8, 1],
        borderRadius: ["50%", "30%", "40%", "50%"],
      }}
      transition={{
        x: { type: "spring", stiffness: 20, damping: 20 },
        y: { type: "spring", stiffness: 20, damping: 20 },
        scale: { duration: 8, repeat: Infinity, ease: "linear" },
        borderRadius: { duration: 10, repeat: Infinity, ease: "linear" },
      }}
      style={{ zIndex: -1 }}
    />
  );
}
