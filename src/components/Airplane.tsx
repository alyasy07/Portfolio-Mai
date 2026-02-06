import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";
import { motion, MotionProps } from "framer-motion";

interface AirplaneProps extends MotionProps {
  className?: string;
  size?: number;
}

export const Airplane = ({ className, size = 24, ...props }: AirplaneProps) => {
  return (
    <motion.div
      className={cn("absolute z-20 pointer-events-none", className)}
      {...props}
    >
      <Plane size={size} className="text-white rotate-45 drop-shadow-lg" />
    </motion.div>
  );
};
