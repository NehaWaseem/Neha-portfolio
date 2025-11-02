import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 rounded-full blur-2xl animate-pulse-glow" />
              <img
                src={profileImage}
                alt="Neha Waseem - Software Engineer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-glow border-4 border-primary/50 transition-smooth hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-lg animate-fade-in">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Neha Waseem
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gradient-accent animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Driven Final-year Computer Science student with strong problem-solving and 
              collaboration skills. Specializing in Mobile & Web Development, MERN Stack, 
              and UI/UX Design. Aiming to join dynamic software teams to deliver quality solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow-purple transition-smooth"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://github.com/NehaWaseem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-secondary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-glow-purple hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/neha-waseem-9944762aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent hover:to-primary hover:text-accent-foreground transition-smooth shadow-soft hover:shadow-glow-cyan hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nehawaseem846@gmail.com"
                className="p-3 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary hover:to-accent hover:text-secondary-foreground transition-smooth shadow-soft hover:shadow-glow hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+923234807000"
                className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary hover:to-accent hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-glow hover:scale-110"
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
