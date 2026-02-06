import { Cloud } from "@/components/Cloud";
import { ExternalLink, Github, Folder, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Outlet Ordering Distribution System",
    description: "Distribution system developed using Visual Studio Code. Includes SRS and SDD documentation.",
    technologies: ["VS Code", "System Design", "Documentation"],
    image: "/public/images/oods_logo.jpeg",
    buttons: [
      { type: "github", url: "https://github.com/alyasy07/OODSV30" },
      { type: "figma", url: "https://www.figma.com/proto/Qf4NhVPSPzA2OtUQLnxwmB/Untitled?node-id=0-1&t=BJgtpw4Xm1uKGoHY-1" }
    ]
  },
  {
    title: "Recipe Sharing and Meal Planning System",
    description: "Meal planning and recipe sharing application using Java EE architecture.",
    technologies: ["JSP", "Servlet", "Java EE", "JDBC", "MVC"],
    image: "/public/images/recipe_logo.jpg",
    buttons: [
      { type: "github", url: "https://github.com/athirahmmn/Group_Project_CSC584" },
      { type: "figma", url: "https://www.figma.com/proto/ShEH6pPqv50Jna4Or24bpZ/RSMP?node-id=0-1&t=BJgtpw4Xm1uKGoHY-1" }
    ]
  },
  {
    title: "Bookshop Online Store",
    description: "E-commerce platform for a bookshop developed with PHP and MySQL.",
    technologies: ["PHP", "MySQL", "Web Development"],
    image: "/public/images/book.png",
    buttons: [
      { type: "figma", url: "#" }
    ]
  },
  {
    title: "Peer Testing - Inventory Management System",
    description: "BH&CO Inventory System with full testing documentation (UAT, STD, STR).",
    technologies: ["Software Testing", "Documentation", "UAT"],
    image: "/public/images/testing.png",
    buttons: [
      { type: "document", url: "https://github.com/alyasy07/documentation/blob/main/STD%20(BH%26CO%20IMS)_FIVERS.pdf" }
    ]
  },
  {
    title: "Levée Fashion Recommendation App",
    description: "Mobile application design and business plan documented using Figma.",
    technologies: ["Figma", "UI/UX", "Business Planning"],
    image: "/public/images/levee_logo.jpeg",
    buttons: [
      { type: "figma", url: "https://www.figma.com/proto/ktsdaRl9B2JUcRxPbWw9P3/ISP640---MIDDLE-FIDELITY--Copy-?node-id=0-1&t=LJ8eU3eSF4k5qBuQ-1" }
    ]
  },
  {
    title: "E-Wallet with Creative Savings",
    description: "Spendity - Creative savings strategy E-Wallet interface designed with Figma.",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    image: "/public/images/spendity_logo.jpeg",
    buttons: [
      { type: "figma", url: "https://www.figma.com/proto/5PUTLsflRLjcolV5fI71yr/ICT551-MIDDLE-FIDELITY?node-id=0-1&t=BnPuGWVtPFdR9wxq-1" }
    ]
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Decorative Clouds */}
      <Cloud className="top-10 left-[5%] animate-float-slow" size="lg" variant="medium" />
      <Cloud className="bottom-20 right-[8%] animate-float" size="md" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card dark:bg-slate-800 rounded-2xl overflow-hidden shadow-cloud hover:shadow-float transition-all duration-500 hover:-translate-y-2 border dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.buttons.map((button, btnIndex) => {
                    let Icon;
                    let ariaLabel;

                    switch (button.type) {
                      case 'github':
                        Icon = Github;
                        ariaLabel = "View on GitHub";
                        break;
                      case 'figma':
                        Icon = () => (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
                            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
                            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
                            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
                          </svg>
                        );
                        ariaLabel = "View on Figma";
                        break;
                      case 'document':
                        Icon = FileText;
                        ariaLabel = "View Documentation";
                        break;
                      default:
                        Icon = ExternalLink;
                        ariaLabel = "View Project";
                    }

                    return (
                      <a
                        key={btnIndex}
                        href={button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ariaLabel}
                        className="p-3 bg-cloud-white dark:bg-slate-800 rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-sky-950 dark:text-slate-100 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
