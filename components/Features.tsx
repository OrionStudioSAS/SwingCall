
import React from 'react';
import { Mic, BarChart3, Smartphone, Zap, CheckCircle2, Link } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap size={12} className="fill-navy" />
                Tout inclus & Connecté
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
                Une suite puissante,<br/> nativement compatible.
            </h2>
            <p className="text-taupe text-lg max-w-2xl mx-auto leading-relaxed">
                Plus qu'un simple standard, Swing Call est un écosystème complet qui s'intègre parfaitement à vos outils de gestion actuels.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* CARD 1: INTEGRATIONS (High Priority) - Span 2 */}
            <div className="md:col-span-2 bg-offwhite rounded-[2.5rem] border border-taupe/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative hover:shadow-soft transition-all duration-500">
                <div className="relative z-10 flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-taupe/10 shadow-sm text-xs font-bold text-navy mb-4">
                        <Link size={12} />
                        Sync Bidirectionnelle
                    </div>
                    <h3 className="text-2xl font-display font-bold text-navy mb-3">NetGolf & PrimaGolf</h3>
                    <p className="text-taupe text-sm leading-relaxed">
                        Connectez Swing Call à votre moteur de réservation en 1 clic. Disponibilités en temps réel, reconnaissance des membres et confirmation immédiate.
                    </p>
                </div>

                {/* Sync Animation Visual */}
                <div className="relative z-10 flex items-center gap-4 md:gap-8 bg-white p-6 rounded-3xl border border-taupe/10 shadow-sm">
                     {/* Swing Call Logo */}
                     <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg relative z-20 overflow-hidden p-1 border border-gray-100">
                        <img 
                          src="/logos/Logo Swing Call.png" 
                          alt="SC" 
                          className="w-full h-full object-contain" 
                        />
                     </div>

                     {/* Animated Connection */}
                     <div className="relative w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-[shimmer_2s_infinite] opacity-50"></div>
                        {/* Traveling Dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-[ping-pong_3s_ease-in-out_infinite]"></div>
                     </div>

                     {/* Partner Logos Stack */}
                     <div className="flex flex-col gap-2">
                        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">
                            NG
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-bold text-green-600 leading-none text-center shadow-sm">
                            Prima<br/>Golf
                        </div>
                     </div>
                </div>
                
                {/* Background Gradient */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
            </div>

            {/* CARD 2: IA VOCALE - Span 1 */}
            <div className="md:col-span-1 bg-navy rounded-[2.5rem] p-8 relative overflow-hidden group text-white shadow-xl border border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/20 transition-colors">
                        <Mic size={24} />
                    </div>
                    
                    <div className="mb-8 relative h-12 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                         {[...Array(12)].map((_, i) => (
                             <div key={i} className="w-1 bg-emerald-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{
                                 height: `${Math.random() * 100}%`,
                                 animationDelay: `${i * 0.1}s`
                             }}></div>
                         ))}
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-display mb-2">IA Vocale 24/7</h3>
                        <p className="text-white/60 text-xs leading-relaxed">
                            Décroche instantanément, traite les demandes simples et transfère le reste.
                        </p>
                    </div>
                </div>
            </div>

            {/* CARD 3: ANALYTICS - Span 1 */}
            <div className="md:col-span-1 bg-white rounded-[2.5rem] border border-taupe/10 p-8 shadow-soft group hover:border-blue-100 transition-colors relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
                        <BarChart3 size={24} />
                    </div>

                    {/* Mini Chart Visual */}
                    <div className="flex items-end gap-2 h-16 mb-6 w-full opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-1/5 bg-blue-500 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-700 delay-75"></div>
                        <div className="w-1/5 bg-blue-500 rounded-t-md h-[60%] group-hover:h-[80%] transition-all duration-700 delay-150"></div>
                        <div className="w-1/5 bg-blue-500 rounded-t-md h-[30%] group-hover:h-[50%] transition-all duration-700 delay-0"></div>
                        <div className="w-1/5 bg-blue-500 rounded-t-md h-[70%] group-hover:h-[90%] transition-all duration-700 delay-200"></div>
                        <div className="w-1/5 bg-emerald-500 rounded-t-md h-[50%] group-hover:h-[100%] transition-all duration-700 delay-300 shadow-lg shadow-emerald-200"></div>
                    </div>

                    <div className="mt-auto">
                        <h3 className="text-xl font-bold font-display text-navy mb-2">Pilotage & ROI</h3>
                        <p className="text-taupe text-xs leading-relaxed">
                            Suivez le volume d'appels et le chiffre d'affaires généré en temps réel.
                        </p>
                    </div>
                </div>
            </div>

             {/* CARD 4: AUTOMATION - Span 2 */}
             <div className="md:col-span-2 bg-offwhite rounded-[2.5rem] border border-taupe/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 group hover:bg-white hover:shadow-soft transition-all duration-300">
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                     <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100 text-purple-600 mx-auto md:mx-0">
                        <Smartphone size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-navy mb-3">Expérience Joueur Unifiée</h3>
                    <p className="text-taupe text-sm leading-relaxed mb-6">
                        Pas d'application à télécharger. Vos joueurs reçoivent des SMS de confirmation et accèdent à une WebApp élégante pour gérer leurs parties.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="px-3 py-1 rounded-full bg-white border border-taupe/10 text-[10px] font-bold text-taupe flex items-center gap-1">
                            <CheckCircle2 size={10} className="text-green-500"/> SMS Auto
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white border border-taupe/10 text-[10px] font-bold text-taupe flex items-center gap-1">
                            <CheckCircle2 size={10} className="text-green-500"/> WebApp
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white border border-taupe/10 text-[10px] font-bold text-taupe flex items-center gap-1">
                            <CheckCircle2 size={10} className="text-green-500"/> 0 téléchargement
                        </span>
                    </div>
                </div>

                {/* Notification Visual */}
                <div className="order-1 md:order-2 relative w-64">
                    <div className="bg-white rounded-2xl shadow-xl border border-taupe/10 p-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden p-1">
                                <img 
                                  src="/logos/Logo Swing Call.png" 
                                  className="w-full h-full object-contain" 
                                  alt="" 
                                />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-navy">Swing Call</div>
                                <div className="text-[9px] text-gray-400">À l'instant</div>
                            </div>
                        </div>
                        <div className="bg-offwhite rounded-lg p-3 text-[10px] text-navy font-medium leading-relaxed border border-taupe/5">
                            "Bonjour Philippe, votre départ pour demain à 09h30 est confirmé. Cliquez ici pour gérer votre partie."
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute inset-0 bg-purple-500/10 rounded-2xl rotate-6 -z-10 scale-95"></div>
                </div>
            </div>

        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes ping-pong {
            0%, 100% { left: 0; }
            50% { left: calc(100% - 8px); }
        }
        @keyframes wave {
            0%, 100% { height: 20%; }
            50% { height: 80%; }
        }
      `}</style>
    </section>
  );
};
