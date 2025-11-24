
import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, LayoutDashboard, TrendingUp, Clock, CreditCard, Bell, Play, Check, Sparkles, Mic, Search, Filter, User, Settings, FileText, Activity, Flag, Trophy, Users, Calendar, AlertCircle, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Animation States
  const [dashboardTab, setDashboardTab] = useState('overview');
  const [stats, setStats] = useState({ calls: 0, revenue: 0, savedTime: 0 });

  // Sequence for Dashboard Numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        calls: prev.calls < 128 ? prev.calls + 1 : 128,
        revenue: prev.revenue < 1450 ? prev.revenue + 10 : 1450,
        savedTime: prev.savedTime < 12 ? prev.savedTime + 0.5 : 12
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Helper for colors to avoid JIT issues
  const getColorClass = (color: string) => {
    switch(color) {
        case 'blue': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        case 'emerald': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
        case 'purple': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
        case 'orange': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
        case 'red': return 'text-red-400 bg-red-400/10 border-red-400/20';
        default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const sidebarItems = [
    { id: 'overview', label: "Vue d'ensemble", icon: LayoutDashboard },
    { id: 'calls', label: "Tous les appels", icon: Phone },
    { id: 'profile', label: "Gestion du profil", icon: Settings },
    { id: 'course', label: "Gestion du parcours", icon: Flag },
    { id: 'events', label: "Événements & Comp.", icon: Trophy },
    { id: 'members', label: "Clients & Membres", icon: Users },
  ];

  return (
    <section className="relative bg-white px-4 md:px-6 pb-6 h-screen min-h-[850px] flex flex-col" style={{paddingTop: 'calc(var(--navbar-height, 96px) + 24px)'}}>
        {/* --- HERO BOX --- */}
        <div className="flex-1 bg-navy rounded-[32px] relative overflow-hidden flex flex-col w-full shadow-2xl isolate ring-1 ring-black/5">
            
            {/* --- LUXURY BACKGROUND EFFECTS --- */}
            {/* Noise Texture for matte finish */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-[-50%] left-[20%] w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            
            {/* Spotlight effect from top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="container mx-auto px-4 h-full relative">
                
                {/* 1. Text Content (Centered & Foreground) */}
                <div className="relative z-40 flex flex-col items-center justify-start pt-16 md:pt-20 text-center max-w-5xl mx-auto">
                    
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/90 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Sparkles size={10} className="text-emerald-400" />
                        <span>Accueil téléphonique intelligent</span>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        Donnez à votre golf un assistant intelligent capable de gérer les appels comme un humain.
                    </h1>
                    
                    {/* Subtitle & CTA */}
                    <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <p className="text-blue-100/80 text-base md:text-lg font-medium text-center max-w-xl leading-relaxed">
                            Découvrez comment l’intelligence vocale simplifie chaque appel et chaque réservation, 24h/24 et 7j/7.
                        </p>
                       
                        {/* Luxury CTA Input */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1.5 pl-6 flex items-center shadow-2xl w-auto group cursor-pointer hover:bg-white/10 transition-all duration-300">
                            <div className="flex flex-col text-left mr-8">
                                <span className="text-white text-sm font-bold">Réserver une démo</span>
                                <span className="text-white/40 text-[10px] font-medium">Sans engagement</span>
                            </div>
                            <button className="w-10 h-10 bg-white text-navy rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. Visuals Layer (Background/Sides) */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    
                    {/* --- LEFT: PHONE MOCKUP (Titanium Frame) --- */}
                    <div className="absolute bottom-[-140px] lg:bottom-[-130px] left-4 md:left-12 lg:left-24 w-[260px] md:w-[300px] transform -rotate-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-all duration-1000 animate-in slide-in-from-left-24 fade-in delay-300">
                        {/* Titanium Frame */}
                        <div className="bg-[#1c1c1e] rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-[#3a3a3c] ring-1 ring-white/10 relative">
                             {/* Buttons */}
                             <div className="absolute top-24 -left-[10px] w-[6px] h-10 bg-[#2c2c2e] rounded-l-lg"></div>
                             <div className="absolute top-40 -left-[10px] w-[6px] h-16 bg-[#2c2c2e] rounded-l-lg"></div>
                             <div className="absolute top-32 -right-[10px] w-[6px] h-24 bg-[#2c2c2e] rounded-r-lg"></div>

                            {/* Screen Container */}
                            <div className="bg-black rounded-[3rem] overflow-hidden h-[580px] relative flex flex-col">
                                
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-3 border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-[#0a0a0a] border border-white/10"></div>
                                </div>

                                {/* --- PERMANENT STATE: AI ACTIVE INTELLIGENCE --- */}
                                <div className="flex-1 flex flex-col relative">
                                    {/* Background Gradient Mesh */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001529] to-[#002351]"></div>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex-1 flex flex-col items-center justify-between pt-20 pb-12 px-6">
                                        
                                        {/* Header */}
                                        <div className="text-center space-y-2">
                                            <div className="w-12 h-12 mx-auto bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-glow mb-4">
                                                <Mic className="text-emerald-400" size={24} />
                                            </div>
                                            <h3 className="text-white font-display font-bold text-2xl tracking-tight">Swing Call</h3>
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                                <span className="text-emerald-500/80 text-xs font-mono uppercase tracking-widest">En ligne</span>
                                            </div>
                                        </div>

                                        {/* AI Visualization (Apple Intelligence Style) */}
                                        <div className="w-full h-32 flex items-center justify-center gap-1.5 relative">
                                            {/* Glow Effect behind bars */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-emerald-500/0 blur-xl"></div>
                                            
                                            {[...Array(7)].map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className="w-2 bg-gradient-to-t from-blue-400 to-emerald-300 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                                                    style={{
                                                        height: '30%',
                                                        animation: `luxuryWave 2s ease-in-out infinite`,
                                                        animationDelay: `${i * 0.15}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>

                                        {/* Context Card */}
                                        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-500">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold leading-tight mb-1">Réservation confirmée</p>
                                                    <p className="text-white/50 text-xs">Départ 09h10 • 2 Joueurs</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Bottom Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: DESKTOP MOCKUP (Dark Mode Dashboard) --- */}
                    <div className="absolute bottom-[-100px] right-[-30%] md:right-[-15%] lg:right-[-5%] w-[90%] md:w-[70%] max-w-[1000px] aspect-[16/10] bg-[#09090B] rounded-[2rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] border-[6px] border-[#27272A] overflow-hidden z-10 animate-in slide-in-from-bottom-16 duration-1000 ease-out delay-100 pointer-events-auto ring-1 ring-white/10">
                        
                        {/* Header / Window Controls */}
                        <div className="h-10 bg-[#121212] border-b border-white/5 flex items-center px-4 gap-2 z-20">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-80"></div>
                            </div>
                            <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] font-medium text-white/60">app.swingcall.com</span>
                            </div>
                        </div>

                        <div className="flex h-full">
                            {/* Sidebar */}
                            <div className="w-16 lg:w-64 bg-[#0D0D0D] border-r border-white/5 flex flex-col py-6 px-3 gap-2">
                               <div className="hidden lg:flex items-center gap-3 px-3 mb-6 opacity-80">
                                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500"><Mic size={16} /></div>
                                    <span className="font-display font-bold text-white tracking-tight">Swing Admin</span>
                               </div>

                               {sidebarItems.map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => setDashboardTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 group ${
                                            dashboardTab === item.id 
                                            ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        <item.icon size={18} className={dashboardTab === item.id ? 'text-white' : 'text-gray-500 group-hover:text-white transition-colors'}/>
                                        <span className="hidden lg:block">{item.label}</span>
                                    </button>
                               ))}

                               <div className="mt-auto pt-4 border-t border-white/5 hidden lg:block">
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">GC</div>
                                        <div>
                                            <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">Golf Club</div>
                                            <div className="text-[10px] text-gray-500">Admin</div>
                                        </div>
                                    </div>
                               </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 bg-[#09090B] relative overflow-y-auto overflow-x-hidden">
                                
                                {/* VUE D'ENSEMBLE TAB (Main Dashboard) */}
                                {dashboardTab === 'overview' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 space-y-8">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h2 className="text-2xl font-bold text-white font-display">Vue d'ensemble</h2>
                                                <p className="text-xs text-gray-500 mt-1">Performances du jour vs semaine précédente.</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-[#18181B] border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none cursor-pointer hover:border-white/20 transition-colors">
                                                    Aujourd'hui
                                                </div>
                                            </div>
                                        </div>

                                        {/* KPIs */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {/* Calls */}
                                            <div className="bg-[#18181B] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                                        <Phone size={18} />
                                                    </div>
                                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">+12%</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white font-display mb-0.5">{stats.calls}</div>
                                                <div className="text-[10px] text-gray-500">Appels traités</div>
                                            </div>
                                            
                                            {/* Revenue */}
                                            <div className="bg-[#18181B] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                                        <CreditCard size={18} />
                                                    </div>
                                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">+8.4%</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white font-display mb-0.5">{stats.revenue}€</div>
                                                <div className="text-[10px] text-gray-500">CA Généré (IA)</div>
                                            </div>

                                            {/* Success Rate */}
                                            <div className="bg-[#18181B] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                                        <Activity size={18} />
                                                    </div>
                                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">+1.1%</span>
                                                </div>
                                                <div className="text-2xl font-bold text-white font-display mb-0.5">98.2%</div>
                                                <div className="text-[10px] text-gray-500">Taux de succès</div>
                                            </div>
                                        </div>

                                        {/* Chart */}
                                        <div className="bg-[#121214] rounded-2xl border border-white/5 p-6">
                                            <div className="flex items-center justify-between mb-8">
                                                <h3 className="text-sm font-bold text-white">Occupation du parcours</h3>
                                                <div className="flex gap-4">
                                                     <div className="flex items-center gap-2 text-[10px] text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Réel</div>
                                                     <div className="flex items-center gap-2 text-[10px] text-gray-400"><div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>Prévisionnel</div>
                                                </div>
                                            </div>
                                            <div className="h-32 w-full">
                                                {/* CSS Line Chart Simulation */}
                                                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                                                    {/* Grid lines */}
                                                    <line x1="0" y1="0" x2="100" y2="0" stroke="#333" strokeWidth="0.1" strokeDasharray="2"/>
                                                    <line x1="0" y1="10" x2="100" y2="10" stroke="#333" strokeWidth="0.1" strokeDasharray="2"/>
                                                    <line x1="0" y1="20" x2="100" y2="20" stroke="#333" strokeWidth="0.1" strokeDasharray="2"/>
                                                    <line x1="0" y1="30" x2="100" y2="30" stroke="#333" strokeWidth="0.1" strokeDasharray="2"/>
                                                    
                                                    <defs>
                                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5"/>
                                                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                                                        </linearGradient>
                                                    </defs>

                                                    {/* Area */}
                                                    <path d="M0,25 C10,22 20,28 30,15 C40,5 50,10 60,12 C70,15 80,5 90,8 C95,10 100,5 V30 H0 Z" fill="url(#gradient)" />
                                                    
                                                    {/* Line */}
                                                    <path d="M0,25 C10,22 20,28 30,15 C40,5 50,10 60,12 C70,15 80,5 90,8 C95,10 100,5" fill="none" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                    
                                                    {/* Points */}
                                                    {[
                                                        {x:30,y:15}, {x:60,y:12}, {x:90,y:8}
                                                    ].map((p,i) => (
                                                        <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#09090B" stroke="#3B82F6" strokeWidth="0.5" className="hover:r-2 transition-all duration-300"/>
                                                    ))}
                                                </svg>
                                            </div>
                                            <div className="flex justify-between mt-2 text-[9px] text-gray-600 font-mono uppercase">
                                                <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* TOUS LES APPELS TAB */}
                                {dashboardTab === 'calls' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 flex flex-col h-full">
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-white font-display">Journal d'appels</h2>
                                            <div className="flex gap-3">
                                                <button className="p-2 bg-[#18181B] rounded-lg text-gray-400 hover:text-white border border-white/10"><Filter size={14}/></button>
                                            </div>
                                        </div>
                                        <div className="bg-[#121214] rounded-2xl border border-white/5 overflow-hidden">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Heure</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Intention</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider text-right">Durée</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {[
                                                        { time: '10:42', contact: '06 12 ** ** 89', name: 'Philippe R.', intent: 'Réservation', duration: '45s', status: 'success' },
                                                        { time: '10:38', contact: '06 84 ** ** 21', name: 'Inconnu', intent: 'Info Météo', duration: '32s', status: 'info' },
                                                        { time: '10:15', contact: '07 45 ** ** 11', name: 'Thomas B.', intent: 'Annulation', duration: '1m 12s', status: 'warn' },
                                                        { time: '09:55', contact: '04 78 ** ** 00', name: 'Fournisseur', intent: 'Transfert', duration: '15s', status: 'neutral' },
                                                    ].map((call, i) => (
                                                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors cursor-default">
                                                            <td className="p-4 text-xs font-mono text-gray-500">{call.time}</td>
                                                            <td className="p-4">
                                                                <div className="text-xs font-bold text-white">{call.name}</div>
                                                                <div className="text-[10px] text-gray-500">{call.contact}</div>
                                                            </td>
                                                            <td className="p-4">
                                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-bold border ${
                                                                    call.status === 'success' ? getColorClass('emerald') :
                                                                    call.status === 'warn' ? getColorClass('red') :
                                                                    call.status === 'info' ? getColorClass('blue') : getColorClass('gray')
                                                                }`}>
                                                                    {call.intent}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 text-right text-xs text-gray-500">{call.duration}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {/* GESTION DU PROFIL TAB */}
                                {dashboardTab === 'profile' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 flex flex-col h-full">
                                         <h2 className="text-2xl font-bold text-white font-display mb-6">Paramètres Profil</h2>
                                         
                                         <div className="bg-[#121214] rounded-2xl border border-white/5 p-6 space-y-6">
                                            <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">GC</div>
                                                <div>
                                                    <h3 className="text-white font-bold">Directeur de Golf</h3>
                                                    <p className="text-xs text-gray-500">admin@golfclub.com</p>
                                                </div>
                                                <button className="ml-auto text-xs text-blue-400 border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 rounded-lg hover:bg-blue-400/20 transition-colors">Modifier</button>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <Bell size={16} className="text-gray-400"/>
                                                        <span className="text-sm text-gray-300">Notifications Email</span>
                                                    </div>
                                                    <ToggleRight size={24} className="text-emerald-500 cursor-pointer"/>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <Phone size={16} className="text-gray-400"/>
                                                        <span className="text-sm text-gray-300">Renvoi d'appel (Mobile)</span>
                                                    </div>
                                                    <ToggleLeft size={24} className="text-gray-600 cursor-pointer"/>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                )}

                                {/* GESTION DU PARCOURS TAB */}
                                {dashboardTab === 'course' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 flex flex-col h-full">
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-white font-display">État du Parcours</h2>
                                            <span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div> Live</span>
                                        </div>

                                        <div className="grid gap-4">
                                            <div className="bg-[#121214] p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><Flag size={20}/></div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white">Grand Parcours (18T)</h4>
                                                        <p className="text-xs text-gray-500">Ouvert • Tonte en cours (Trous 1-9)</p>
                                                    </div>
                                                </div>
                                                <button className="text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">Gérer</button>
                                            </div>

                                            <div className="bg-[#121214] p-5 rounded-2xl border border-white/5 flex items-center justify-between opacity-75">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center"><Flag size={20}/></div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white">Compact (9T)</h4>
                                                        <p className="text-xs text-gray-500">Fermé • Maintenance</p>
                                                    </div>
                                                </div>
                                                <button className="text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">Gérer</button>
                                            </div>

                                             <div className="bg-[#121214] p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center"><CreditCard size={20}/></div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white">Tarif Green-Fee</h4>
                                                        <p className="text-xs text-gray-500">Semaine Basse Saison : 65€</p>
                                                    </div>
                                                </div>
                                                <button className="text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors">Modifier</button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* EVENTS TAB */}
                                {dashboardTab === 'events' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 flex flex-col h-full">
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-white font-display">Compétitions</h2>
                                            <div className="flex gap-3">
                                                <button className="px-3 py-2 bg-blue-600 rounded-lg text-white text-xs font-bold hover:bg-blue-500 transition-colors">
                                                    + Créer
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-[#121214] rounded-2xl border border-white/5 overflow-hidden">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Nom</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Formule</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Inscrits</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider text-right">Statut</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {[
                                                        { date: '24 Oct', name: 'Coupe du Président', form: 'Stroke Play', insc: '84 / 120', status: 'Ouvert', color: 'emerald' },
                                                        { date: '31 Oct', name: 'Trophée Halloween', form: 'Scramble', insc: '42 / 80', status: 'Bientôt', color: 'blue' },
                                                        { date: '12 Nov', name: 'Compétition Senior', form: 'Stableford', insc: '12 / 40', status: 'Fermé', color: 'gray' },
                                                        { date: '25 Dec', name: 'Coupe de Noël', form: 'Chapman', insc: '0 / 100', status: 'Planifié', color: 'purple' },
                                                    ].map((evt, i) => (
                                                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors cursor-default">
                                                            <td className="p-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                                                                <Calendar size={12}/> {evt.date}
                                                            </td>
                                                            <td className="p-4">
                                                                <span className="text-xs font-bold text-white">{evt.name}</span>
                                                            </td>
                                                            <td className="p-4 text-xs text-gray-400">{evt.form}</td>
                                                            <td className="p-4 text-xs text-white">{evt.insc}</td>
                                                            <td className="p-4 text-right">
                                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-bold border ${getColorClass(evt.color)}`}>
                                                                    {evt.status}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                 {/* MEMBERS TAB */}
                                 {dashboardTab === 'members' && (
                                    <div className="p-8 animate-in fade-in zoom-in-95 duration-300 flex flex-col h-full">
                                         <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-white font-display">Base Membres</h2>
                                            <div className="relative">
                                                 <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                 <input type="text" placeholder="Rechercher un membre..." className="bg-[#18181B] border border-white/10 pl-9 pr-4 py-2 rounded-lg text-xs text-white focus:border-blue-500/50 outline-none w-48 transition-all" />
                                            </div>
                                         </div>

                                         <div className="bg-[#121214] rounded-2xl border border-white/5 overflow-hidden">
                                             <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Membre</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider">Index</th>
                                                        <th className="p-4 text-[9px] font-bold text-gray-500 uppercase tracking-wider text-right">Statut</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {[
                                                        { name: 'Philippe R.', type: 'Semainier', idx: '12.4', status: 'Actif', color: 'emerald' },
                                                        { name: 'Sophie L.', type: 'Full Time', idx: '24.0', status: 'Actif', color: 'emerald' },
                                                        { name: 'Marc D.', type: 'Jeune -25', idx: '5.2', status: 'Retard', color: 'orange' },
                                                        { name: 'Jean-Pierre', type: 'Sénior', idx: '18.5', status: 'Suspendu', color: 'purple' },
                                                        { name: 'Thomas B.', type: 'VIP', idx: '4.2', status: 'Actif', color: 'emerald' },
                                                    ].map((member, i) => (
                                                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors cursor-default">
                                                            <td className="p-4">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] text-white font-bold border border-white/10">{member.name.charAt(0)}</div>
                                                                    <span className="text-xs font-medium text-white">{member.name}</span>
                                                                </div>
                                                            </td>
                                                            <td className="p-4 text-xs text-gray-400">{member.type}</td>
                                                            <td className="p-4 text-xs font-mono text-white">{member.idx}</td>
                                                            <td className="p-4 text-right">
                                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[9px] font-bold border ${getColorClass(member.color)}`}>
                                                                    {member.status}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                         </div>
                                    </div>
                                 )}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        {/* CSS Keyframes for Luxury Wave */}
        <style>{`
            @keyframes luxuryWave {
                0%, 100% { height: 30%; opacity: 0.5; }
                50% { height: 80%; opacity: 1; }
            }
        `}</style>
    </section>
  );
};
