import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface CloudProps extends MotionProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "medium" | "heavy";
}

export const Cloud = ({ className, size = "md", variant = "light", ...props }: CloudProps) => {
  const sizeClasses = {
    sm: "w-24 h-12",
    md: "w-40 h-20",
    lg: "w-64 h-32",
    xl: "w-96 h-48",
  };

  const opacityClasses = {
    light: "opacity-80",
    medium: "opacity-90",
    heavy: "opacity-100",
  };

  return (
    <motion.div
      className={cn("absolute pointer-events-none text-white blur-md dark:opacity-30 transition-opacity duration-500", sizeClasses[size], opacityClasses[variant], className)}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full drop-shadow-md"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.5,19c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-0.7,0-1.3,0.1-1.9,0.3C14.9,1.7,12.3,0,9.5,0C5.1,0,1.5,3.6,1.5,8 c0,0.6,0.1,1.2,0.2,1.7C0.7,10.2,0,11.1,0,12c0,2.2,1.8,4,4,4c0.3,0,0.5,0,0.8-0.1C5.7,17.7,7.5,19,9.5,19c0.4,0,0.7,0,1.1-0.1 C11.8,19,13.6,19,17.5,19z" />
        {/* Simplified puffy cloud shape: Flat bottomish, big arcs */}
        <path d="M18.42 10a7 7 0 0 0-13.84 0 5 5 0 0 0 .92 9.9H19a5 5 0 0 0 0-10h-.58z" />
      </svg>
    </motion.div>
  );
};
