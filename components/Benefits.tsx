
import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowUpRight, Users, Clock, Zap, TrendingUp, TrendingDown, MessageSquare, 
    ShieldCheck, BellRing, Utensils, Sun, CalendarCheck, ChevronRight, 
    MoreHorizontal, CreditCard, ShoppingBag, Calendar, MapPin, Tag, 
    Volume2, VolumeX, Wind, Leaf, History, Cake, Award, Activity,
    Phone, Mail, Trophy, FileText, AlertCircle, CheckCircle2
} from 'lucide-react';

export const Benefits: React.FC = () => {
  // --- STATE: CRM PROFILES ---
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [isHoveringCrm, setIsHoveringCrm] = useState(false);

  const profiles = [
    {
      id: 1, initials: "AR", name: "Alexandre R.", type: "Membre Gold", 
      subType: "Abonné 7j • Sénior",
      colors: { main: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", badgeBg: "bg-emerald-100", badgeText: "text-emerald-800" },
      crm: {
        email: "alex.r@gmail.com",
        phone: "06 12 ** ** 89",
        city: "Lyon 6ème",
        birth: "12/05/1962 (62 ans)",
        license: "542910333",
        licenseStatus: "Active",
        memberSince: "2015",
        ranking: "14e / 450",
        handicapTrend: "down",
        revenue: "2 450€",
        avgBasket: "45€",
        freq: "Top 5%",
        index: "12.4",
        medicalCert: "Validé"
      },
      details: { next: "Demain, 09h10", tags: ["Voiturette", "Restaurant", "Pro-shop"], last: "Appel entrant (hier)" }
    },
    {
      id: 2, initials: "SL", name: "Sarah L.", type: "Visiteur", 
      subType: "Extérieur • Golf de St-Cloud",
      colors: { main: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", badgeBg: "bg-blue-100", badgeText: "text-blue-800" },
      crm: {
        email: "sarah.l@yahoo.fr",
        phone: "06 84 ** ** 21",
        city: "Paris 16ème",
        birth: "03/11/1988 (36 ans)",
        license: "992102884",
        licenseStatus: "Active",
        memberSince: "-",
        ranking: "-",
        handicapTrend: "stable",
        revenue: "180€",
        avgBasket: "90€",
        freq: "Occasionnelle",
        index: "24.0",
        medicalCert: "À vérifier"
      },
      details: { next: "Samedi, 14h30", tags: ["Green-Fee", "Location Clubs"], last: "Réservation Web" }
    },
    {
      id: 3, initials: "TB", name: "Thomas B.", type: "VIP Platinum", 
      subType: "Membre Entreprise",
      colors: { main: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200", badgeBg: "bg-purple-100", badgeText: "text-purple-800" },
      crm: {
        email: "t.bertrand@corp.com",
        phone: "07 45 ** ** 11",
        city: "Genève",
        birth: "22/06/1975 (49 ans)",
        license: "110293844",
        licenseStatus: "Active",
        memberSince: "2018",
        ranking: "3e / 450",
        handicapTrend: "down",
        revenue: "5 200€",
        avgBasket: "120€",
        freq: "Élevée",
        index: "4.2",
        medicalCert: "Validé"
      },
      details: { next: "Aujourd'hui, 11h00", tags: ["Invités x3", "Déjeuner", "Cigare"], last: "SMS Auto" }
    },
    {
      id: 4, initials: "JD", name: "Julie D.", type: "Membre Semaine", 
      subType: "Semainier • Étudiante",
      colors: { main: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", badgeBg: "bg-orange-100", badgeText: "text-orange-800" },
      crm: {
        email: "julie.d22@hotmail.com",
        phone: "06 99 ** ** 55",
        city: "Villeurbanne",
        birth: "14/02/2001 (23 ans)",
        license: "440291822",
        licenseStatus: "Expirée",
        memberSince: "2022",
        ranking: "89e / 450",
        handicapTrend: "up",
        revenue: "650€",
        avgBasket: "15€",
        freq: "Moyenne",
        index: "18.5",
        medicalCert: "Expiré"
      },
      details: { next: "Mardi prochain", tags: ["Cours Coll.", "Practice"], last: "Question Météo" }
    }
  ];

  useEffect(() => {
    if (isHoveringCrm) return;
    const interval = setInterval(() => {
      setActiveProfileIndex((prev) => (prev + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHoveringCrm]);

  const currentProfile = profiles[activeProfileIndex];


  // --- STATE: REVENUE CHART ---
  const [revTab, setRevTab] = useState<'jour' | 'semaine' | 'mois'>('jour');
  const [revenue, setRevenue] = useState(1250);
  const [scrubRevenue, setScrubRevenue] = useState<number | null>(null);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  
  const pathRef = useRef<SVGPathElement>(null);

  // Path Data Definitions
  const paths = {
      jour: {
          area: "M0,150 C50,140 100,100 150,120 C250,160 350,50 450,80 C550,110 650,40 750,60 L900,20 V180 H0 Z",
          line: "M0,150 C50,140 100,100 150,120 C250,160 350,50 450,80 C550,110 650,40 750,60 L900,20"
      },
      semaine: {
          area: "M0,120 C100,80 200,150 300,100 C400,40 500,90 600,50 C700,20 800,60 900,10 V180 H0 Z",
          line: "M0,120 C100,80 200,150 300,100 C400,40 500,90 600,50 C700,20 800,60 900,10"
      },
      mois: {
          area: "M0,100 C100,120 200,80 300,60 C400,90 500,120 600,80 C700,40 800,30 900,5 V180 H0 Z",
          line: "M0,100 C100,120 200,80 300,60 C400,90 500,120 600,80 C700,40 800,30 900,5"
      }
  };

  // Simulate live ticker effect when tab changes
  useEffect(() => {
    let target = 1250;
    if (revTab === 'semaine') target = 8400;
    if (revTab === 'mois') target = 32500;
    
    // Reset scrub state
    setScrubRevenue(null);

    const step = Math.ceil(target / 20);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            setRevenue(target);
            clearInterval(timer);
        } else {
            setRevenue(current);
        }
    }, 20);
    
    return () => clearInterval(timer);
  }, [revTab]);

  const handleChartMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorX(x);

    // Calculate percentages
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    
    // 1. Value Calculation for Ticker
    let maxVal = 1500;
    if (revTab === 'semaine') maxVal = 9000;
    if (revTab === 'mois') maxVal = 35000;

    // Easing function to make values feel more like a growing curve
    const curvedPct = percentage < 0.5 ? 2 * percentage * percentage : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
    setScrubRevenue(Math.floor(curvedPct * maxVal));

    // 2. Y-Position Calculation for Dot (Sticky on Line)
    if (pathRef.current) {
        const svgWidth = 900;
        const svgHeight = 180;
        const pointX = percentage * svgWidth;
        
        // Binary search for the Y coordinate on the path
        const pathEl = pathRef.current;
        const pathLength = pathEl.getTotalLength();
        let start = 0;
        let end = pathLength;
        let targetPoint = pathEl.getPointAtLength(0);

        // Approximation loop (12 iterations is usually enough for pixel precision)
        for (let i = 0; i < 12; i++) {
            const mid = (start + end) / 2;
            const p = pathEl.getPointAtLength(mid);
            if (p.x < pointX) {
                start = mid;
            } else {
                end = mid;
            }
            targetPoint = p;
        }

        // Map SVG Y back to DOM Y
        // The SVG is scaled to fit the container height.
        // If SVG viewBox is 0 0 900 180, and container is rect.height
        const scaleY = rect.height / svgHeight;
        setCursorY(targetPoint.y * scaleY);
    }
  };

  const handleChartMouseLeave = () => {
    setScrubRevenue(null);
  };

  // --- STATE: ZEN MODE ---
  const [isZenMode, setIsZenMode] = useState(true);


  return (
    <section id="pourquoi" className="py-32 bg-offwhite relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Zap size={12} className="fill-navy" />
                    Performance & Sérénité
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-navy leading-[1.1]">
                    Plus d’appels manqués.<br/> 
                    <span className="text-taupe/80">Plus de revenus.</span>
                </h2>
             </div>
             <div className="text-right hidden md:block">
                <div className="text-3xl font-bold text-navy font-display mb-1">100%</div>
                <p className="text-xs font-medium text-taupe uppercase tracking-wider">des appels décrochés</p>
             </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[400px]">
            
            {/* CARD 1: REVENUE & MISSED CALLS (Large Wide - Dark Mode) */}
            <div className="md:col-span-8 relative rounded-[2.5rem] bg-navy overflow-hidden group shadow-2xl border border-white/5 ring-1 ring-white/10 flex flex-col">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#001529] to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col z-20">
                    <div className="flex justify-between items-start mb-8 pointer-events-none relative z-30">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 text-emerald-400 shadow-glow">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white mb-2">Revenus Sécurisés</h3>
                            <p className="text-white/60 text-sm max-w-md leading-relaxed hidden md:block">
                                Chaque appel manqué est un green-fee perdu. Swing Call transforme 100% des opportunités.
                            </p>
                        </div>
                        
                        {/* Tab Switcher (Pointer Events Enabled) */}
                        <div className="flex p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 pointer-events-auto">
                            {(['jour', 'semaine', 'mois'] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setRevTab(t)}
                                    className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                                        revTab === t 
                                        ? 'bg-emerald-500 text-navy shadow-lg' 
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div 
                        className="flex-1 relative w-full flex items-end cursor-crosshair group/chart"
                        onMouseMove={handleChartMouseMove}
                        onMouseLeave={handleChartMouseLeave}
                    >
                         
                         {/* Live Value Overlay */}
                         <div className="absolute top-0 left-0 pointer-events-none z-20">
                            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${scrubRevenue !== null ? '' : 'animate-pulse'}`}></span>
                                {scrubRevenue !== null ? 'Revenu simulé' : `Revenu récupéré (${revTab})`}
                            </div>
                            <div className="text-5xl font-display font-bold text-white tracking-tight tabular-nums transition-none">
                                {(scrubRevenue !== null ? scrubRevenue : revenue).toLocaleString()}€
                            </div>
                         </div>

                         {/* SVG Graph */}
                         <div className="w-full h-[180px] relative mt-auto pointer-events-none">
                             {/* Grid lines */}
                             <div className="absolute inset-0 flex flex-col justify-between">
                                <div className="w-full h-px bg-white/5 border-t border-white/5 border-dashed"></div>
                                <div className="w-full h-px bg-white/5 border-t border-white/5 border-dashed"></div>
                                <div className="w-full h-px bg-white/5 border-t border-white/5 border-dashed"></div>
                             </div>
                             
                             <svg className="w-full h-full overflow-visible" viewBox="0 0 900 180" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradientChart" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.5"/>
                                        <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path 
                                    d={paths[revTab].area}
                                    fill="url(#gradientChart)"
                                    className="transition-all duration-1000 ease-in-out"
                                />
                                <path 
                                    ref={pathRef}
                                    d={paths[revTab].line}
                                    fill="none" 
                                    stroke="#34D399" 
                                    strokeWidth="3" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-1000 ease-in-out drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                                />
                             </svg>
                         </div>

                         {/* Cursor Line & Dot (Visible on Hover) */}
                         {scrubRevenue !== null && (
                            <div 
                                className="absolute top-0 bottom-0 w-px bg-emerald-400/50 border-l border-dashed border-emerald-400/30 pointer-events-none z-10"
                                style={{ left: cursorX }}
                            >
                                {/* Dot positioned on the line using calculated Y */}
                                <div 
                                    className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] border-2 border-white transition-all duration-75 ease-linear"
                                    style={{ top: cursorY }}
                                ></div>
                            </div>
                         )}
                    </div>
                </div>
            </div>

            {/* CARD 2: CRM / KNOWLEDGE (Expanded - High End) */}
            <div 
                className="md:col-span-4 md:row-span-2 relative rounded-[2.5rem] bg-white border border-taupe/10 shadow-soft overflow-hidden group flex flex-col"
                onMouseEnter={() => setIsHoveringCrm(true)}
                onMouseLeave={() => setIsHoveringCrm(false)}
            >
                <div className="p-8 flex-1 relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                             <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-navy leading-tight">Fiche Client<br/>Intelligente</h3>
                        </div>
                         {/* AVATAR SELECTOR */}
                        <div className="flex flex-col gap-2">
                            {profiles.map((profile, idx) => (
                                <div 
                                    key={profile.id}
                                    onMouseEnter={() => setActiveProfileIndex(idx)}
                                    className={`relative cursor-pointer transition-all duration-300 flex justify-end`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all duration-300 ${
                                        idx === activeProfileIndex 
                                        ? `bg-white ${profile.colors.border} ${profile.colors.main} shadow-md scale-110` 
                                        : 'bg-gray-50 border-transparent text-gray-400 opacity-60 hover:opacity-100'
                                    }`}>
                                        {profile.initials}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-taupe text-xs leading-relaxed mb-6">
                        Reconnaissance immédiate. L'IA affiche le dossier complet avant même le décrochage.
                    </p>

                    {/* Animated Card Container */}
                    <div className="relative w-full flex-1 min-h-[550px]">
                         {/* Active Profile Card */}
                         <div key={currentProfile.id} className="absolute inset-0 bg-offwhite rounded-3xl border border-taupe/10 shadow-sm p-5 flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
                            
                            {/* HEADER */}
                            <div className="flex justify-between items-start mb-5">
                                <div className="flex items-center gap-3">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold shadow-sm ${currentProfile.colors.bg} ${currentProfile.colors.main}`}>
                                        {currentProfile.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-navy text-lg font-display leading-none">{currentProfile.name}</div>
                                        <div className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mt-1.5 ${currentProfile.colors.badgeBg} ${currentProfile.colors.badgeText}`}>
                                            {currentProfile.type}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Statut</div>
                                    <div className="text-xs font-bold text-navy">{currentProfile.subType}</div>
                                </div>
                            </div>
                            
                            {/* CONTACT & IDENTITY */}
                            <div className="bg-white rounded-xl p-4 border border-taupe/5 shadow-sm mb-3">
                                <div className="grid grid-cols-2 gap-y-3">
                                     <div className="flex items-center gap-2">
                                        <Phone size={12} className="text-taupe"/>
                                        <span className="text-xs font-medium text-navy">{currentProfile.crm.phone}</span>
                                     </div>
                                     <div className="flex items-center gap-2">
                                        <Mail size={12} className="text-taupe"/>
                                        <span className="text-xs font-medium text-navy truncate w-32">{currentProfile.crm.email}</span>
                                     </div>
                                     <div className="flex items-center gap-2">
                                        <MapPin size={12} className="text-taupe"/>
                                        <span className="text-xs font-medium text-navy">{currentProfile.crm.city}</span>
                                     </div>
                                     <div className="flex items-center gap-2">
                                        <Cake size={12} className="text-taupe"/>
                                        <span className="text-xs font-medium text-navy">{currentProfile.crm.birth}</span>
                                     </div>
                                </div>
                            </div>

                            {/* SPORT & CLUB DATA */}
                            <div className="bg-white rounded-xl p-4 border border-taupe/5 shadow-sm mb-3 flex-1">
                                <div className="space-y-3">
                                    {/* Row 1 */}
                                    <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                                            <Award size={12} /> Licence FFG
                                        </span>
                                        <div className="text-right flex items-center gap-2">
                                            <span className="text-xs font-bold text-navy font-mono">{currentProfile.crm.license}</span>
                                            {currentProfile.crm.licenseStatus === 'Active' 
                                                ? <CheckCircle2 size={12} className="text-emerald-500"/> 
                                                : <AlertCircle size={12} className="text-red-500"/>}
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                                            <Activity size={12} /> Index & Tendance
                                        </span>
                                        <div className="text-right flex items-center gap-2">
                                            <span className="text-sm font-bold text-navy font-display">{currentProfile.crm.index}</span>
                                            {currentProfile.crm.handicapTrend === 'down' && <TrendingDown size={12} className="text-emerald-500"/>}
                                            {currentProfile.crm.handicapTrend === 'up' && <TrendingUp size={12} className="text-red-500"/>}
                                            {currentProfile.crm.handicapTrend === 'stable' && <div className="w-3 h-0.5 bg-gray-300"></div>}
                                        </div>
                                    </div>

                                     {/* Row 3 */}
                                     <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                                            <Trophy size={12} /> Classement Club
                                        </span>
                                        <span className="text-xs font-bold text-navy">{currentProfile.crm.ranking}</span>
                                    </div>

                                    {/* Row 4 */}
                                    <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                                            <FileText size={12} /> Certificat Médical
                                        </span>
                                        <span className={`text-[10px] font-bold uppercase ${currentProfile.crm.medicalCert === 'Validé' ? 'text-emerald-600' : 'text-red-500'}`}>
                                            {currentProfile.crm.medicalCert}
                                        </span>
                                    </div>

                                     {/* Row 5 - Financials */}
                                     <div className="flex justify-between items-center pt-1">
                                        <div className="flex gap-4">
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase">Dépenses</div>
                                                <div className="text-xs font-bold text-navy">{currentProfile.crm.revenue}</div>
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase">Panier Moy.</div>
                                                <div className="text-xs font-bold text-navy">{currentProfile.crm.avgBasket}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] text-gray-400 uppercase">Fréquence</div>
                                            <div className="text-xs font-bold text-navy">{currentProfile.crm.freq}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Preferences Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-0">
                                {currentProfile.details.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-white border border-taupe/10 rounded-md text-[9px] font-bold text-taupe flex items-center gap-1 shadow-sm">
                                        <Tag size={10} className="opacity-50"/> {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Footer: Next Action - Close to content */}
                            <div className="mt-6 bg-navy rounded-xl p-3 flex items-center gap-3 shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-emerald-400 shadow-sm shrink-0 border border-white/10">
                                    <Calendar size={14} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[9px] text-white/60 uppercase font-bold">Prochain départ</div>
                                    <div className="text-xs font-bold text-white">{currentProfile.details.next}</div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* CARD 3: AUTOMATIONS (Square - Techy Notifications) */}
            <div className="md:col-span-4 relative rounded-[2.5rem] bg-white border border-taupe/10 shadow-soft overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:scale-110 duration-700"></div>
                
                <div className="p-8 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-navy mb-2">Automatisations & Upsell</h3>
                    <p className="text-taupe text-xs leading-relaxed mb-6">
                        Transformez chaque réservation en opportunité. Rappels, météo et vente additionnelle automatiques.
                    </p>

                    {/* Animated Notification List */}
                    <div className="mt-auto flex flex-col gap-3 relative h-[160px] mask-linear-gradient-to-b">
                        {/* Notification 1: Standard Reminder */}
                        <div className="bg-white border border-taupe/10 p-3 rounded-xl flex items-center gap-3 shadow-sm transform hover:scale-105 transition-all cursor-default">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <BellRing size={14} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                    <div className="text-[10px] font-bold text-navy">Rappel H-1</div>
                                    <span className="text-[9px] text-gray-400">10:00</span>
                                </div>
                                <div className="text-[9px] text-gray-500 truncate">N'oubliez pas votre départ dans 1h.</div>
                            </div>
                        </div>

                        {/* Notification 2: Upsell Restaurant */}
                        <div className="bg-white border border-purple-100 p-3 rounded-xl flex items-center gap-3 shadow-sm transform hover:scale-105 transition-all cursor-default ring-1 ring-purple-50">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                <Utensils size={14} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                    <div className="text-[10px] font-bold text-navy">Suggestion Déjeuner</div>
                                    <span className="text-[9px] text-gray-400">Auto</span>
                                </div>
                                <div className="text-[9px] text-gray-500 truncate">"Voulez-vous réserver une table après le parcours ?"</div>
                            </div>
                        </div>

                        {/* Notification 3: Weather / Pro Shop */}
                         <div className="bg-white border border-taupe/10 p-3 rounded-xl flex items-center gap-3 shadow-sm transform hover:scale-105 transition-all opacity-60">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                <ShoppingBag size={14} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                    <div className="text-[10px] font-bold text-navy">Promo Pro-Shop</div>
                                    <span className="text-[9px] text-gray-400">CRM</span>
                                </div>
                                <div className="text-[9px] text-gray-500 truncate">-20% sur les balles aujourd'hui.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 4: ZEN MODE (Clean White Mode) */}
            <div className="md:col-span-4 relative rounded-[2.5rem] overflow-hidden group shadow-soft bg-white border border-taupe/10 h-[400px] flex flex-col">
                
                <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                    {/* Top Header */}
                    <div className="flex justify-between items-start">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-colors ${isZenMode ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                            {isZenMode ? <Wind size={12} className="text-emerald-600" /> : <Volume2 size={12} className="text-red-600" />}
                            {isZenMode ? "Mode Zen Actif" : "Mode Standard"}
                        </div>
                        <button 
                            onClick={() => setIsZenMode(!isZenMode)}
                            className={`w-12 h-7 rounded-full p-1 transition-all duration-500 flex items-center shadow-inner ${isZenMode ? 'bg-emerald-500' : 'bg-gray-200'}`}
                        >
                            <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-500 ${isZenMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </button>
                    </div>

                    {/* Center Visualization */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12">
                        <div className="h-16 flex items-center justify-center gap-1.5">
                             {/* Dynamic Waveform */}
                             {[...Array(15)].map((_, i) => (
                                 <div 
                                    key={i}
                                    className={`w-1.5 rounded-full transition-all duration-500 ${isZenMode ? 'bg-emerald-400' : 'bg-red-400'}`}
                                    style={{
                                        height: isZenMode ? '4px' : `${Math.random() * 50 + 10}px`,
                                        opacity: isZenMode ? 0.6 : 1,
                                        animation: isZenMode 
                                            ? `breathe 3s ease-in-out infinite ${i * 0.1}s` // Gentle breathing
                                            : `noise 0.2s ease-in-out infinite ${i * 0.05}s` // Chaotic noise
                                    }}
                                 ></div>
                             ))}
                        </div>
                        <div className="text-center mt-8">
                            <p className={`text-xs font-mono uppercase tracking-widest transition-colors duration-500 font-bold ${isZenMode ? 'text-emerald-600' : 'text-red-500'}`}>
                                {isZenMode ? "SILENCE DANS LE CLUBHOUSE" : "SONNERIES ENTRANTES"}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-navy mb-2">Silence & Sérénité</h3>
                        <p className="text-taupe text-xs leading-relaxed max-w-xs">
                            L'IA filtre les sonneries intempestives. Votre club-house retrouve son calme, votre équipe sa disponibilité.
                        </p>
                    </div>
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
        @keyframes noise {
            0%, 100% { height: 10px; }
            50% { height: 30px; }
        }
        @keyframes breathe {
            0%, 100% { height: 4px; opacity: 0.5; }
            50% { height: 8px; opacity: 1; }
        }
      `}</style>
    </section>
  );
};
