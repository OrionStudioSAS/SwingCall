
import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Phone, Clock, Zap, ShieldCheck, Sliders, Calculator, Languages, Mic, Bot, Globe, LayoutDashboard, MessageSquare, History, BarChart3, UserCheck, GitMerge, RefreshCw, Headset, Link as LinkIcon } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [callVolume, setCallVolume] = useState(1500);
  const [isInternational, setIsInternational] = useState(false);
  const [voiceType, setVoiceType] = useState<'standard' | 'neural'>('neural');

  // Pricing Logic
  const calculatePrice = () => {
    let total = 149; // Base Platform Fee

    // Volume Cost (sliding scale simulation)
    const costPerCall = 0.12; 
    total += Math.floor(callVolume * costPerCall);

    // Add-ons
    if (isInternational) total += 49;
    if (voiceType === 'neural') total += 89;

    return total;
  };

  const calculateHoursSaved = (volume: number) => {
    // Assuming avg call handling is 3 mins (reception + booking + questions)
    return Math.floor((volume * 3) / 60);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  };

  const price = calculatePrice();

  const featuresList = [
    { label: "IA vocale intelligente 24/7", icon: Mic },
    { label: "Dashboard unifié", icon: LayoutDashboard },
    { label: "Intégration NetGolf & Prima", icon: LinkIcon },
    { label: "Envoi automatique de SMS", icon: MessageSquare },
    { label: "Historique complet des appels", icon: History },
    { label: "Statistiques & reporting", icon: BarChart3 },
    { label: "Fiches joueurs enrichies", icon: UserCheck },
    { label: "Routage intelligent", icon: GitMerge },
    { label: "Relances automatiques", icon: RefreshCw },
    { label: "Mises à jour continues", icon: Zap },
    { label: "Support client dédié 24/7", icon: Headset },
  ];

  return (
    <section id="pricing" className="py-32 bg-offwhite border-t border-taupe/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold uppercase tracking-widest mb-6">
                <Calculator size={12} className="fill-navy" />
                Simulateur sur-mesure
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
                Une technologie flexible,<br/> un tarif transparent.
            </h2>
            <p className="text-taupe text-lg leading-relaxed">
                Composez votre assistant idéal. Ajustez le volume, la voix et les langues selon le standing de votre golf.
            </p>
        </div>

        {/* Main Pricing Interface */}
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-taupe/10 overflow-hidden flex flex-col lg:flex-row mb-12">
            
            {/* LEFT: The Configurator */}
            <div className="lg:w-[65%] p-8 md:p-12 flex flex-col">
                <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold text-navy mb-2">Configuration</h3>
                    <p className="text-sm text-taupe">Personnalisez les capacités de votre IA.</p>
                </div>

                {/* 1. VOLUME SLIDER */}
                <div className="bg-offwhite rounded-3xl p-6 border border-taupe/10 mb-6 relative">
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-taupe/10 flex items-center justify-center text-navy shadow-sm">
                                <Phone size={18} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-taupe uppercase tracking-wider">Volume mensuel</div>
                                <div className="text-xl font-bold text-navy font-display">{callVolume.toLocaleString()} Appels</div>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/50 border border-emerald-200 text-emerald-700 font-bold text-xs">
                                <Clock size={14} /> {calculateHoursSaved(callVolume)}h économisées / mois
                            </div>
                        </div>
                    </div>

                    {/* Custom Range Slider */}
                    <div className="relative h-12 flex items-center">
                        <input 
                            type="range" 
                            min="200" 
                            max="5000" 
                            step="100"
                            value={callVolume}
                            onChange={(e) => setCallVolume(Number(e.target.value))}
                            className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                        />
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative z-10">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-navy transition-all duration-100"
                                style={{ width: `${((callVolume - 200) / 4800) * 100}%` }}
                            ></div>
                        </div>
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.2)] border-2 border-navy z-10 pointer-events-none transition-all duration-100 flex items-center justify-center"
                            style={{ left: `calc(${((callVolume - 200) / 4800) * 100}% - 16px)` }}
                        >
                            <Sliders size={14} className="text-navy" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* 2. VOICE ENGINE SELECTOR */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-taupe uppercase tracking-wider ml-1">Moteur Vocal</label>
                        <div className="grid grid-cols-1 gap-3">
                            <button 
                                onClick={() => setVoiceType('standard')}
                                className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
                                    voiceType === 'standard' 
                                    ? 'bg-navy text-white border-navy shadow-lg' 
                                    : 'bg-white border-taupe/10 hover:border-navy/30 text-taupe'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                    voiceType === 'standard' ? 'bg-white/10 text-white' : 'bg-offwhite text-taupe'
                                }`}>
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Standard</div>
                                    <div className={`text-[10px] ${voiceType === 'standard' ? 'text-white/60' : 'text-taupe/60'}`}>Synthèse classique</div>
                                </div>
                                {voiceType === 'standard' && <div className="ml-auto"><Check size={16} /></div>}
                            </button>

                            <button 
                                onClick={() => setVoiceType('neural')}
                                className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                                    voiceType === 'neural' 
                                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-transparent shadow-lg shadow-blue-500/20' 
                                    : 'bg-white border-taupe/10 hover:border-blue-500/30 text-taupe'
                                }`}
                            >
                                {voiceType === 'neural' && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>}
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 ${
                                    voiceType === 'neural' ? 'bg-white/20 text-white' : 'bg-offwhite text-taupe'
                                }`}>
                                    <Mic size={20} />
                                </div>
                                <div className="relative z-10">
                                    <div className="font-bold text-sm flex items-center gap-2">
                                        Neural Human-Like
                                        <span className="px-1.5 py-0.5 rounded bg-white/20 text-[9px] font-bold uppercase tracking-wide">Premium</span>
                                    </div>
                                    <div className={`text-[10px] ${voiceType === 'neural' ? 'text-white/80' : 'text-taupe/60'}`}>Indiscernable d'un humain</div>
                                </div>
                                {voiceType === 'neural' && <div className="ml-auto relative z-10"><Check size={16} /></div>}
                            </button>
                        </div>
                    </div>

                    {/* 3. LANGUAGE SELECTOR */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-taupe uppercase tracking-wider ml-1">Langues supportées</label>
                        <div className="bg-offwhite p-1.5 rounded-2xl border border-taupe/10 flex flex-col gap-1">
                             <button 
                                onClick={() => setIsInternational(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                                    !isInternational 
                                    ? 'bg-white text-navy shadow-sm border border-taupe/5' 
                                    : 'text-taupe hover:bg-white/50'
                                }`}
                            >
                                <span className="text-lg leading-none">🇫🇷</span>
                                <div className="flex flex-col text-left">
                                    <span>Français uniquement</span>
                                </div>
                            </button>
                            <button 
                                onClick={() => setIsInternational(true)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                                    isInternational 
                                    ? 'bg-white text-navy shadow-sm border border-taupe/5' 
                                    : 'text-taupe hover:bg-white/50'
                                }`}
                            >
                                <span className="text-lg leading-none">🌍</span>
                                <div className="flex flex-col text-left">
                                    <span>International</span>
                                    <span className="text-[9px] font-normal opacity-60">Français + Anglais</span>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* RIGHT: The Value Proposition (Dark Mode) */}
            <div className="lg:w-[35%] bg-navy relative flex flex-col justify-between p-8 md:p-10 text-white overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest mb-8">
                        <Sparkles size={12} className="text-emerald-400" />
                        Offre recommandée
                    </div>
                    
                    <h3 className="text-sm font-medium opacity-60 mb-1 uppercase tracking-widest">Budget estimé</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-display font-bold tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-300 key={price}">
                           {formatCurrency(price)}
                        </span>
                        <span className="text-sm text-white/60">/ mois</span>
                    </div>

                    {/* Dynamic Features List */}
                    <div className="space-y-3 text-sm border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3 text-white">
                             <Check size={14} className="text-emerald-400 shrink-0" strokeWidth={3} />
                             <span>Jusqu'à <b>{callVolume.toLocaleString()}</b> appels inclus</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                             <Check size={14} className="text-emerald-400 shrink-0" strokeWidth={3} />
                             <span>Intégration NetGolf / Prima</span>
                        </div>
                        <div className={`flex items-center gap-3 transition-colors duration-300 ${voiceType === 'neural' ? 'text-white' : 'text-white/40'}`}>
                             <Check size={14} className={`shrink-0 ${voiceType === 'neural' ? 'text-emerald-400' : 'text-white/20'}`} strokeWidth={3} />
                             <span>Voix Neural Ultra-Realistic</span>
                        </div>
                        <div className={`flex items-center gap-3 transition-colors duration-300 ${isInternational ? 'text-white' : 'text-white/40'}`}>
                             <Check size={14} className={`shrink-0 ${isInternational ? 'text-emerald-400' : 'text-white/20'}`} strokeWidth={3} />
                             <span>Support Anglais Bilingue</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12">
                    <button className="w-full py-4 bg-white text-navy rounded-xl font-bold text-sm hover:bg-offwhite transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Commencer
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                    <div className="text-center mt-4 space-y-1">
                         <div className="text-[10px] text-white/40">Sans engagement • Installation rapide</div>
                    </div>
                </div>
            </div>

        </div>

        {/* INCLUDED FEATURES GRID */}
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <span className="px-4 py-2 rounded-full bg-white border border-taupe/10 text-xs font-bold text-navy uppercase tracking-widest shadow-sm">
                    Inclus dans chaque licence
                </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuresList.map((feature, i) => (
                    <div 
                        key={i} 
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-taupe/10 shadow-soft hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-offwhite border border-taupe/5 flex items-center justify-center text-taupe group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                            <feature.icon size={18} strokeWidth={2} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-navy group-hover:text-blue-600 transition-colors duration-300">
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};
