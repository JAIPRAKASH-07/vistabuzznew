import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-gradient">
              Jai Prakash
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer 
            </p>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 mx-1.5 text-destructive fill-destructive" />
            <span>by VistaBuzz</span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
