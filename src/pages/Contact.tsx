
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, MessageCircle, User, CheckCircle, AlertCircle, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulraoof.k@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      description: "Available for remote work"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:abdulraoof.k@gmail.com", label: "Email" }
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

        {/* Connect With Me - Smaller Compact Version */}
        <section className="mb-12">
          <div className="glass-container rounded-2xl p-4">
            <h2 className="text-lg font-bold text-white mb-4 text-center">Connect With Me</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="glass-card rounded-xl p-3 flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 text-slate-300 hover:text-white text-center group"
                >
                  <div className="w-8 h-8 glass-subtle rounded-xl flex items-center justify-center">
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-xs">{social.label}</span>
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
                        <info.icon className="w-6 h-6 text-indigo-400" />
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
                    className={`w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent ${
                      errors.name ? 'ring-2 ring-red-400/50 border-red-400/50' : ''
                    }`}
                    placeholder="John Doe"
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
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
                    className={`w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent ${
                      errors.email ? 'ring-2 ring-red-400/50 border-red-400/50' : ''
                    }`}
                    placeholder="john@example.com"
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
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
                  className={`w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent ${
                    errors.subject ? 'ring-2 ring-red-400/50 border-red-400/50' : ''
                  }`}
                  placeholder="Project Collaboration"
                  required
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
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
                  className={`w-full glass-subtle rounded-xl px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-transparent resize-none ${
                    errors.message ? 'ring-2 ring-red-400/50 border-red-400/50' : ''
                  }`}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  required
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
                <div className="text-sm text-slate-400 mt-2">
                  {formData.message.length}/500 characters
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
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
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <button className="px-6 py-3 glass-morphism border border-slate-600/50 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-slate-400/50">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
