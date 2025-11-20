
import { Github, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Jai Prakash
            </h3>
            <p className="text-sm text-muted-foreground">
              React.js Frontend Developer — 2 years experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Connect</h3>
  <div className="flex gap-4">
    <a
      href="https://github.com/JAIPRAKASH-07"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="GitHub Profile"
    >
      <Github className="w-6 h-6" />
    </a>

    <a
      href="https://www.youtube.com/@TechVistaStudio"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="Tech Vista Studio YouTube Channel"
    >
      <Youtube className="w-6 h-6" />
    </a>

    <a
      href="https://www.youtube.com/@CinebuzzComedy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="Cinebuzz Comedy YouTube Channel"
    >
      <Youtube className="w-6 h-6" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/vistabuzzofficial"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="VistaBuzz Instagram"
    >
      <Instagram className="w-6 h-6" />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1WWtiZnd1S/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="VistaBuzz Facebook"
    >
      <Facebook className="w-6 h-6" />
    </a>

    {/* Twitter / X */}
    <a
      href="https://x.com/vistabuzzhq"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="VistaBuzz Twitter (X)"
    >
      <Twitter className="w-6 h-6" />
    </a>
  </div>
</div>

        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Jai Prakash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
