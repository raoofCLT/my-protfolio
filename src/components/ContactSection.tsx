
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-7xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-900 z-[-1]" />
      
      <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-white tracking-tight">
        Let's Connect
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-light mb-6 text-white">
              Start a Conversation
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Whether you're looking to build a new product, scale your existing platform, or need technical leadership for your team, I'd love to discuss how we can work together.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { label: 'Email', value: 'alex.chen@example.com', type: 'Professional inquiries' },
              { label: 'Location', value: 'San Francisco, CA', type: 'Available for remote work' },
              { label: 'Response Time', value: '24-48 hours', type: 'Typical response window' },
              { label: 'Availability', value: 'Open to new opportunities', type: 'Currently accepting projects' }
            ].map((item, index) => (
              <div
                key={index}
                className="border border-slate-700 p-6 rounded-sm bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                  <span className="text-slate-500 text-xs">{item.type}</span>
                </div>
                <span className="text-white text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-200 mb-3 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-sm px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-slate-500 focus:bg-slate-800/70"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-slate-200 mb-3 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-sm px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-slate-500 focus:bg-slate-800/70"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-slate-200 mb-3 text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-sm px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-slate-500 focus:bg-slate-800/70"
              placeholder="Your company or organization"
            />
          </div>
          
          <div>
            <label className="block text-slate-200 mb-3 text-sm font-medium">Project Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-sm px-4 py-4 text-white placeholder-slate-400 transition-all duration-300 focus:outline-none focus:border-slate-500 focus:bg-slate-800/70 resize-none"
              placeholder="Tell me about your project, timeline, and specific needs..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-8 py-4 bg-white text-gray-900 font-medium rounded-sm transition-all duration-300 hover:bg-slate-100 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
