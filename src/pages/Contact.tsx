
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';

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
      description: "Best for project inquiries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9447000000",
      description: "Available during business hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kerala, India",
      description: "Open to remote opportunities",
      color: "from-purple-500 to-indigo-500"
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
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and 
            explore how we can work together to create something amazing.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">99% Response Rate</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">24h Response Time</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-200 mb-6">Let's Connect</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to help bring your vision to reality. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            {/* Enhanced Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="group glass-effect border border-slate-700 rounded-2xl p-6 hover:border-slate-600 hover:transform hover:translateY-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-blue-300 font-medium">{method.value}</p>
                      <p className="text-slate-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 glass-effect border border-slate-700 rounded-xl flex items-center justify-center ${social.color} hover:border-slate-500 hover:transform hover:scale-110 hover:rotate-3 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Availability Status */}
            <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-6 hover:from-green-600/15 hover:to-emerald-600/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
                <h3 className="text-lg font-semibold text-green-300">Currently Available</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm open to new freelance projects and full-time opportunities. 
                Typical response time is 24-48 hours for all inquiries.
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="glass-effect border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-2">Send a Message</h2>
              <p className="text-slate-400">I'd love to hear about your project</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
