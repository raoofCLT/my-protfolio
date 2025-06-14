
import { Mail, Phone, MapPin, Send, User, MessageSquare, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const responseTimeCounter = useAnimatedCounter({ target: 24 });
  const satisfactionCounter = useAnimatedCounter({ target: 99 });
  const projectsCounter = useAnimatedCounter({ target: 15 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abdul.raoof@example.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      description: "Available Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kerala, India",
      description: "Available for remote work globally"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div ref={responseTimeCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
                <div className="text-5xl font-black text-blue-400">{responseTimeCounter.count}h</div>
              </div>
              <div className="text-lg text-slate-300 font-semibold">Response Time</div>
              <div className="text-sm text-slate-400 mt-2">Average reply within 24 hours</div>
            </div>
            
            <div ref={satisfactionCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-green-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <User className="w-8 h-8 text-green-400" />
                <div className="text-5xl font-black text-green-400">{satisfactionCounter.count}%</div>
              </div>
              <div className="text-lg text-slate-300 font-semibold">Client Satisfaction</div>
              <div className="text-sm text-slate-400 mt-2">Happy clients worldwide</div>
            </div>
            
            <div ref={projectsCounter.elementRef} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-5xl font-black text-purple-400">{projectsCounter.count}+</div>
              </div>
              <div className="text-lg text-slate-300 font-semibold">Projects Delivered</div>
              <div className="text-sm text-slate-400 mt-2">Successful collaborations</div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-200 mb-8">Let's Start a Conversation</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'm always excited to connect with fellow innovators and creators.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl text-blue-400 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">{info.label}</h3>
                      <p className="text-blue-300 font-semibold mb-2">{info.value}</p>
                      <p className="text-slate-400 text-sm font-light">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-200 mb-6">Why Work With Me?</h3>
              <div className="space-y-4">
                {[
                  "✨ Innovative solutions tailored to your needs",
                  "🚀 Fast delivery without compromising quality",
                  "💡 Creative problem-solving approach",
                  "🎯 100% commitment to your success"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300 font-light">
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-xl border-white/10 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-slate-200 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-blue-400" />
                Send Message
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg font-light">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-slate-200 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-200 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-slate-200 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Project Discussion"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-slate-200 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
