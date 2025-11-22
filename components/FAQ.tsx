
import React, { useState } from 'react';
import { Plus, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "L'agent IA remplace-t-il totalement l'accueil téléphonique ?",
    answer: "Non, Swing Call ne remplace pas votre équipe, il la complète et la soulage. L'IA filtre et gère 100% des appels répétitifs (réservations, infos météo, horaires) pour que votre staff puisse se concentrer sur l'accueil physique et la vente au pro-shop."
  },
  {
    question: "Comment l'agent connaît-il les informations de mon golf ?",
    answer: "Lors du setup (J-5), nous connectons l'IA à votre base de données (NetGolf/Prima). Elle apprend instantanément vos parcours, vos tarifs, vos créneaux disponibles et les spécificités de votre règlement intérieur."
  },
  {
    question: "L'IA peut-elle reconnaître les membres réguliers ?",
    answer: "Absolument. Grâce à la synchronisation CRM, l'IA identifie le numéro appelant avant même de décrocher. Elle accueille le membre par son prénom : 'Bonjour Monsieur Martin', et accède à son historique."
  },
  {
    question: "Et si un joueur veut absolument parler à un humain ?",
    answer: "L'IA détecte l'intention ou la frustration. Si la demande sort de son champ de compétence (ex: organisation d'une compétition complexe), elle transfère l'appel immédiatement vers la ligne prioritaire de votre accueil."
  },
  {
    question: "Est-ce compliqué à installer sur notre système ?",
    answer: "C'est transparent pour vous. Nous nous occupons de la liaison avec votre opérateur téléphonique (transfert d'appel) et de l'API avec votre logiciel de gestion. Aucune installation matérielle n'est requise au club-house."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* LEFT COLUMN - STICKY */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12">
                
                {/* Header */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4">
                        <Sparkles size={12} className="fill-navy/20 text-navy" />
                        Questions Fréquentes
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6 leading-tight">
                        Nous avons les réponses.
                    </h2>
                    <p className="text-lg text-taupe leading-relaxed">
                        Tout ce que vous devez savoir sur l'intégration, la technique et l'expérience joueur.
                    </p>
                </div>

                {/* Support Banner CTA - Moved here */}
                <div className="bg-navy rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-2xl">
                    {/* Hover Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                    <div className="relative z-10 flex flex-col items-start gap-6">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold font-display text-white mb-1">Une question spécifique ?</h4>
                            <p className="text-white/60 text-sm">Notre équipe technique vous répond sous 2h.</p>
                        </div>
                        
                        <button className="w-full px-6 py-3 bg-white text-navy rounded-xl font-bold text-sm hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Contacter le support
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN - QUESTIONS */}
            <div className="lg:col-span-7 space-y-4">
                {faqData.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`group bg-white rounded-2xl transition-all duration-500 border relative overflow-hidden ${
                            openIndex === idx 
                            ? 'border-blue-500/30 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]' 
                            : 'border-taupe/10 shadow-sm hover:border-taupe/20 hover:shadow-md'
                        }`}
                    >
                        {/* Active State Indicator Line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-transform duration-300 ease-in-out ${openIndex === idx ? 'scale-y-100' : 'scale-y-0'}`}></div>

                        <button 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left relative z-10"
                        >
                            <span className={`font-display font-bold text-lg md:text-xl transition-colors duration-300 pr-8 ${openIndex === idx ? 'text-blue-900' : 'text-navy group-hover:text-black'}`}>
                                {item.question}
                            </span>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 ml-auto transition-all duration-300 ${
                                openIndex === idx 
                                ? 'bg-blue-600 border-blue-600 text-white rotate-180' 
                                : 'bg-offwhite border-taupe/10 text-taupe group-hover:border-navy/20 group-hover:text-navy'
                            }`}>
                                {openIndex === idx ? <MinusIcon /> : <Plus size={18} />}
                            </div>
                        </button>

                        <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-6 md:px-8 pb-8 pt-0">
                                <p className="text-taupe text-base leading-relaxed pl-4 border-l-2 border-taupe/10">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

// Helper component for the minus icon to ensure clean animation
const MinusIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
    