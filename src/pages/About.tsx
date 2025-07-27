import {
  Award,
  Users,
  Code,
  Rocket,
  Target,
  Lightbulb,
  Trophy,
  Star,
  MapPin,
  Calendar,
  Heart,
} from "lucide-react";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { useState } from "react";

// Company Logo Component with fallback
const CompanyLogo = ({ 
  imageUrl, 
  fallbackIcon, 
  className = "w-8 h-8" 
}: { 
  imageUrl: string; 
  fallbackIcon: React.ReactNode; 
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="p-4 glass-subtle rounded-2xl text-indigo-400">
        {fallbackIcon}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt="Company Logo"
      className="w-16 h-16 rounded-2xl"
      onError={() => setImageError(true)}
      style={{ objectFit: 'contain' }}
    />
  );
};

const About = () => {
  const experienceCounter = useAnimatedCounter({ target: 1 });
  const projectsCounter = useAnimatedCounter({ target: 6 });
  const clientsCounter = useAnimatedCounter({ target: 25 });
  const satisfactionCounter = useAnimatedCounter({ target: 99 });

  const experiences = [
    {
      icon: <Code className="w-8 h-8" />,
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQERydTRc7i5Pg/company-logo_200_200/company-logo_200_200/0/1732527011160/codo_ai_logo?e=2147483647&v=beta&t=2wzNLgZPIoKlLXXpAT99SNiF1qpnV3goeaEjWT0_g_k",
      title: "Frontend Developer",
      company: "CODO AI Innovations",
      location: "Remote | Kerala, India",
      period: "Dec 2024 – Present",
      description:
        "Building responsive web interfaces using React and Tailwind CSS. Ensuring browser compatibility, collaborating with designers and backend teams, and fixing UI issues to improve performance.",
      achievements: [
        "Built responsive UIs with React & Tailwind CSS",
        "Ensured cross-browser compatibility",
        "Integrated REST APIs smoothly",
        "Fixed UI bugs and improved performance"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      logoUrl: "",
      title: "Full Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "Oct 2024 – Present",
      description:
        "Developing full-stack web apps using React, Node.js, and MongoDB. Using Firebase for authentication and storage, and deploying projects with Vercel and CI/CD workflows.",
      achievements: [
        "Created full-stack apps with React & Node.js",
        "Built and managed REST APIs",
        "Used Firebase for auth and cloud features",
        "Deployed projects with CI/CD on Vercel"
      ]
    }
  ];
  
  const personalInfo = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Available for remote work and full time",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Passionate about clean code",
    },
  ];

  const technicalSkills = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "Redux",
        "Chakra UI",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "JWT",
        "Socket.io",
      ],
    },
    {
      category: "Database & DevOps",
      skills: ["MongoDB", "Firebase", "PostgreSQL", "Vercel", "CI/CD"],
    },
  ];
  

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header with Personal Touch */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl mb-8">
            <Star className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              Passionate full-stack developer with over 1+ years of experience
              creating innovative digital solutions that drive business growth
              and enhance user experiences.
            </p>
            <div className="flex items-center justify-center gap-8 text-slate-400">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  {info.icon}
                  <span className="text-sm">{info.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              ref={experienceCounter.elementRef}
              className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">
                {experienceCounter.count}+
              </div>
              <div className="text-slate-300 font-medium">Years Experience</div>
            </div>
            <div
              ref={projectsCounter.elementRef}
              className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {projectsCounter.count}+
              </div>
              <div className="text-slate-300 font-medium">
                Projects Completed
              </div>
            </div>
            {/* <div ref={clientsCounter.elementRef} className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-green-400 mb-2">{clientsCounter.count}+</div>
              <div className="text-slate-300 font-medium">Happy Clients</div>
            </div> */}
            <div
              ref={satisfactionCounter.elementRef}
              className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                {satisfactionCounter.count}%
              </div>
              <div className="text-slate-300 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Professional Experience - Removed Colors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-200 mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10 text-yellow-400" />
              Professional Journey
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A journey of continuous learning, innovation, and delivering
              exceptional results
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-shrink-0">
                    {exp.logoUrl ? (
                      <CompanyLogo 
                        imageUrl={exp.logoUrl} 
                        fallbackIcon={exp.icon}
                      />
                    ) : (
                      <div className="p-4 glass-subtle rounded-2xl text-indigo-400">
                        {exp.icon}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-300 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-slate-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
