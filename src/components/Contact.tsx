import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <Card className="p-8 shadow-glow border-2">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <a
                href="mailto:nehawaseem846@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-accent hover:text-background transition-smooth group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-background/20">
                  <Mail className="w-5 h-5 text-accent group-hover:text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80">Email</p>
                  <p className="font-medium">nehawaseem846@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923234807000"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-accent hover:text-background transition-smooth group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-background/20">
                  <Phone className="w-5 h-5 text-accent group-hover:text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80">Phone</p>
                  <p className="font-medium">+92 323 480 7000</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              
              <Button
                asChild
                className="w-full justify-start bg-primary hover:bg-primary/90 shadow-soft"
                size="lg"
              >
                <a
                  href="https://github.com/NehaWaseem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </Button>

              <Button
                asChild
                className="w-full justify-start bg-primary hover:bg-primary/90 shadow-soft"
                size="lg"
              >
                <a
                  href="https://www.linkedin.com/in/neha-waseem-9944762aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  Available from October 2025 for full-time opportunities
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2"
                  size="lg"
                >
                  <a href="mailto:nehawaseem846@gmail.com">
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
