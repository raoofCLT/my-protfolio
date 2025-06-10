
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section id="contact" className="py-24 px-8 max-w-6xl mx-auto relative scroll-reveal">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-[-1]" />
      
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transform transition-transform duration-300 hover:perspective-1000 hover:rotateX-2">
        Let's Work Together
      </h2>
      
      <div className="grid md:grid-cols-2 gap-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="perspective-1000">
            <label className="block text-white mb-3 text-lg font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 rounded-xl px-5 py-4 text-white text-lg transition-all duration-300 focus:outline-none focus:border-gray-500 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] transform focus:perspective-1000 focus:rotateX-1"
              required
            />
          </div>
          
          <div className="perspective-1000">
            <label className="block text-white mb-3 text-lg font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 rounded-xl px-5 py-4 text-white text-lg transition-all duration-300 focus:outline-none focus:border-gray-500 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] transform focus:perspective-1000 focus:rotateX-1"
              required
            />
          </div>
          
          <div className="perspective-1000">
            <label className="block text-white mb-3 text-lg font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/20 rounded-xl px-5 py-4 text-white text-lg transition-all duration-300 focus:outline-none focus:border-gray-500 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)] transform focus:perspective-1000 focus:rotateX-1 resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-8 py-5 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl text-lg font-semibold transition-all duration-400 border border-white/20 transform hover:perspective-1000 hover:rotateX-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:left-[100%] before:transition-all before:duration-500"
          >
            Send Message
          </button>
        </form>
        
        <div>
          <h3 className="text-white mb-8 text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          
          {[
            { label: 'Email', value: 'alex.chen@example.com' },
            { label: 'Phone', value: '+1 (555) 123-4567' },
            { label: 'Location', value: 'San Francisco, CA' },
            { label: 'LinkedIn', value: 'linkedin.com/in/alexchen' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 transition-all duration-300 transform hover:perspective-1000 hover:rotateX-1 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5 before:content-['→'] before:text-gray-400 before:font-bold before:mr-4 before:text-2xl"
            >
              <span className="text-gray-300 text-lg">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
