import { ExternalLink, Calendar, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Route Tracking System",
    company: "HPCL (via Aforv)",
    period: "Jan 2025 – Aug 2025",
    description:
      "Contributed to improving operational efficiency and monitoring for HPCL. Developed, tested, and implemented solutions that streamline logistics tracking. Worked closely with cross-functional teams to deliver results on time.",
    skills: ["React.js", "JavaScript", "API Integration"],
    featured: true,
  },
  {
    title: "RMS - Remote Management System",
company: "Aforv",
period: "Dec 2024 – Mar 2025",
description:
  "A powerful remote management system designed to monitor, control, and automate operations from any location. Enhances efficiency, improves workflow management, and provides real-time access to critical system data for better decision-making.",
    skills: ["TypeScript","React.js","Tailwind CSS", "Vite", "Responsive Web Design", "REST APIs", "Git & GitHub"],
    featured: true,
  },
  {
    title: "DMS - Distributed Management System",
    company: "Aforv",
    period: "Mar 2024 – Jan 2025",
    description:
      "A tracking solution designed to monitor devices, persons, and other entities. Features several main pages for efficiently managing data with tracking as the core function throughout the system.",
    skills: ["TypeScript","React.js","Tailwind CSS", "Vite", "Responsive Web Design", "REST APIs", "Git & GitHub"],
    featured: false,
  },
  {
    title: "Zoho CRM",
    company: "Qspider",
    period: "Dec 2022 – Jan 2024",
    description:
      "A CRM project focusing on improving business-customer interactions by centralizing customer data, automating tasks, and streamlining processes. Features customer management, sales pipeline tracking, and analytics.",
    skills: ["Manual Testing", "SQL", "Test Planning"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my experience in building scalable web applications
            and implementing quality assurance practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  {project.featured && (
                    <Badge className="mb-2 bg-gradient-primary border-0">Featured</Badge>
                  )}
                  <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  {project.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
