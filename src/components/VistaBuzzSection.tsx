import { Youtube, Instagram, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import vistabuzzMain from "@/assets/vistabuzz-main.png";
import vistabuzzTech from "@/assets/vistabuzz-tech.jpg";
import vistabuzzComedy from "@/assets/vistabuzz-comedy.png";
import vistabuzzNews from "@/assets/vistabuzz-news.png";

const channels = [
  {
    name: "VistaBuzz Tech",
    logo: vistabuzzTech,
    url: "https://www.youtube.com/@vistabuzztech",
    description: "Technology insights, tutorials, and the latest in tech",
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "VistaBuzz Comedy",
    logo: vistabuzzComedy,
    url: "https://www.youtube.com/@vistabuzzcomedy",
    description: "Entertainment and comedy content to brighten your day",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "VistaBuzz News",
    logo: vistabuzzNews,
    url: "https://www.youtube.com/@vistabuzznews",
    description: "Stay updated with the latest news and current affairs",
    color: "from-blue-500 to-cyan-500",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@vistabuzzhq",
    url: "https://www.instagram.com/vistabuzzhq",
  },
  {
    icon: Twitter,
    name: "X (Twitter)",
    handle: "@vistabuzzhq",
    url: "https://x.com/vistabuzzhq",
  },
];

const VistaBuzzSection = () => {
  return (
    <section id="vistabuzz" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Media Brand
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">VistaBuzz</span> Network
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Beyond coding, I run VistaBuzz(YouTube) – a multi-channel media network delivering tech, entertainment, and news content.
          </p>
        </div>

        {/* Main Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img
              src={vistabuzzMain}
              alt="VistaBuzz Logo"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover relative z-10 border-4 border-primary/20 shadow-elevated"
            />
          </div>
        </div>

        {/* YouTube Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated text-center">
                <div className="relative mb-6 inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-24 h-24 rounded-2xl object-cover relative z-10 mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                  {channel.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
                <div className="mt-4 flex items-center justify-center text-destructive">
                  <Youtube className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              asChild
              variant="outline"
              className="border-border hover:border-primary hover:bg-primary/5"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <social.icon className="w-4 h-4" />
                <span>{social.handle}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VistaBuzzSection;
