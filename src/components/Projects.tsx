import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Globe, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FireFli - Your eyes reinvented",
      type: "Mobile App",
      icon: Smartphone,
      date: "August 2025 - June 2026",
      description: "Visual Assistant tool for visually impaired individuals using AI and Computer Vision",
      technologies: ["Android Studio", "Google ML Kit", "Yolo V5 Model ", "OCR", "Computer Vision"],
      features: [
        "Dynamic Object Detection using Yolo V5",
        "Secure navigation with obstacle detection",
        "Medicine identification and text recognition using OCR",
        "Scene description with AI integration",
        "Real-time assistance through voice commands",
        "Saved location feature for easy accessibility",
        "Face recognition for familiar people identification",
      ],
      link: "https://www.figma.com/design/qfBkf6DtgsQqsPjHdE1wa7/FireFli?node-id=0-1&p=f&t=WjAEB6w4D7eRTjD7-0" // 🔗 Placeholder
    },
    {
      title: "SnapVault - From snap to save , vault your data right.",
      type: "Mobile App",
      icon: Smartphone,
      date: "June 2025 - August 2025",
      description: "Best Free AI Photo detector and distributor",
      technologies: ["React Native", "FAST API ", "PostGreSQL", "Face detection model"],
      features: [
        "Helps user get rid of duplicate photos",
        "Detects faces and sends photos to respective users",
        "Join groups and share photos automatically",
        "Download pictures from shared albums",
        "Create private albums and share with selected people",
      ],
      link: "https://www.figma.com/design/aK99upSkvUZpPZpqIH1J6z/SnapVault?node-id=0-1&p=f&t=dlSXI85GS7ym4nSb-0" // 🔗 Placeholder
    },
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
      link: "https://www.figma.com/design/Cl5JsHTVRr3Al0UqgRSsNB/ExiPal?node-id=0-1&p=f&t=BhoEXVDKuYvH8aun-0" // 🔗 Placeholder
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
      link: "https://www.figma.com/design/w4ITDO3pPxkXMT8PhyCHk0/LiPi-Fi?node-id=0-1&p=f&t=HGV4Dmb4bHTgsAzY-0" // 🔗 Placeholder
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
      link: "https://www.linkedin.com/posts/neha-waseem-9944762aa_i-am-truly-elated-to-share-my-database-project-activity-7287539617220698112-7Pcd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp2tQAB6oCM5Hb1Q7UlkB46i15m2m8dGmY" // 🔗 Placeholder
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
      link: "https://www.figma.com/your-banking-ui" // 🔗 Placeholder
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
      link: "https://www.linkedin.com/your-airsync-post" // 🔗 Placeholder
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
      link: "https://github.com/your-flex-lms" // 🔗 Placeholder
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
            
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-6 hover:shadow-glow transition-smooth border-2">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
