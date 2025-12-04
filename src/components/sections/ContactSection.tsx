import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useState } from 'react';
import { useToast } from '../../hooks/use-toast';

export const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message || "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to Send Message",
        description: error instanceof Error ? error.message : "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getLabelClass = (fieldName: string) => {
    const hasValue = formData[fieldName as keyof typeof formData]?.trim().length > 0;
    const isFocused = focusedField === fieldName;
    
    if (hasValue || isFocused) {
      return 'absolute left-4 top-1 text-xs text-gold transition-all duration-300';
    } else {
      return 'absolute left-4 top-3 text-muted-foreground transition-all duration-300 text-sm';
    }
  };

  const contactInfo = [
    { icon: Mail, value: "raoofkottayil@gmail.com", href: "mailto:raoofkottayil@gmail.com", label: "Email" },
    { icon: Phone, value: "+91 90728 93647", href: "tel:+919072893647", label: "Phone" },
    { icon: MapPin, value: "Kerala, India", href: null, label: "Location" },
  ];

  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0B] to-[#151515]" />
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Get In
          <span className="text-gold-gradient"> Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to bring your ideas to life? I'm here to help transform your vision into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                item.href ? (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-subtle">{item.label}</p>
                      <span className="text-foreground text-sm font-medium group-hover:text-gold transition-colors duration-300">
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-accent rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-subtle">{item.label}</p>
                      <span className="text-foreground text-sm font-medium">
                        {item.value}
                      </span>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none gold-focus transition-all duration-300 text-sm ${
                      errors.name ? 'border-destructive/50 focus:border-destructive' : ''
                    }`}
                    placeholder="Your Name"
                    required
                  />
                  <label className={getLabelClass('name')}>Your Name</label>
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none gold-focus transition-all duration-300 text-sm ${
                      errors.email ? 'border-destructive/50 focus:border-destructive' : ''
                    }`}
                    placeholder="Your Email"
                    required
                  />
                  <label className={getLabelClass('email')}>Your Email</label>
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none gold-focus transition-all duration-300 text-sm ${
                    errors.subject ? 'border-destructive/50 focus:border-destructive' : ''
                  }`}
                  placeholder="Subject"
                  required
                />
                <label className={getLabelClass('subject')}>Subject</label>
                {errors.subject && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={4}
                  maxLength={500}
                  className={`w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-transparent focus:outline-none gold-focus transition-all duration-300 resize-none text-sm ${
                    errors.message ? 'border-destructive/50 focus:border-destructive' : ''
                  }`}
                  placeholder="Your Message"
                  required
                />
                <label className={getLabelClass('message')}>Your Message</label>
                {errors.message && (
                  <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
                <div className="text-xs text-muted-subtle mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-gold to-gold-accent rounded-xl text-black font-medium hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
