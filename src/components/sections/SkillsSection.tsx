import { Cloud } from "@/components/Cloud";
import {
  Code2,
  Database,
  Palette,
  Cloud as CloudIcon,
  Smartphone,
  GitBranch,
  Layers,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Visualization",
    icon: Database,
    skills: ["Microsoft Power BI", "Data Analysis", "Dashboard Design"],
    color: "from-sky-deep to-sky-dark",
  },
  {
    title: "Automation & Integration",
    icon: CloudIcon,
    skills: ["Power Automate", "Power Apps", "SharePoint", "System Integration"],
    color: "from-primary to-sky-medium",
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["PHP (Laravel)", "Java (JSP, Servlet)", "Node.js", "C++", "CSS"],
    color: "from-sunset-orange to-sunset-pink",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Oracle SQL Developer", "phpMyAdmin"],
    color: "from-sky-medium to-sky-deep",
  },
  {
    title: "System Design",
    icon: Layers,
    skills: ["SRS Documentation", "SDD Documentation", "UML", "System Architecture"],
    color: "from-sky-dark to-primary",
  },
  {
    title: "Multimedia & Design",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Dreamweaver"],
    color: "from-primary to-sky-dark",
  },
  {
    title: "Software Testing",
    icon: Cpu,
    skills: ["UAT", "Test Descriptions (STD)", "Test Results (STR)", "Bug Tracking"],
    color: "from-sky-medium to-sunset-orange",
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["VS Code", "GitHub", "Trello", "Draw.io", "MS Office", "Arduino IDE"],
    color: "from-sunset-pink to-sky-medium",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 bg-gradient-sky dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Decorative Clouds */}
      <Cloud className="top-16 right-[8%] animate-float" size="xl" variant="light" />
      <Cloud className="bottom-24 left-[5%] animate-float-slow" size="lg" />
      <Cloud className="top-40 left-[15%] animate-float-reverse" size="md" variant="medium" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-cloud-white dark:bg-slate-800 rounded-2xl p-6 shadow-cloud hover:shadow-float transition-all duration-500 hover:-translate-y-2 border dark:border-slate-700"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-cloud-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
