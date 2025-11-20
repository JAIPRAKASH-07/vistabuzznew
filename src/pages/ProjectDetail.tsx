import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  organization: string | null;
  role: string | null;
  duration: string | null;
  responsibilities: string[] | null;
  key_features: string[] | null;
  tech_stack: string[] | null;
  repo_url: string | null;
  live_url: string | null;
  image_url: string | null;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Image */}
        {project.image_url && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4">
            {project.repo_url && (
              <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </a>
            )}
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {project.organization && (
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Organization</h3>
              <p className="font-semibold">{project.organization}</p>
            </Card>
          )}
          {project.role && (
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Role</h3>
              <p className="font-semibold">{project.role}</p>
            </Card>
          )}
          {project.duration && (
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Duration</h3>
              <p className="font-semibold">{project.duration}</p>
            </Card>
          )}
        </div>

        {/* Tech Stack */}
        {project.tech_stack && project.tech_stack.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        )}

        {/* Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {project.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{resp}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Key Features */}
        {project.key_features && project.key_features.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.key_features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
