// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Briefcase, Code, Database, GitBranch, Layout, TestTube } from 'lucide-react';

// const About = () => {
//   const skills = [
//     { name: 'HTML5', level: 90 },
//     { name: 'CSS3', level: 85 },
//     { name: 'JavaScript ES6', level: 85 },
//     { name: 'React.js', level: 90 },
//     { name: 'Redux', level: 80 },
//     { name: 'Node.js', level: 30 },
//     { name: 'MySQL', level: 65 },
//     { name: 'REST API', level: 45 },
//     { name: 'JWT', level: 25 },
//     { name: 'Git & GitHub', level: 85 },
//   ];

//   const experience = [
//     {
//       icon: <Layout className="w-6 h-6" />,
//       title: 'Frontend Development',
//       duration: '14 Months',
//       description: 'Building responsive and interactive user interfaces with React.js and modern CSS'
//     },
//     {
//       icon: <TestTube className="w-6 h-6" />,
//       title: 'Testing & QA',
//       duration: '6 Months',
//       description: 'Ensuring quality through comprehensive testing and debugging'
//     },
//   ];

//   return (
//     <div className="min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Frontend Developer with a passion for creating beautiful and functional web applications
//           </p>
//         </div>

//         {/* Introduction */}
//         <Card className="p-8 mb-12 shadow-lg">
//           <div className="flex items-start gap-4 mb-6">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white flex-shrink-0">
//               <Briefcase className="w-6 h-6" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold mb-2">Professional Journey</h2>
//               <p className="text-muted-foreground">
//                 I am <span className="font-semibold text-foreground">Jai Prakash</span>, a dedicated Frontend Developer with{' '}
//                 <span className="font-semibold text-primary">20 months of professional experience</span> at{' '}
//                 <span className="font-semibold text-foreground">Matryx Medisys</span>.
//               </p>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 mt-8">
//             <div>
//               <h3 className="font-semibold mb-2 text-lg">Role</h3>
//               <p className="text-muted-foreground">Frontend Developer</p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-lg">Organization</h3>
//               <p className="text-muted-foreground">Matryx Medisys</p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-lg">Total Experience</h3>
//               <p className="text-muted-foreground">20 Months (14 Dev + 6 Testing)</p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2 text-lg">Specialization</h3>
//               <p className="text-muted-foreground">React.js & Modern Web Development</p>
//             </div>
//           </div>
//         </Card>

//         {/* Experience Breakdown */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">Experience Breakdown</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {experience.map((exp, index) => (
//               <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white mb-4">
//                   {exp.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
//                 <p className="text-sm text-primary font-semibold mb-2">{exp.duration}</p>
//                 <p className="text-muted-foreground">{exp.description}</p>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Skills */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
//           <Card className="p-8 shadow-lg">
//             <div className="grid gap-6">
//               {skills.map((skill, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between mb-2">
//                     <span className="font-medium">{skill.name}</span>
//                     <span className="text-sm text-muted-foreground">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-secondary rounded-full h-2.5">
//                     <div
//                       className="h-2.5 rounded-full bg-gradient-primary transition-all duration-1000"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </section>

//         {/* Key Strengths */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">Key Strengths</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
//               <Code className="w-8 h-8 mx-auto mb-4 text-primary" />
//               <h3 className="font-semibold mb-2">Clean Code</h3>
//               <p className="text-sm text-muted-foreground">Writing maintainable and scalable code</p>
//             </Card>
//             <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
//               <Database className="w-8 h-8 mx-auto mb-4 text-primary" />
//               <h3 className="font-semibold mb-2">API Integration</h3>
//               <p className="text-sm text-muted-foreground">Seamless backend connectivity</p>
//             </Card>
//             <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
//               <GitBranch className="w-8 h-8 mx-auto mb-4 text-primary" />
//               <h3 className="font-semibold mb-2">Version Control</h3>
//               <p className="text-sm text-muted-foreground">Efficient collaboration with Git</p>
//             </Card>
//           </div>
//         </section>

//         {/* CTA */}
//         <div className="text-center bg-gradient-secondary rounded-2xl p-12">
//           <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
//           <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//             I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button size="lg" className="bg-gradient-primary shadow-glow">
//               <a href="/contact">Contact Me</a>
//             </Button>
//             <Button size="lg" variant="outline">
//               <a href="/projects">View Projects</a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;








import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Database, GitBranch, Layout, TestTube } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript ES6', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'Redux', level: 80 },
    { name: 'Node.js', level: 30 },
    { name: 'MySQL', level: 65 },
    { name: 'REST API', level: 45 },
    { name: 'JWT', level: 25 },
    { name: 'Git & GitHub', level: 85 },
  ];

  const experience = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Frontend Development',
      duration: '14 Months',
      description: 'Building responsive and interactive user interfaces with React.js and modern CSS'
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Testing & QA',
      duration: '6 Months',
      description: 'Ensuring quality through comprehensive testing and debugging'
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend Developer with a passion for creating beautiful and functional web applications
          </p>
        </div>

        {/* Introduction - Matryx Medisys */}
        <Card className="p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Professional Journey</h2>
              <p className="text-muted-foreground">
                I am <span className="font-semibold text-foreground">Jai Prakash</span>, a dedicated Frontend Developer with{' '}
                <span className="font-semibold text-primary">2.5 years of professional experience</span> at{' '}
                <span className="font-semibold text-foreground">Matryx Medisys</span>.
              </p>
            </div>
          </div>

          {/* Matryx Medisys Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Role</h3>
              <p className="text-muted-foreground">Frontend Developer</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Organization</h3>
              <p className="text-muted-foreground">Matryx Medisys</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Total Experience</h3>
              <p className="text-muted-foreground">20 Months (14 Dev + 6 Testing)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Specialization</h3>
              <p className="text-muted-foreground">React.js & Modern Web Development</p>
            </div>
          </div>
        </Card>

        {/* NEW COMPANY – RMS (Afrov Company) */}
        <Card className="p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Second Experience</h2>
              <p className="text-muted-foreground">
                Worked as a <span className="font-semibold text-foreground">Junior Frontend Developer</span> at{' '}
                <span className="font-semibold text-primary">RMS - Afrov Company</span>.
              </p>
            </div>
          </div>

          {/* RMS Afrov Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Role</h3>
              <p className="text-muted-foreground">Junior Frontend Developer</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Organization</h3>
              <p className="text-muted-foreground">RMS – Afrov Company</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Duration</h3>
              <p className="text-muted-foreground">6 Months</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Specialization</h3>
              <p className="text-muted-foreground">UI Development & API Integration</p>
            </div>
          </div>
        </Card>

        {/* Experience Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white mb-4">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{exp.duration}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <Card className="p-8 shadow-lg">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Key Strengths */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Strengths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Code className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">Writing maintainable and scalable code</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Database className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">API Integration</h3>
              <p className="text-sm text-muted-foreground">Seamless backend connectivity</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <GitBranch className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Version Control</h3>
              <p className="text-sm text-muted-foreground">Efficient collaboration with Git</p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-glow">
              <a href="/contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="/projects">View Projects</a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
