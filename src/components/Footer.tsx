
const Footer = () => {
  const socialLinks = [
    { icon: '👨‍💻', href: '#', label: 'GitHub' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '📧', href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-center py-12 px-8 border-t border-white/10">
      <div className="flex justify-center gap-8 mb-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="w-15 h-15 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-2xl text-white transition-all duration-300 border border-white/20 transform hover:perspective-1000 hover:rotateX-3 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <p className="text-gray-400 text-lg">
        © 2024 Alex Chen. Crafted with passion and precision.
      </p>
    </footer>
  );
};

export default Footer;
