import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

export const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-sky-100 via-sky-50 to-white"
                >
                    <div className="relative">
                        {/* Animated Plane */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <Plane className="w-20 h-20 text-primary" />
                        </motion.div>

                        {/* Cloud Trail */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-sky-200/40 rounded-full blur-xl"
                        />

                        {/* Loading Text */}
                        <motion.p
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mt-8 text-center font-display text-lg text-sky-900 font-semibold"
                        >
                            Taking Off...
                        </motion.p>

                        {/* Progress Dots */}
                        <div className="flex gap-2 justify-center mt-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-2 bg-primary rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
