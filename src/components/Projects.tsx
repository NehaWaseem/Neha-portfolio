import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Globe, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ExiPal - Fitness Tracking App",
      type: "Mobile App",
      icon: Smartphone,
      date: "Jan 2025 - May 2025",
      description: "Fitness tracking application with AI-powered features for workout tracking and guidance",
      technologies: ["React Native", "Google ML Kit", "AI Chatbot", "Stripe", "Computer Vision"],
      features: [
        "Squats and push-up tracking using Computer Vision",
        "AI chatbot for fitness queries and guidance",
        "Chat rooms and messaging system",
        "Calorie tracker and workout plans",
        "Premium packages with Stripe payment integration",
      ],
    },
    {
      title: "LIPIFI - Lost and Found App",
      type: "Mobile App",
      icon: Smartphone,
      date: "Sep 2024 - Dec 2024",
      description: "Kotlin-based Android application for lost and found functionality with real-time features",
      technologies: ["Kotlin", "Firebase", "Figma", "Android SDK", "Authentication"],
      features: [
        "Complete lost and found functionality",
        "Real-time database with Firebase",
        "Messaging and chat room functionality",
        "Advanced searching and filtering mechanism",
        "User authentication and profile management",
      ],
    },
    {
      title: "Luxora - Hotel Management System",
      type: "Web App",
      icon: Globe,
      date: "Sep 2024 - Jan 2025",
      description: "Full-stack hotel reservation and management website built with MERN stack",
      technologies: ["React", "Node.js", "Express", "SQL Server", "API Development"],
      features: [
        "Responsive luxury hotel interface",
        "User dashboard with navigation",
        "Room searching and filtering",
        "Reservation and booking system",
        "Invoice generation and calculations",
        "User feedback and rating system",
      ],
    },
    {
      title: "Islamic Banking System App",
      type: "Mobile App",
      icon: Smartphone,
      date: "July 2024 - Oct 2024",
      description: "Professional Islamic banking application developed during internship",
      technologies: ["Kotlin", "Firebase", "Figma", "JetPack Compose"],
      features: [
        "Real-time activity and response with Firebase",
        "UI/UX design with Figma",
        "Smoke tested for quality assurance",
      ],
    },
    {
      title: "AirSync - Flight Reservation System",
      type: "Mobile App",
      icon: Smartphone,
      date: "July 2024 - Oct 2024",
      description: "Flight reservation app with booking management functionality",
      technologies: ["Kotlin", "Android Studio", "JetPack Compose", "Android SDK"],
      features: [
        "Flight reservations tracking",
        "Booking management system",
        "Responsive UI with JetPack Compose",
      ],
    },
    {
      title: "FLEX - Learning Management System",
      type: "Desktop App",
      icon: Code,
      date: "Sep 2023 - Dec 2023",
      description: "Object-oriented learning management system with multiple user interfaces",
      technologies: ["Java", "OOP", "Console Application"],
      features: [
        "Distributed classes for each entity",
        "Student, teacher, and admin interfaces",
        "Attendance and course registration system",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing my journey through diverse projects spanning mobile development, 
            web applications, and system design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-smooth border-2 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                      <project.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.date}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {project.type}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{project.description}</p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
