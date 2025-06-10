
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-900 z-[-1]" />
      
      <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-white tracking-tight">
        About
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-sm border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-transparent" />
            <div className="flex items-center justify-center h-full">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-300 to-slate-500" />
            </div>
          </div>
          
          {/* Professional accent elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-slate-400" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-slate-400" />
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-light mb-6 text-white">
              Building Digital Excellence
            </h3>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              With over 6 years of experience in full-stack development, I architect and deliver scalable solutions that drive business growth. My expertise spans modern web technologies, cloud infrastructure, and agile methodologies.
            </p>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              I focus on creating maintainable, performance-optimized applications while fostering collaborative team environments and continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Frontend Architecture', desc: 'React, TypeScript, Next.js, Vue' },
              { title: 'Backend Systems', desc: 'Node.js, Python, PostgreSQL, MongoDB' },
              { title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD' },
              { title: 'Leadership', desc: 'Team Management, Agile, Mentoring' }
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 p-6 rounded-sm border border-slate-700 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/70"
              >
                <h4 className="text-white mb-3 text-lg font-medium group-hover:text-slate-100 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
