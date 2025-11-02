import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Folio3 Software",
      role: "Software Engineer Intern",
      location: "Hybrid (Lahore, Pakistan)",
      date: "June 2025 - Aug 2025",
      achievements: [
        "Developed a cross-platform mobile application using React Native, enabling real-time facial detection and automated photo filtering",
        "Built and integrated FastAPI-based RESTful backend services with PostgreSQL database",
        "Implemented frontend–backend synchronization with secure API calls",
        "Engineered state management and modular architecture for maintainability",
        "Deployed backend on Vercel, streamlining CI/CD workflows",
        "Collaborated in Agile Scrum sprints with daily stand-ups and sprint reviews",
        "Designed interactive wireframes and UI prototypes in Figma",
      ],
    },
    {
      company: "Anayzzin Solutions",
      role: "Android Development Internship",
      location: "Remote (Texas, USA)",
      date: "July 2024 - Oct 2024",
      achievements: [
        "Worked in the development team for deployment of an Islamic Banking App",
        "Implemented real-time database with Firebase on Android applications",
        "Kotlin Development following efficient app structure",
        "Applied Jet Pack Compose for creating interactive and responsive UI/UX",
        "Implemented Splash screen, animations and launcher icons",
        "Working with Android Studio Environment and Android SDK",
        "Participated in Smoke Testing of the Islamic Banking App",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-glow transition-smooth border-2"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-accent font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
