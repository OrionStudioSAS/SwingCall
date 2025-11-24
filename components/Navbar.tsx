
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Pourquoi ?", href: "#pourquoi" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = React.useRef<HTMLElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Navbar Style on Scroll
      setIsScrolled(window.scrollY > 10);

      // 2. Update Active Link based on Scroll Position
      const scrollPosition = window.scrollY + 200; // Offset to trigger active state a bit earlier

      let currentSection = '';
      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = item.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // expose navbar height as CSS variable so other components can add top margin when nav wraps to 2 lines
  useEffect(() => {
    const updateNavHeight = () => {
      const h = navRef.current ? navRef.current.offsetHeight : 0;
      document.documentElement.style.setProperty('--navbar-height', `${h}px`);
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    // also update after fonts/images load
    window.addEventListener('load', updateNavHeight);
    return () => {
      window.removeEventListener('resize', updateNavHeight);
      window.removeEventListener('load', updateNavHeight);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        setActiveSection(href);
        setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
  };

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'py-3 shadow' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div 
            className="flex flex-col items-start cursor-pointer group"
            onClick={scrollToTop}
        >
            <div className="flex items-center gap-3">
                <img 
                  src="/logos/Logo Swing Call.png" 
                  alt="Swing Call" 
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="font-display text-2xl font-bold tracking-tight text-navy leading-none">
                    Swing Call
                </span>
            </div>
            <div className="flex items-center gap-1.5 pl-[52px] -mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-taupe font-medium italic">par</span>
                <span className="text-[10px] font-bold text-navy flex items-center gap-1">
                    Apex Swing 
                    <img 
                      src="/logos/logo apex swing.png" 
                      alt="Apex Swing" 
                      className="w-3 h-3 object-contain" 
                    />
                </span>
            </div>
        </div>

        {/* Desktop Nav: flex with wrap. Links keep whitespace-nowrap; items (buttons) wrap as needed */}
        <div className="hidden lg:flex flex-1 items-center justify-start flex-wrap gap-2 px-2 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-taupe/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`inline-flex flex-none items-center px-4 py-2 text-sm font-medium rounded-full transition-all font-sans max-w-max whitespace-nowrap ${
                  activeSection === item.href 
                  ? 'bg-navy text-white shadow-md' 
                  : 'text-taupe hover:text-navy hover:bg-taupe/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
            {/* Apex App Button - Desktop */}
            <a 
                href="https://apexswing.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-lg bg-white border border-gray-200 text-navy text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm group/apex"
            >
                <div className="w-5 h-5 flex items-center justify-center">
                     <img 
                       src="/logos/logo apex swing.png" 
                       alt="Apex Swing" 
                       className="w-full h-full object-contain" 
                     />
                </div>
                <span className="whitespace-nowrap">Apex Swing - Une app unifiée</span>
            </a>

            <div className="hidden md:flex items-center gap-4">
                <a href="#" className="text-sm font-semibold text-navy hover:text-taupe transition-colors">S'identifier</a>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-navy text-white hover:bg-black shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Réserver une démo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>
            <button 
                className="lg:hidden p-2 text-navy"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-taupe/10 shadow-2xl p-4 lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {/* Apex Link in Mobile Menu */}
          <a 
            href="https://apexswing.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 text-navy font-bold text-sm"
          >
             <img 
               src="/logos/logo apex swing.png" 
               alt="Apex Swing" 
               className="w-5 h-5 object-contain" 
             />
             Apex Swing - Une app unifiée
          </a>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-navy font-display font-semibold text-lg py-3 border-b border-taupe/10 block ${
                  activeSection === item.href ? 'text-blue-600 border-blue-100' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="text-navy font-semibold block py-2">S'identifier</a>
          <button className="w-full bg-navy text-white py-4 rounded-xl font-bold font-display hover:bg-black transition-colors flex items-center justify-center gap-2">
            Réserver une démo
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};
