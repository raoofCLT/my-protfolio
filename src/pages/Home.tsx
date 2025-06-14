
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abdul Raoof.pdf';
    link.download = 'Abdul_Raoof_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src="/profilepic.jpeg" 
              alt="Abdul Raoof" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Abdul Raoof
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
            Full Stack Developer
          </h2>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span>Kerala, India</span>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with 2+ years of experience creating 
            scalable web applications. I specialize in React, Node.js, and modern 
            development practices.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>

        {/* Quick Connect */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Ready to start a project?</p>
          <button
            onClick={scrollToContact}
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
          >
            Let's talk →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
