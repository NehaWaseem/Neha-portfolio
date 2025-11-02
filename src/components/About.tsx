import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      institution: "National University of Computer and Emerging Sciences",
      degree: "Bachelors in Computer Science",
      location: "Lahore, Pakistan",
      date: "Jan 2026",
      gpa: "CGPA: 3.25 / 4.0",
    },
    {
      institution: "Kinnaird College for Women",
      degree: "Intermediate In Computer Sciences",
      location: "Lahore, Pakistan",
      date: "Aug 2022",
      gpa: "Marks: 1015 / 1100",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-smooth border-2"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.date}
                    </span>
                    <span className="flex items-center gap-1 text-accent font-semibold">
                      <Award className="w-4 h-4" />
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm">Finalist: Dareecha Competition & Inter region Declamation Contests</p>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm">Conferences: JT Medley, Inter region contest for Art literature '19</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
