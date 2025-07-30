import { useState, useEffect } from 'react';
import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { id: 'home', title: 'Home', icon: Home },
  { id: 'about', title: 'About', icon: User },
  { id: 'skills', title: 'Skills', icon: Code },
  { id: 'projects', title: 'Projects', icon: FolderOpen },
  { id: 'contact', title: 'Contact', icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-slate-700/50 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
        <SidebarGroup className="pt-8">
          {!collapsed && (
            <SidebarGroupLabel className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 px-4">
              Portfolio
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                      isActive(item.id)
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white border border-purple-400/30 shadow-lg shadow-purple-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/40'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive(item.id) && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-r-full" />
                    )}
                    
                    {/* Glow effect for active */}
                    {isActive(item.id) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-sm" />
                    )}

                    <item.icon className={`${collapsed ? 'mx-auto' : 'mr-3'} h-5 w-5 relative z-10`} />
                    
                    {!collapsed && (
                      <span className={`relative z-10 font-medium ${
                        isActive(item.id) ? 'font-semibold' : ''
                      }`}>
                        {item.title}
                      </span>
                    )}

                    {/* Active dot indicator for collapsed state */}
                    {collapsed && isActive(item.id) && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer section when expanded */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-slate-700/30">
            <div className="text-center">
              <p className="text-xs text-slate-400">
                Abdul Raoof
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Portfolio 2024
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}