import { Cloud } from "@/components/Cloud";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Information Systems (Hons.) Information Systems Engineering",
    institution: "Universiti Teknologi MARA (UiTM), Shah Alam",
    period: "2023 - 2026",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Universiti Teknologi MARA (UiTM), Machang",
    period: "2020 - 2023",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 bg-gradient-sky dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Decorative Clouds */}
      <Cloud className="top-10 right-[5%] animate-float-slow" size="md" variant="light" />
      <Cloud className="bottom-20 left-[8%] animate-float" size="lg" variant="light" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that laid the foundation for my career
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] shadow-glow" />

              {/* Content Card */}
              <div className="bg-gradient-card dark:bg-slate-800 rounded-xl p-6 shadow-cloud hover:shadow-float transition-all duration-300 ml-4 border dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-sky-950 dark:text-slate-100 mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
