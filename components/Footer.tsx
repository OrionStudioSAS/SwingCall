
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
            { threshold: 0.9 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
        ref={footerRef}
        className="bg-navy text-white py-24 overflow-hidden relative border-t border-white/10"
    >
        <div className={`container mx-auto px-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            
            {/* TOP SECTION: CALL TO ACTION */}
            <div className="grid lg:grid-cols-2 gap-16 mb-32 border-b border-white/10 pb-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Prêt à transformer <br/>
                        <span className="text-white/50">votre accueil ?</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-md leading-relaxed mb-8">
                        Rejoignez les golfs les plus innovants de France. Installation en 5 jours, sans interruption de service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                         <button className="bg-white text-navy px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 group">
                            Réserver une démo
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                        <button className="px-8 py-4 rounded-full font-bold text-sm border border-white/20 hover:bg-white/10 transition-colors text-white">
                            Voir les tarifs
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                     <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl font-bold overflow-hidden p-2 border border-white/10 shadow-lg">
                                <img 
                                  src="/logos/Logo Swing Call.png" 
                                  alt="SC" 
                                  className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-lg">Équipe Swing Call</div>
                                <div className="text-sm text-white/50">Réponse sous 2h</div>
                            </div>
                        </div>
                        <p className="text-lg font-medium mb-6">"Nous sommes là pour configurer votre assistant selon vos règles de gestion spécifiques."</p>
                        <div className="flex items-center gap-2 text-sm font-bold text-white/40 uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            Support En ligne
                        </div>
                     </div>
                </div>
            </div>

            {/* MIDDLE SECTION: LINKS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                        <div className="bg-white p-1 rounded-lg w-8 h-8 flex items-center justify-center">
                            <img 
                              src="/logos/Logo Swing Call.png" 
                              alt="Logo" 
                              className="w-full h-full object-contain" 
                            />
                        </div>
                        <span className="font-bold tracking-tight text-lg">Swing Call</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-navy transition-all"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-navy transition-all"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-navy transition-all"><Instagram size={18} /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-lg">Produit</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Témoignages</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-lg">Entreprise</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Légal</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                    </ul>
                </div>
            </div>

                        {/* LOGO WITH HORIZONTAL MASK AND REVEAL */}
                        <div className="w-full flex justify-center mb-8 relative">
                                <div className="w-full max-w-xl h-24 overflow-hidden relative">
                                        <div className="absolute inset-x-0 top-1/2 h-px bg-white/20 z-20" />
                                                <img
                                                    src="/logos/Logo%20Swing%20Call.png"
                                                    alt="Swing Call"
                                                    style={{
                                                        position: 'absolute',
                                                        left: '50%',
                                                        top: '50%',
                                                        transform: isVisible ? 'translate(-50%, -10%)' : 'translate(-50%, 40%)',
                                                        transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
                                                        filter: 'brightness(0) invert(1)'
                                                    }}
                                                    className="w-auto h-36 object-contain z-30 pointer-events-none select-none"
                                                />
                                </div>
                        </div>

                        {/* BOTTOM: BIG TYPOGRAPHY */}
                        <div className="border-t border-white/10 pt-8 relative">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest mb-12 gap-4">
                    <span>© 2025 Swing Call AI.</span>
                    <span className="hidden md:block">Paris • Lyon • Bordeaux</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white/50 italic text-[10px]">Propulsé par</span>
                        <div className="flex items-center gap-1 font-bold text-white">
                            Apex Swing
                            <img src="/logos/logo apex swing.png" alt="Apex" className="w-3 h-3 object-contain" />
                        </div>
                    </div>
                </div>
                
                {/* Big Reveal Text */}
                <h1 className="text-[16vw] leading-[0.8] font-bold font-display text-center md:text-left tracking-tighter text-white mix-blend-overlay select-none pointer-events-none opacity-10">
                    SWING CALL
                </h1>
            </div>

        </div>
    </footer>
  );
};
