import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  organization: string | null;
  tech_stack: string[] | null;
  repo_url: string | null;
  live_url: string | null;
  image_url: string | null;
  is_featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the technologies I've worked with
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">No projects found yet.</p>
            <p className="text-sm text-muted-foreground">Check back soon for updates!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {project.image_url && (
                  <div className="h-48 bg-gradient-secondary overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  {project.is_featured && (
                    <span className="inline-block px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full mb-3 w-fit">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.organization && (
                    <p className="text-sm text-primary mb-2">{project.organization}</p>
                  )}
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-xs rounded-md">
                          +{project.tech_stack.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex gap-3 mt-auto">
                    <Link to={`/projects/${project.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    {project.repo_url && (
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="ghost" size="icon">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how I can help bring your ideas to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary shadow-glow">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
