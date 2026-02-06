import { Cloud } from "@/components/Cloud";
import { motion } from "framer-motion";
import { Award, Calendar, MapPin, Users } from "lucide-react";

const participationData = [
    {
        title: "SCICO (Science Computer Society Club)",
        role: "Active Member",
        organization: "Universiti Teknologi MARA (UiTM)",
        period: "2020 - 2023",
        location: "Shah Alam, Selangor"
    },
    {
        title: "ISEC (Information System Engineering Club)",
        role: "Active Member",
        organization: "Universiti Teknologi MARA (UiTM)",
        period: "2023 - Present",
        location: "Shah Alam, Selangor"
    },
    {
        title: "Industrial Visit to Fiuu",
        role: "Participant",
        organization: "Fiuu",
        period: "2024",
        location: "Kuala Lumpur"
    },
    {
        title: "Industrial Visit to Agmo Studios",
        role: "Committee Member (Program & Protocol)",
        organization: "Agmo Studios",
        period: "2024",
        location: "Cyberjaya"
    },
    {
        title: "SULAM Program to Kampung Budiman",
        role: "Committee Member (Documentation & Module)",
        organization: "UiTM Community Service",
        period: "2024",
        location: "Kampung Budiman"
    }
];

export const ParticipationSection = () => {
    return (
        <section id="participation" className="relative py-24 bg-gradient-to-b from-sky-100 via-sky-50 to-white dark:bg-none dark:bg-slate-900 overflow-hidden transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-sky-400" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            {/* Decorative Clouds */}
            <Cloud className="top-16 left-[5%] animate-float-slow" size="lg" variant="medium" />
            <Cloud className="bottom-20 right-[8%] animate-float" size="md" variant="light" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Participation & Activities
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Clubs, organizations, and events I've been part of
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Participation Cards */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {participationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.01, y: -2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-gradient-to-br from-white to-sky-50/30 dark:from-slate-800 dark:to-slate-700/30 rounded-xl p-6 shadow-cloud hover:shadow-float transition-all duration-300 border-2 border-sky-100/50 dark:border-slate-600/50"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                                <Award className="w-4 h-4 text-primary" />
                                            </div>
                                            <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-primary font-semibold text-sm md:text-base">{item.role}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-sky-50 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {item.period}
                                    </div>
                                </div>

                                {/* Organization & Location */}
                                <div className="flex flex-wrap gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-foreground/80 dark:text-foreground/70">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span className="font-medium">{item.organization}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        {item.location}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground italic">
                        Continuously seeking opportunities to learn, grow, and contribute to the tech community
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
