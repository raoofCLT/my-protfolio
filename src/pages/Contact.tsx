
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Clock, CheckCircle, Calendar, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "abdulraoof.k@gmail.com",
      description: "Best for project inquiries and collaboration",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:abdulraoof.k@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9447000000",
      description: "Available during business hours (9 AM - 6 PM IST)",
      color: "from-green-500 to-emerald-500",
      href: "tel:+919447000000"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kerala, India",
      description: "Open to remote opportunities worldwide",
      color: "from-purple-500 to-indigo-500",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-400 hover:text-blue-300" },
    { icon: Github, href: "#", label: "GitHub", color: "text-slate-400 hover:text-slate-300" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-sky-400 hover:text-sky-300" },
    { icon: MessageCircle, href: "#", label: "Discord", color: "text-indigo-400 hover:text-indigo-300" }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl mb-8">
            <MessageCircle className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Let's Create Together
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to bring your vision to life? Whether it's a startup idea, enterprise solution, 
            or freelance project, I'm here to help you create exceptional digital experiences.
          </p>
          
          {/* Enhanced Quick Stats */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl px-4 py-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-green-300">99% Response Rate</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl px-4 py-3">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">24h Response Time</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-xl px-4 py-3">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">5.0 Client Rating</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to help bring your vision to reality. Feel free to reach out through 
                any of the channels below.
              </p>

              {/* Enhanced Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="group block bg-gradient-to-br from-slate-800/30 to-slate-700/20 border border-slate-600/50 rounded-xl p-6 hover:border-slate-500/70 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-indigo-300 font-medium">{method.value}</p>
                        <p className="text-slate-400 text-sm mt-1">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Follow My Work</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-14 h-14 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 rounded-xl flex items-center justify-center ${social.color} hover:border-slate-500/70 hover:scale-110 hover:rotate-3 transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Availability Status */}
            <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 hover:from-green-600/15 hover:to-emerald-600/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-xl font-semibold text-green-300">Currently Available</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm open to new freelance projects and full-time opportunities. 
                Typical response time is 24-48 hours for all inquiries.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <Calendar className="w-4 h-4" />
                <span>Next availability: Immediate</span>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/70 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Start a Conversation</h2>
              <p className="text-slate-400">Tell me about your project and let's make it happen</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-3 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-3 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-3 font-medium">
                  Project Type *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="Web App Development, Mobile App, Consultation, etc."
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-3 font-medium">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project goals, timeline, budget range, and any specific requirements..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
              <p className="text-sm text-slate-400">
                Prefer email? Reach me directly at{" "}
                <a href="mailto:abdulraoof.k@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  abdulraoof.k@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
