import { Cloud } from "@/components/Cloud";
import { Briefcase, Calendar, MapPin, Plane } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "IT Intern under Team Data",
    company: "Malaysia Aviation Group (MAG)",
    location: "Sepang, Selangor",
    period: "Sep 2025 - Mar 2026",
    description: "Developed interactive dashboards and automated processes for the Data Team.",
    achievements: [
      "Developed Power BI dashboards for resource & compliance tracking",
      "Automated SharePoint data integration via Power Automate (80% less manual work)",
      "Optimized dashboards for attrition, training, and fuel efficiency",
    ],
  },
  {
    title: "Project Administrative Assistant",
    company: "ADN Services Sdn Bhd",
    location: "Kuala Lumpur",
    period: "Apr 2023 - Sep 2023",
    description: "Assisted in project coordination and system improvements.",
    achievements: [
      "Improved Staff Attendance System based on user feedback",
      "Coordinated projects and tracked progress using MS Office",
      "Supported engineers during site visits",
    ],
  },
  {
    title: "IT Intern",
    company: "ADN Services Sdn Bhd",
    location: "Kuala Lumpur",
    period: "Oct 2022 - Mar 2023",
    description: "Developed internal systems and managed requirements.",
    achievements: [
      "Developed & maintained Staff Attendance System",
      "Designed UI and integrated tracking features",
      "Prepared Software Requirements Specification (SRS)",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-cyan-50 via-sky-50/50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden transition-colors duration-300">
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none text-sky-300">
        <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          {/* Simple World Map Silhouette */}
          <path fill="currentColor" d="M226.6,187c-0.6,-3 -4.2,-3.6 -6,-1.2c-1.8,2.4 -0.6,6 2.4,6.6c3,0.6 5.4,-2.4 3.6,-5.4zM245.2,176.2c-1.2,0.6 -1.8,2.4 -0.6,3.6c1.2,1.2 3,1.2 3.6,-0.6c0.6,-1.2 0,-3 -1.2,-3.6c-0.6,-0.6 -1.2,-0.6 -1.8,0.6zM266.2,166.6c-1.2,1.2 -1.2,3 0.6,3.6c1.8,0.6 3.6,-0.6 3,-2.4c-0.6,-1.8 -2.4,-1.8 -3.6,-1.2zM860,187c-1.2,1.8 -0.6,4.2 1.2,5.4c1.8,1.2 4.2,0.6 5.4,-1.2c1.2,-1.8 0.6,-4.2 -1.2,-5.4c-1.8,-1.2 -4.2,-0.6 -5.4,1.2zM750,250c10,20 40,15 50,30c10,15 -10,40 -30,40c-20,0 -40,-20 -50,-40c-10,-20 10,-40 30,-30z M150,200c20,10 30,40 50,40c15,0 25,-30 15,-40c-10,-10 -50,-20 -65,0z M550,150c10,5 20,20 30,15c10,-5 5,-20 -5,-25c-10,-5 -30,0 -25,10z" />

          {/* Flight Path Lines Decoration */}
          <path fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" d="M200,200 Q400,100 600,200 T900,250" />
          <path fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" d="M100,300 Q300,400 500,300 T800,150" />
        </svg>
      </div>

      {/* Decorative Clouds */}
      <Cloud className="top-20 left-[3%] animate-float" size="lg" variant="medium" />
      <Cloud className="bottom-10 right-[5%] animate-float-slow" size="md" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Charting my professional journey
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Flight Path Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-200 via-primary to-sky-200 border-l-2 border-dashed border-white/50 md:-translate-x-1/2 h-full z-0" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className={`experience-item relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>

                {/* Timeline Node (Airport Code) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-[1.4rem] md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary shadow-glow flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{
                      rotate: index % 2 === 0 ? -45 : 45,
                      scale: 1.2
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }}
                  >
                    <Plane className="plane-icon w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:w-[calc(50%-2rem)]">
                  <motion.div
                    className="experience-card relative bg-white dark:bg-slate-800 rounded-2xl p-0 overflow-hidden shadow-float border-2 border-sky-100/50 dark:border-slate-600/50 cursor-pointer transition-colors duration-300"
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.25)',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Boarding Pass Header strip */}
                    <div className="bg-sky-950/5 dark:bg-slate-700/50 p-4 border-b border-sky-100 dark:border-slate-600 flex justify-between items-center">
                      <span className="font-mono text-xs font-bold text-sky-900 dark:text-sky-300 tracking-widest">BOARDING PASS</span>
                      <span className="font-mono text-xs text-sky-600/80 dark:text-sky-400/80">{item.period.split(' - ')[0].toUpperCase()} &rarr; {item.period.split(' - ')[1].toUpperCase()}</span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <div className="text-secondary-foreground/80 font-medium flex items-center gap-2 mt-1">
                            <Briefcase className="w-4 h-4 text-primary" />
                            {item.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-mono bg-sky-50/50 dark:bg-slate-700/50 w-fit px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-primary" />
                        {item.location}
                      </div>

                      <p className="text-foreground/80 text-sm mb-4 leading-relaxed border-l-2 border-primary/20 pl-3">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Barcode Strip Decoration */}
                    <div className="h-2 bg-gradient-to-r from-transparent via-sky-950/10 to-transparent w-full mt-2" />
                  </motion.div>
                </div>

                {/* Empty Side for layout balance on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};
