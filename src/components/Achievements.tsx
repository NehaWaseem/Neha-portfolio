import { Card } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner - Folio3 Summer Internship Program",
      year: "2025",
      detail: "92.3% Marks",
      icon: Trophy,
    },
    {
      title: "Intermediate of Computer Sciences",
      year: "2022",
      detail: "90.6% Marks",
      icon: Star,
    },
    {
      title: "Winner - Battle Of Brands",
      year: "2022",
      detail: "Inter-regional Competition",
      icon: Trophy,
    },
    {
      title: "Winner - Dareecha Competition",
      year: "2020",
      detail: "Inter-regional Winner",
      icon: Trophy,
    },
    {
      title: "PEEF Scholarship Holder",
      year: "2020",
      detail: "Matriculation Examination",
      icon: Award,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-smooth border-2 group text-center"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-4 group-hover:scale-110 transition-smooth">
                <achievement.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {achievement.title}
              </h3>
              <div className="space-y-1">
                <p className="text-accent font-semibold">{achievement.year}</p>
                <p className="text-sm text-muted-foreground">{achievement.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
