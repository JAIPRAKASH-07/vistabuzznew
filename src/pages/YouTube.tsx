import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, ExternalLink } from 'lucide-react';
import logoTech from "../assets/logo-techvistastudio.png";
import logoCinebuzz from "../assets/logo-cinebuzz.png";
const YouTubePage = () => {
  const channels = [
    {
      name: 'Tech Vista Studio',
      description: 'Tech tutorials, programming guides, and software development content',
      url: 'https://www.youtube.com/@TechVistaStudio',
      category: 'Technology & Education',
      color: 'from-blue-500 to-cyan-500',
      logo: logoTech  // FIXED
    },
    {
      name: 'Cinebuzz Comedy',
      description: 'Entertainment content featuring comedy clips, movie reviews, and fun moments',
      url: 'https://www.youtube.com/@CinebuzzComedy',
      category: 'Entertainment & Comedy',
      color: 'from-purple-500 to-pink-500',
      logo: logoCinebuzz // FIXED
    }
  ];



  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-6">
            <Youtube className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My YouTube Channels</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating content across technology and entertainment
          </p>
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {channels.map((channel, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top gradient + logo */}
              <div className={`h-32 bg-gradient-to-br ${channel.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={channel.logo}
                    alt={`${channel.name} Logo`}
                    className="w-20 h-20 object-contain opacity-90 drop-shadow-lg"
                  />

                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{channel.name}</h2>
                <p className="text-sm text-primary font-semibold mb-3">
                  {channel.category}
                </p>
                <p className="text-muted-foreground mb-6">{channel.description}</p>

                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Channel
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>


        {/* About Section */}
        <Card className="mt-16 p-8 max-w-3xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">About My Content</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Through <span className="font-semibold text-foreground">Tech Vista Studio</span>, I share my knowledge
              and experience in web development, programming tutorials, and technology insights. The channel focuses on
              helping developers learn modern web technologies and best practices.
            </p>
            <p>
              <span className="font-semibold text-foreground">Cinebuzz Comedy</span> is my creative outlet for
              entertainment content. Here, I explore the lighter side of content creation with comedy sketches,
              movie reviews, and entertaining clips.
            </p>
            <p>
              Both channels represent different aspects of my interests and allow me to connect with diverse audiences
              while sharing valuable and entertaining content.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-secondary rounded-2xl p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe & Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Don't miss out on new tutorials, tech insights, and entertaining content!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {channels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Youtube className="w-4 h-4 mr-2" />
                  {channel.name}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePage;
