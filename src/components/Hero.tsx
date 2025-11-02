import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
              <img
                src={profileImage}
                alt="Neha Waseem"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-glow border-4 border-accent/30"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                Neha Waseem
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Driven Final-year Computer Science student with strong problem-solving and 
              collaboration skills. Specializing in Mobile & Web Development, MERN Stack, 
              and UI/UX Design. Aiming to join dynamic software teams to deliver quality solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-soft"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://github.com/NehaWaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-background transition-smooth shadow-soft"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/neha-waseem-9944762aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-background transition-smooth shadow-soft"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nehawaseem846@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-background transition-smooth shadow-soft"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+923234807000"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-background transition-smooth shadow-soft"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
