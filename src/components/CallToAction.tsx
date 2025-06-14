
import { ArrowRight, MessageCircle, Download, Mail, Linkedin, Github } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
        
        <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ready to bring your vision to life? Whether it's a startup idea, enterprise solution, 
                or freelance project, I'm here to help you create exceptional digital experiences.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-1">24h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">99%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group px-8 py-4 bg-slate-800/50 border border-slate-600/50 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:border-slate-500 flex items-center justify-center gap-3">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              {[
                { icon: Mail, href: "mailto:abdulraoof.k@gmail.com", label: "Email", color: "text-blue-400 hover:text-blue-300" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-400 hover:text-blue-300" },
                { icon: Github, href: "#", label: "GitHub", color: "text-slate-400 hover:text-slate-300" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-800/50 border border-slate-600/30 rounded-xl flex items-center justify-center ${social.color} hover:scale-110 hover:border-slate-500/50 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-sm text-slate-400">
              Currently available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
