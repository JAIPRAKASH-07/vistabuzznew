import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "AFORV Private Limited",
    location: "Bengaluru",
    period: "Present",
    type: "Full-time",
    description: [
      "Developing and maintaining web applications using React.js, JavaScript (ES6), and modern UI frameworks",
      "Collaborating with cross-functional teams to optimize user experience and application performance",
      "Implementing best coding practices to ensure scalability, maintainability, and security",
      "Debugging and resolving frontend issues to enhance application functionality",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Podbic Institute",
    location: "Bengaluru",
    period: "Internship",
    type: "Internship",
    description: [
      "Gained hands-on experience in HTML5, CSS3, JavaScript (ES6), and React.js",
      "Developed interactive UI components using modern frontend libraries",
      "Worked on state management, API integration, and performance optimization",
      "Collaborated with mentors on live projects to improve coding practices",
    ],
  },
  {
    role: "SDET Intern",
    company: "QSpiders",
    location: "Gurugram",
    period: "Internship",
    type: "Internship",
    description: [
      "Completed hands-on training in Manual Testing, Selenium, and API Testing",
      "Developed and executed test cases to ensure software quality and reliability",
      "Gained practical experience in bug tracking and test report generation",
      "Worked on real-time projects implementing QA methodologies",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
