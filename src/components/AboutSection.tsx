import { Code2, Database, TestTube, Users } from "lucide-react";

const skills = {
  frontend: [
    "React.js",
    "TypeScript",
    "JavaScript (ES6)",
    "HTML5",
    "CSS3",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "RESTful APIs", "JWT Authentication"],
  database: ["MySQL", "SQL"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
  testing: ["Manual Testing", "STLC", "Functional Testing", "Integration Testing"],
  soft: ["Problem Solving", "Team Collaboration", "Adaptability", "Analytical Thinking"],
};

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: skills.frontend,
    color: "primary",
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [...skills.backend, ...skills.database],
    color: "accent",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    skills: skills.testing,
    color: "primary",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: skills.soft,
    color: "accent",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leveraging engineering knowledge with a passion for cutting-edge technologies, 
            committed to continuous learning and building scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-6 h-6 text-${category.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border">
          <h3 className="text-lg font-semibold mb-4 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
