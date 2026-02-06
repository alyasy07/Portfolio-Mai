import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="fixed top-20 right-4 md:right-8 z-40 p-3 bg-cloud-white dark:bg-slate-800 rounded-full shadow-cloud hover:shadow-float transition-all duration-300 border-2 border-sky-100 dark:border-slate-700"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "light" ? (
                    <Moon className="w-5 h-5 text-sky-900" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                )}
            </motion.div>
        </motion.button>
    );
};
