import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sjaiprakash682@gmail.com",
    href: "mailto:sjaiprakash682@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95870 73793",
    href: "tel:+919587073793",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/JAIPRAKASH-07",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jai-prakash-b111b2192",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 lg:p-12 rounded-3xl bg-gradient-card border border-border shadow-elevated">
            <h3 className="text-2xl font-semibold mb-4">Ready to start a project?</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you have a project in mind or just want to chat, feel free to reach out. I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <a href="mailto:sjaiprakash682@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
