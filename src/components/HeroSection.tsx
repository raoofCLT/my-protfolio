
const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black z-[-2]" />
      <div 
        className="absolute inset-0 opacity-20 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Professional Sphere */}
      <div className="absolute top-1/3 right-12 transform -translate-y-1/2 hidden lg:block z-[1]">
        <div className="professional-sphere">
          <div className="sphere-core"></div>
          <div className="sphere-outer"></div>
          <div className="sphere-glow"></div>
        </div>
      </div>

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-30" />
        <div className="absolute bottom-20 right-20 w-px h-32 bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-30" />
      </div>

      <div className="text-center z-10 max-w-5xl px-8 animate-fadeInUp">
        <h1 className="text-6xl md:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
          <span className="block text-white font-extralight">
            Chen
          </span>
          <span className="block text-slate-400 font-light text-4xl md:text-5xl mt-4">
            Full Stack Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInDelay1">
          Building innovative digital experiences with modern technologies
        </p>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInDelay2">
          Passionate about creating seamless user experiences through clean code and thoughtful design.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-0 animate-fadeInDelay3">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-sm text-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-1"
          >
            View Portfolio
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-slate-400 text-slate-200 font-medium rounded-sm text-lg transition-all duration-300 hover:border-white hover:text-white hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
