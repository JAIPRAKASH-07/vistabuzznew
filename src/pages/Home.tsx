import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code2, Database, GitBranch, Palette } from 'lucide-react';

const Home = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: 'React.js', description: 'Building modern UIs' },
    { icon: <Palette className="w-6 h-6" />, name: 'Frontend', description: 'HTML5, CSS3, JavaScript' },
    { icon: <Database className="w-6 h-6" />, name: 'Backend', description: 'Node.js & Express.js ' },
    { icon: <GitBranch className="w-6 h-6" />, name: 'Version Control', description: 'Git & GitHub' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              Hi, I'm Jai Prakash
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Frontend Developer
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Passionate about creating beautiful, responsive web applications with modern technologies.
              Specializing in React.js and frontend development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/projects">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4 text-white">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>

      <p className="text-lg text-muted-foreground mb-4">
        <span className="text-2xl font-bold text-primary">2.5 years</span> of professional experience
      </p>

      <p className="text-muted-foreground mb-2">14 Months - Development | 6 Months - Testing</p>

      {/* Company 1 */}
      <p className="text-lg font-semibold">Matryx Medisys</p>

      {/* Company 2 (New) */}
      <p className="text-muted-foreground mt-4">RMS - Aforv Company</p>
      <p className="text-sm text-muted-foreground">Role: Software Developer</p>

      <Link to="/about" className="inline-block mt-6">
        <Button variant="outline">Learn More About Me</Button>
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary shadow-glow">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
