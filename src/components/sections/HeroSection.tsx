import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud } from "@/components/Cloud";
import { Airplane } from "@/components/Airplane";
import { ArrowDown, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import heroImage from "@/assets/hero-sky.jpg";
import heroNightImage from "@/assets/hero-sky-night.png";

export const HeroSection = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // --- Parallax Logic ---

  // Layer 1 (Back): Background Gradient (Static via CSS, but we can add subtle shift)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Layer 2 (Middle): Clouds (Slow move)
  const cloud1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Layer 3 (Front): Airplane (Fly + Scale Up)
  // Reverting to simpler motion for the Lucide icon as requested, but keeping it smooth
  const airplaneX = useTransform(scrollYProgress, [0, 1], ["-10vw", "110vw"]);
  const airplaneY = useTransform(scrollYProgress, [0, 1], ["5vh", "20vh"]);

  // Layer 4 (Top): Floating Hero Frame (Distinct speed for 3D effect)
  const frameY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // Moves very slowly compared to others

  // Text Parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[110vh] flex items-center overflow-hidden"
    >
      {/* Background Image - Theme Aware */}
      <div className="absolute inset-0 z-0">
        <img
          src={theme === "dark" ? heroNightImage : heroImage}
          alt="Sky Background"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
      </div>

      {/* Parallax Layers - Clouds updated for harmony and balance */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none z-10 overflow-visible">
        {/* Top Right - Large */}
        <Cloud style={{ y: cloud1Y }} className="top-[8%] right-[5%] opacity-90 text-white drop-shadow-xl" size="xl" variant="heavy"
          animate={{ x: [0, 10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />

        {/* Top Left - Medium */}
        <Cloud style={{ y: cloud2Y }} className="top-[15%] left-[5%] opacity-80 text-white/90" size="lg" variant="medium"
          animate={{ x: [0, -15, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />

        {/* Bottom Center-Left - Small */}
        <Cloud style={{ y: cloud3Y }} className="bottom-[25%] left-[20%] opacity-90 text-white/80" size="md" variant="light"
          animate={{ x: [0, 8, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>

      {/* Layer 3: Airplane (Lucide Icon restored) */}
      <Airplane
        style={{ x: airplaneX, y: airplaneY }}
        className="top-[20%] left-0 z-10 text-white opacity-90"
        size={64} // Standard Luxice Icon Size
        animate={{ y: [0, -10, 0] }} // Gentle float
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* --- Main Grid Layout --- */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 h-full pt-10">

        {/* Left Column: Text Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="h-[2px] w-12 bg-sky-900/50"></span>
            <p className="text-sky-900 font-bold tracking-[0.2em] uppercase text-xs">
              Captain Speaking
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-sky-950 dark:text-white leading-[1.1] tracking-tighter drop-shadow-sm"
          >
            NURUL IZZATI<br />MAISARAH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sky-800/80 dark:text-sky-200/90 text-lg font-medium max-w-2xl leading-relaxed font-sans"
          >
            Proactive final-year <span className="font-bold text-sky-950 dark:text-white">Information Systems Engineering</span> student with experience in data visualization, IT documentation, and project coordination. Driving digital transformation and data-driven decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 pt-4 flex-wrap"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-sky-950 dark:bg-sky-600 text-white rounded-sm hover:bg-sky-800 dark:hover:bg-sky-500 transition-all duration-300 shadow-xl hover:shadow-sky-900/20 tracking-wider font-bold text-sm uppercase flex items-center gap-2 group"
            >
              View Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="/Resume.pdf"
              download="Maisarah_Resume.pdf"
              className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-sky-950 dark:border-sky-400 text-sky-950 dark:text-sky-400 rounded-sm hover:bg-sky-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-xl hover:shadow-sky-900/20 tracking-wider font-bold text-sm uppercase flex items-center gap-2 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Frame (Glass Window) */}
        <motion.div
          style={{ y: frameY }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          {/* The "First Class" Window Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative w-[320px] h-[480px] md:w-[380px] md:h-[540px] bg-sky-100/10 backdrop-blur-none border border-white/40 shadow-2xl rounded-t-[100px] rounded-b-[40px] flex items-center justify-center p-6 z-20 group"
          >
            {/* Window Reflection Effect */}
            <div className="absolute inset-0 rounded-t-[100px] rounded-b-[40px] bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-30" />

            {/* Profile Image Container */}
            <div className="w-full h-full rounded-t-[80px] rounded-b-[30px] overflow-hidden relative shadow-inner border-[4px] border-white/20">
              <img
                src="/public/images/Maisarah.png"
                alt="Nurul Izzati Maisarah"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Floating "Status" Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 bg-white/90 backdrop-blur-sm px-6 py-4 shadow-lg rounded-lg border border-white z-40"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-bold text-sky-950 text-sm leading-none">STATUS</p>
                  <p className="text-xs text-sky-600 font-medium mt-1">Ready for Takeoff</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Back Pattern */}
          <div className="absolute top-[20px] left-[20px] w-full h-full border-2 border-dashed border-sky-900/20 rounded-t-[100px] rounded-b-[40px] -z-10" />
        </motion.div>

      </div>

      {/* --- Bottom Navigation (Centered Column) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-0 right-0 z-40 flex flex-col items-center gap-8"
      >
        {/* Social Icons Row */}
        <div className="flex items-center gap-6 bg-white/30 dark:bg-slate-800/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 dark:border-slate-600/50 shadow-sm">
          <a href="https://github.com/alyasy07" target="_blank" rel="noopener noreferrer" className="text-sky-900/80 dark:text-sky-300 hover:text-sky-950 dark:hover:text-white transition-all transform hover:-translate-y-1"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/maisarah-padzil" target="_blank" rel="noopener noreferrer" className="text-sky-900/80 dark:text-sky-300 hover:text-sky-950 dark:hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={20} /></a>
          <a href="mailto:nimbmp@gmail.com" className="text-sky-900/80 dark:text-sky-300 hover:text-sky-950 dark:hover:text-white transition-all transform hover:-translate-y-1 relative z-50"><Mail size={20} /></a>
        </div>

        {/* Scroll Indicator */}
        <a href="#projects" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-sky-900/60 dark:text-sky-300/80 font-bold group-hover:text-sky-900 dark:group-hover:text-white transition-colors">Scroll to Fly</span>
          <ArrowDown className="w-5 h-5 text-sky-900/60 dark:text-sky-300/80 group-hover:text-sky-900 dark:group-hover:text-white animate-bounce transition-colors" />
        </a>
      </motion.div>

    </section>
  );
};
