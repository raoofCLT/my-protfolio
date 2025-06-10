
const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-[-2]" />
      <div 
        className="absolute inset-0 opacity-30 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {[80, 120, 60, 100].map((size, index) => (
          <div
            key={index}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${[20, 60, 70, 10][index]}%`,
              left: `${[10, 80, 20, 70][index]}%`,
              animationDelay: `${index * -1}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl px-8 transform perspective-1000 animate-fadeInUp">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] transform transition-transform duration-300">
          <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-textGlow">
            Full Stack
          </span>
          <span className="block bg-gradient-to-r from-gray-400 via-white to-gray-600 bg-clip-text text-transparent animate-textGlowReverse">
            Developer
          </span>
        </h1>
        
        <p className="text-2xl md:text-4xl text-gray-300 mb-8 font-light tracking-[2px] opacity-0 animate-fadeInDelay1">
          CRAFTING DIGITAL EXPERIENCES
        </p>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInDelay2">
          I specialize in creating immersive, high-performance web applications that push the boundaries of modern technology. From concept to deployment, I bring ideas to life with precision and creativity.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center opacity-0 animate-fadeInDelay3">
          <a 
            href="#projects" 
            className="px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-900 text-white border-2 border-gray-600 rounded-full text-lg font-semibold transition-all duration-400 relative overflow-hidden transform hover:perspective-1000 hover:rotateX-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:left-[100%] before:transition-all before:duration-500"
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 bg-transparent text-white border-2 border-gray-500 rounded-full text-lg font-semibold transition-all duration-400 relative overflow-hidden transform hover:perspective-1000 hover:rotateX-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:left-[100%] before:transition-all before:duration-500"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
