import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Kotlin", "Java", "JavaScript", "C++", "C", "Python", "HTML", "CSS", "XML", "Matlab"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Android Studio", "React Native", "Kotlin", "JetPack Compose", "Firebase", "Android SDK"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Canva", "Material Design", "Responsive Design", "Wireframing", "Prototyping"],
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["ReactJs", "NodeJs", "Express", "MERN Stack", "FastAPI", "PostgreSQL", "SQL Server"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Visual Studio Code", "Vercel", "Firebase", "Agile Scrum", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-smooth border-2 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-background transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <h3 className="text-xl font-bold text-primary mb-4">Certifications & Honors</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <p className="text-sm">PEEF Scholarship Candidate</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <p className="text-sm">Gold Medalist in Matriculation</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <p className="text-sm">Position Holder in Dareecha Competition</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
