
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, MessageCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulraoof.k@gmail.com",
      description: "Best way to reach me",
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      description: "Available for remote work",
      color: "text-green-400"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Mail, href: "mailto:abdulraoof.k@gmail.com", label: "Email", color: "hover:text-red-400" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Connect With Me - Moved to Top in Single Row */}
        <section className="mb-16">
          <div className="glass-container rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Connect With Me</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`glass-card rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 ${social.color} text-center group`}
                >
                  <div className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center">
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-container rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-indigo-400" />
                Get in Touch
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you're a startup looking to build your first product or an established 
                company wanting to scale, I'm here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                        <p className="text-slate-300 font-medium mb-1">{info.value}</p>
                        <p className="text-slate-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-container rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-indigo-400" />
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-200 mb-3 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-200 mb-3 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-200 mb-3 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent"
                  placeholder="Project Collaboration"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-200 mb-3 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <div className="glass-container rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Prefer Direct Contact?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Feel free to reach out directly via email or schedule a call to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:abdulraoof.k@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <button className="px-6 py-3 glass-morphism border border-slate-600/50 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
