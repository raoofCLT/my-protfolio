
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Award, Users, Clock, Coffee } from 'lucide-react';

// 3D Space Dog Component
const SpaceDog = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const dogRef = useRef<any>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Simple 3D space dog using canvas
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = Math.min(container.clientWidth, 300);
        canvas.height = Math.min(container.clientHeight, 300);
      }
    };

    const drawSpaceDog = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const time = animationFrame * 0.02;
      
      // Apply mouse movement
      const offsetX = (mouseX - centerX) * 0.1;
      const offsetY = (mouseY - centerY) * 0.1;
      
      // Dog body (3D effect with gradient)
      ctx.save();
      ctx.translate(centerX + offsetX, centerY + offsetY + Math.sin(time) * 5);
      
      // Body gradient
      const bodyGradient = ctx.createRadialGradient(0, 0, 10, 0, 0, 40);
      bodyGradient.addColorStop(0, '#ffffff');
      bodyGradient.addColorStop(1, '#cccccc');
      
      ctx.fillStyle = bodyGradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, 40, 30, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Head
      const headGradient = ctx.createRadialGradient(0, -35, 5, 0, -35, 25);
      headGradient.addColorStop(0, '#ffffff');
      headGradient.addColorStop(1, '#dddddd');
      
      ctx.fillStyle = headGradient;
      ctx.beginPath();
      ctx.ellipse(0, -35, 25, 25, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Ears (floating)
      ctx.fillStyle = '#ffaaaa';
      ctx.beginPath();
      ctx.ellipse(-15, -50 + Math.sin(time + 1) * 2, 8, 15, -0.3, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(15, -50 + Math.sin(time + 1.5) * 2, 8, 15, 0.3, 0, 2 * Math.PI);
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(-8, -40, 3, 3, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(8, -40, 3, 3, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Nose
      ctx.fillStyle = '#ff6666';
      ctx.beginPath();
      ctx.ellipse(0, -30, 2, 2, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Legs (floating)
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 4; i++) {
        const legX = (i % 2 === 0 ? -20 : 20);
        const legY = 20 + Math.sin(time + i) * 3;
        ctx.beginPath();
        ctx.ellipse(legX, legY, 6, 12, 0, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      // Tail (wagging)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(35, 0);
      ctx.quadraticCurveTo(50 + Math.sin(time * 3) * 10, -10, 45 + Math.sin(time * 3) * 15, -25);
      ctx.stroke();
      
      // Space helmet
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, -35, 35, 35, 0, 0, 2 * Math.PI);
      ctx.stroke();
      
      // Helmet reflection
      ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.ellipse(-10, -45, 8, 12, -0.5, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.restore();
      
      animationFrame++;
      animationRef.current = requestAnimationFrame(drawSpaceDog);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    drawSpaceDog();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-64 md:h-80 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-full max-h-full rounded-lg"
        style={{ background: 'radial-gradient(circle, rgba(0,0,50,0.3) 0%, transparent 70%)' }}
      />
    </div>
  );
};

const Skills = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    clients: 0,
    experience: 0
  });

  // Animated counter hook
  useEffect(() => {
    const targets = {
      projects: 15,
      technologies: 20,
      clients: 50,
      experience: 2
    };

    const animateCounter = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / 50; // 50 steps for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    // Start animations with delays
    setTimeout(() => animateCounter('projects', 15), 500);
    setTimeout(() => animateCounter('technologies', 20), 700);
    setTimeout(() => animateCounter('clients', 50), 900);
    setTimeout(() => animateCounter('experience', 2), 1100);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "FastAPI"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="w-8 h-8" />,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 tilt-hover">
            Skills & Expertise
          </h2>
          <p className="text-xl text-teal-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills across modern development stack
          </p>
        </div>

        {/* 3D Space Dog */}
        <div className="mb-16">
          <SpaceDog />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect perspective-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-emerald-200 mb-4 group-hover:text-emerald-100 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-teal-900/30 text-teal-300 text-sm rounded-md border border-teal-700/30 enhanced-card-hover"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: `${counters.projects}+`, icon: Award },
            { label: "Happy Clients", value: `${counters.clients}+`, icon: Users },
            { label: "Technologies", value: `${counters.technologies}+`, icon: Code },
            { label: "Years Experience", value: `${counters.experience}+`, icon: Clock }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center enhanced-card-hover glass-effect rounded-xl p-6 morphing-shadow glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-200 mb-1">{stat.value}</div>
              <div className="text-sm text-teal-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
