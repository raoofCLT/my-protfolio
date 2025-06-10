
const Footer = () => {
  const socialLinks = [
    { icon: 'GitHub', href: '#', label: 'GitHub' },
    { icon: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Email', href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-black text-center py-16 px-8 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 hover:-translate-y-1"
              aria-label={social.label}
            >
              <span className="text-sm font-medium">{social.icon.slice(0, 2)}</span>
            </a>
          ))}
        </div>
        
        <div className="space-y-4">
          <p className="text-slate-400 text-lg font-light">
            Alex Chen
          </p>
          <p className="text-slate-500 text-sm">
            © 2024 Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
