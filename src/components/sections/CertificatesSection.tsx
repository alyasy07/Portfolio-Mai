import { Cloud } from "@/components/Cloud";
import { Users, Calendar, MapPin, Award } from "lucide-react";

export const CertificatesSection = () => {
  const activities = [
    {
      title: "Science Computer Society Club (SCICO)",
      role: "Active Member",
      location: "UiTM Machang",
      description: "Participated in organizing tech events and coding workshops."
    },
    {
      title: "Information System Engineering Club (ISEC)",
      role: "Active Member",
      location: "UiTM Shah Alam",
      description: "Collaborated with peers on software engineering projects and seminars."
    },
    {
      title: "Industrial Visit to Agmo Studios",
      role: "Committee Member (Program & Protocol)",
      location: "Agmo Studios",
      description: "Coordinated program flow and protocol for the industrial visit."
    },
    {
      title: "SULAM Program",
      role: "Committee Member (Documentation & Module)",
      location: "Kampung Budiman",
      description: "Managed documentation and module preparation for community engagement."
    },
    {
      title: "Industrial Visit to Fiuu",
      role: "Participant",
      location: "Fiuu",
      description: "Gained exposure to industry practices and corporate culture."
    },
  ];

  return (
    <section id="certificates" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Clouds */}
      <Cloud className="top-20 left-[8%] animate-float" size="lg" variant="medium" />
      <Cloud className="bottom-10 right-[5%] animate-float-slow" size="md" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Activities & Involvement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Extra-curricular leadership and community engagement
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl p-8 shadow-cloud hover:shadow-float transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                    {activity.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">{activity.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {activity.location}
              </div>

              <p className="text-foreground/70 text-sm">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
