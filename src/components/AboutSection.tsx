
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-[-1]" />
      
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transform transition-transform duration-300 hover:perspective-1000 hover:rotateX-2">
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative perspective-1000">
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-[30px] flex items-center justify-center text-8xl border border-white/10 shadow-2xl shadow-black/50 transform transition-all duration-300 hover:perspective-1000 hover:rotateY-3 hover:rotateX-1 hover:translateZ-5 relative before:content-[''] before:absolute before:inset-[-2px] before:bg-gradient-to-r before:from-gray-600 before:via-gray-400 before:to-gray-600 before:rounded-[32px] before:z-[-1] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
            👨‍💻
          </div>
          
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {['⚛️', '🚀', '💻'].map((icon, index) => (
              <div
                key={index}
                className="absolute w-15 h-15 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-2xl border border-white/10 animate-iconFloat"
                style={{
                  top: index === 0 ? '-20px' : index === 1 ? '50%' : 'auto',
                  bottom: index === 2 ? '-20px' : 'auto',
                  right: index === 0 ? '-20px' : index === 1 ? '-30px' : 'auto',
                  left: index === 2 ? '-20px' : 'auto',
                  animationDelay: `${index * -1}s`,
                  animationDuration: '4s'
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Creating Digital Magic
          </h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            With over 5 years of experience in full-stack development, I've mastered the art of transforming complex ideas into elegant, scalable solutions. My passion lies in pushing the boundaries of what's possible with modern web technologies.
          </p>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            I believe in writing clean, maintainable code that not only works flawlessly but also inspires other developers. Every project is an opportunity to learn, grow, and create something extraordinary.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: 'Frontend Development', desc: 'React, TypeScript, Next.js' },
              { title: 'Backend Systems', desc: 'Node.js, Python, PostgreSQL' },
              { title: 'Cloud Architecture', desc: 'AWS, Docker, Kubernetes' },
              { title: 'UI/UX Design', desc: 'Figma, Tailwind, Framer Motion' }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 transform transition-all duration-300 hover:perspective-1000 hover:rotateX-2 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5"
              >
                <h4 className="text-white mb-4 text-xl font-semibold">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
