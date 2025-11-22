
import React, { useState, useEffect } from 'react';
import { Mic, Smartphone, ArrowLeftRight, LayoutDashboard, Check, Bell, Calendar, Utensils, CalendarX, CalendarCheck, RefreshCw, Edit3, UserCheck, MessageSquare, Users, CreditCard, Link, Database, TrendingUp, PieChart, Server } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // --- SCENE 1 STATE: VOICE AI SCENARIOS ---
  const [voiceScenarioIndex, setVoiceScenarioIndex] = useState(0);
  
  const voiceScenarios = [
    {
        id: 'creation',
        label: "Création",
        sub: "Nouvelle réservation",
        icon: CalendarCheck,
        userText: "Je voudrais réserver un départ pour 2 demain matin.",
        aiLogic: "Analyse disponibilités • Créneau 09h10",
        result: "Départ réservé : 09h10 ✅",
        color: "text-emerald-400",
        accent: "bg-emerald-500",
        border: "border-emerald-500/30"
    },
    {
        id: 'annulation',
        label: "Annulation",
        sub: "Libération de créneau",
        icon: CalendarX,
        userText: "Je ne pourrai pas venir jouer ce dimanche.",
        aiLogic: "Identification • Annulation",
        result: "Réservation annulée 🗑️",
        color: "text-red-400",
        accent: "bg-red-500",
        border: "border-red-500/30"
    },
    {
        id: 'modification',
        label: "Modification",
        sub: "Ajustement joueurs",
        icon: Edit3,
        userText: "Finalement, on sera 3 joueurs au lieu de 2.",
        aiLogic: "Vérif. flight • Ajout joueur",
        result: "Mise à jour : 3 Joueurs 👥",
        color: "text-blue-400",
        accent: "bg-blue-500",
        border: "border-blue-500/30"
    },
    {
        id: 'confirmation',
        label: "Confirmation",
        sub: "d'une partie",
        icon: UserCheck,
        userText: "Est-ce que mon départ de samedi est bien validé ?",
        aiLogic: "Recherche dossier • Philippe R.",
        result: "Confirmé : Samedi 14h30 👍",
        color: "text-indigo-400",
        accent: "bg-indigo-500",
        border: "border-indigo-500/30"
    },
    {
        id: 'restauration',
        label: "Restauration",
        sub: "Table au club-house",
        icon: Utensils,
        userText: "Réservez-nous une table pour 4 après la partie.",
        aiLogic: "Connexion agenda Restaurant",
        result: "Table réservée : 13h00 🍽️",
        color: "text-orange-400",
        accent: "bg-orange-500",
        border: "border-orange-500/30"
    },
    {
        id: 'noshow',
        label: "Relances no-show",
        sub: "Prévention météo",
        icon: Bell,
        userText: "Système : Risque d'orage demain",
        aiLogic: "Scénario préventif activé",
        result: "SMS de re-confirmation envoyé 📩",
        color: "text-purple-400",
        accent: "bg-purple-500",
        border: "border-purple-500/30"
    }
  ];

  // --- SCENE 2 STATE: WEBAPP SCENARIOS ---
  const [webAppScenarioIndex, setWebAppScenarioIndex] = useState(0);

  const webAppScenarios = [
    {
        id: 'notification',
        label: "Notification",
        sub: "Instantannée & Automatique",
        icon: Bell,
        userText: "SMS reçu : Votre départ de demain est pré-réservé.",
        aiLogic: "Lien unique • Pas d'app à télécharger",
        result: "Accès WebApp immédiat 📱",
        color: "text-blue-400",
        accent: "bg-blue-500",
        border: "border-blue-500/30"
    },
    {
        id: 'confirmation',
        label: "Confirmation",
        sub: "En 1 clic",
        icon: Check,
        userText: "Je confirme ma présence pour le départ de 09h10.",
        aiLogic: "Sync NetGolf • Validation statut",
        result: "Réservation Confirmée ✅",
        color: "text-emerald-400",
        accent: "bg-emerald-500",
        border: "border-emerald-500/30"
    },
     {
        id: 'invitation',
        label: "Invitation",
        sub: "Gestion des partenaires",
        icon: Users,
        userText: "J'ajoute Marc et Thomas à ma partie.",
        aiLogic: "Envoi SMS invités • Mise à jour flight",
        result: "Flight complet (3/4) 👥",
        color: "text-purple-400",
        accent: "bg-purple-500",
        border: "border-purple-500/30"
    },
    {
        id: 'paiement',
        label: "Paiement",
        sub: "Sans passage à l'accueil",
        icon: CreditCard,
        userText: "Je règle mon green-fee en ligne.",
        aiLogic: "Transaction sécurisée • Gen. QR Code",
        result: "Paiement validé 🎟️",
        color: "text-amber-400",
        accent: "bg-amber-500",
        border: "border-amber-500/30"
    }
  ];

  // --- SCENE 3 STATE: INTEGRATION SCENARIOS ---
  const [integrationScenarioIndex, setIntegrationScenarioIndex] = useState(0);
  const integrationScenarios = [
    {
        id: 'sync_planning',
        label: "Synchronisation Planning",
        sub: "Temps réel",
        icon: Calendar, 
        userText: "NetGolf : Réservation comptoir créée à 09h10.",
        aiLogic: "Websocket • < 100ms",
        result: "Agenda IA à jour ⚡️",
        color: "text-purple-400",
        accent: "bg-purple-500",
        border: "border-purple-500/30"
    },
    {
        id: 'sync_member',
        label: "Données Membres",
        sub: "Reconnaissance",
        icon: UserCheck,
        userText: "Prima : Nouveau membre 'M. Martin' ajouté.",
        aiLogic: "Indexation CRM",
        result: "Identifié par l'IA 👤",
        color: "text-blue-400",
        accent: "bg-blue-500",
        border: "border-blue-500/30"
    },
    {
        id: 'sync_price',
        label: "Mise à jour Tarifs",
        sub: "Cohérence garantie",
        icon: CreditCard,
        userText: "Logiciel : Passage en tarif 'Haute Saison'.",
        aiLogic: "Sync Catalogue",
        result: "Prix IA alignés 🏷️",
        color: "text-amber-400",
        accent: "bg-amber-500",
        border: "border-amber-500/30"
    }
  ];

  // --- SCENE 4 STATE: DASHBOARD SCENARIOS ---
  const [dashboardScenarioIndex, setDashboardScenarioIndex] = useState(0);
  const dashboardScenarios = [
    {
        id: 'kpi_roi',
        label: "Calcul ROI",
        sub: "Revenu généré",
        icon: TrendingUp,
        userText: "Donnée : 12 réservations vocales ce jour.",
        aiLogic: "Matching Green-fees",
        result: "+850€ Générés 💰",
        color: "text-emerald-400",
        accent: "bg-emerald-500",
        border: "border-emerald-500/30"
    },
    {
        id: 'kpi_missed',
        label: "Opportunités",
        sub: "Recapture",
        icon: RefreshCw,
        userText: "Donnée : 5 appels manqués (hors horaires).",
        aiLogic: "Qualification Auto",
        result: "5 Rappels programmés 📞",
        color: "text-orange-400",
        accent: "bg-orange-500",
        border: "border-orange-500/30"
    },
    {
        id: 'kpi_stats',
        label: "Analyse Motifs",
        sub: "Intelligence Business",
        icon: PieChart,
        userText: "Donnée : 60% des appels concernent la météo.",
        aiLogic: "Catégorisation NLP",
        result: "Insight : Alerte Site Web 📊",
        color: "text-blue-400",
        accent: "bg-blue-500",
        border: "border-blue-500/30"
    }
  ];

  useEffect(() => {
    if (activeTab === 0) {
        const interval = setInterval(() => {
            setVoiceScenarioIndex((prev) => (prev + 1) % voiceScenarios.length);
        }, 4000);
        return () => clearInterval(interval);
    }
    if (activeTab === 1) {
        const interval = setInterval(() => {
            setWebAppScenarioIndex((prev) => (prev + 1) % webAppScenarios.length);
        }, 4000);
        return () => clearInterval(interval);
    }
    if (activeTab === 2) {
        const interval = setInterval(() => {
            setIntegrationScenarioIndex((prev) => (prev + 1) % integrationScenarios.length);
        }, 4000);
        return () => clearInterval(interval);
    }
    if (activeTab === 3) {
        const interval = setInterval(() => {
            setDashboardScenarioIndex((prev) => (prev + 1) % dashboardScenarios.length);
        }, 4000);
        return () => clearInterval(interval);
    }
  }, [activeTab]);

  // --- MAIN TABS ---
  const features = [
    {
      id: 'voice',
      title: "Intelligence Vocale",
      subtitle: "Gestion 360°",
      icon: Mic,
      description: "L'IA gère tout le cycle : création, modification, annulation et réservation de restaurant, sans intervention humaine.",
      accent: "text-blue-600",
      bgAccent: "bg-blue-600",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 'webapp',
      title: "Interface Joueur",
      subtitle: "Expérience Sans Couture",
      icon: Smartphone,
      description: "Confirmation instantanée. Vos joueurs reçoivent une WebApp personnalisée pour gérer leur réservation sans rien installer.",
      accent: "text-emerald-600",
      bgAccent: "bg-emerald-600",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 'integration',
      title: "Synchronisation",
      subtitle: "Connexion Native",
      icon: ArrowLeftRight,
      description: "Swing Call parle le même langage que NetGolf et Prima. Disponibilités, tarifs et fiches membres synchronisés à la milliseconde.",
      accent: "text-purple-600",
      bgAccent: "bg-purple-600",
      gradient: "from-purple-600 to-fuchsia-600"
    },
    {
      id: 'dashboard',
      title: "Pilotage & Data",
      subtitle: "Vision Stratégique",
      icon: LayoutDashboard,
      description: "Un tableau de bord unifié pour suivre chaque appel, analyser les motifs de contact et mesurer votre ROI.",
      accent: "text-amber-600",
      bgAccent: "bg-amber-600",
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 9000); 
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const currentScenario = voiceScenarios[voiceScenarioIndex];
  const currentWebScenario = webAppScenarios[webAppScenarioIndex];
  const currentIntegrationScenario = integrationScenarios[integrationScenarioIndex];
  const currentDashboardScenario = dashboardScenarios[dashboardScenarioIndex];

  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden border-y border-taupe/10">
      {/* --- CLEANER BACKGROUND (White Theme) --- */}
      {/* Subtle ambient glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 text-navy">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span>L'Écosystème Complet</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-navy">
            Une technologie invisible.<br/>
            Des résultats <span className="text-blue-600">immédiats</span>.
          </h2>
          <p className="text-lg text-taupe max-w-2xl mx-auto font-light">
            Nous avons orchestré chaque point de contact pour offrir une expérience fluide, du premier appel jusqu'au départ du trou n°1.
          </p>
        </div>

        {/* --- MAIN STAGE --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: NAVIGATION CONTROLS */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => { setActiveTab(index); setIsAutoPlaying(false); }}
                className={`group relative p-6 rounded-2xl text-left transition-all duration-500 border ${
                  activeTab === index 
                  ? 'bg-navy text-white shadow-xl scale-105 border-transparent' 
                  : 'bg-transparent border-transparent hover:bg-gray-50 text-taupe hover:text-navy'
                }`}
              >
                {/* Progress Bar (Active Only) */}
                {activeTab === index && isAutoPlaying && (
                   <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full overflow-hidden rounded-b-2xl">
                      <div className={`h-full bg-white w-full origin-left animate-[progress_9s_linear]`}></div>
                   </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeTab === index ? `bg-white/20 text-white` : 'bg-gray-100 text-taupe group-hover:bg-white group-hover:shadow-md group-hover:text-navy'
                    }`}>
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${activeTab === index ? 'text-white/60' : 'text-taupe/60'}`}>
                        0{index + 1} — {feature.subtitle}
                      </span>
                      <h3 className={`text-lg font-display font-bold transition-colors ${activeTab === index ? 'text-white' : 'text-navy'}`}>
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  {activeTab === index && <div className={`w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></div>}
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${activeTab === index ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                   <p className="text-sm text-white/70 leading-relaxed pl-[56px]">
                      {feature.description}
                   </p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: VISUAL THEATER (Dark Mode Window into Digital World) */}
          <div className="lg:col-span-8 h-[500px] lg:h-[650px] relative perspective-1000">
            <div className="absolute inset-0 bg-[#050b14] rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-black/5 flex flex-col isolate">
               {/* Stage Lighting */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
               
               {/* --- SCENE 1: VOICE AI (INTELLIGENT CONVERSATION) --- */}
               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${activeTab === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="relative w-full max-w-md px-6 flex flex-col items-center gap-8">
                      
                      {/* Title for the Scenario */}
                      <div className="text-center animate-in fade-in slide-in-from-top-4 duration-500">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Intelligence Conversationnelle</span>
                          <div className="flex flex-col items-center">
                            <h3 key={currentScenario.label} className="text-2xl font-display font-bold text-white animate-in fade-in zoom-in-95 duration-300">{currentScenario.label}</h3>
                            <span key={currentScenario.sub} className="text-xs text-white/50 animate-in fade-in slide-in-from-top-1 duration-300">{currentScenario.sub}</span>
                          </div>
                      </div>

                      {/* Interaction Card */}
                      <div className="w-full relative">
                          {/* Connecting Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/5 via-white/10 to-white/5"></div>

                          <div className="space-y-6 relative">
                              
                              {/* 1. USER INPUT */}
                              <div key={`user-${voiceScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500">
                                  <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center shrink-0 z-10 relative shadow-lg">
                                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#1e293b]">
                                          <Mic size={10} className="text-black"/>
                                      </div>
                                      <span className="text-xl">👤</span>
                                  </div>
                                  <div className="bg-[#1e293b]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-sm mt-2 text-sm font-medium text-white/90 shadow-lg flex-1">
                                      <div className="text-[9px] text-white/30 uppercase font-bold mb-1">Joueur</div>
                                      "{currentScenario.userText}"
                                  </div>
                              </div>

                              {/* 2. AI PROCESSING (Animated) */}
                              <div key={`logic-${voiceScenarioIndex}`} className="flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150">
                                   <div className="w-16 flex justify-center z-10">
                                      <div className="relative w-4 h-4">
                                         <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                                         <div className="absolute inset-0 bg-blue-400 rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                                       <RefreshCw size={10} className="animate-spin"/>
                                       {currentScenario.aiLogic}
                                   </div>
                              </div>

                              {/* 3. ACTION RESULT */}
                              <div key={`result-${voiceScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300">
                                  <div className={`w-16 h-16 rounded-2xl ${currentScenario.accent} bg-opacity-10 border ${currentScenario.border} flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                      <currentScenario.icon size={24} className={currentScenario.color} />
                                  </div>
                                  <div className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] border ${currentScenario.border} p-5 rounded-2xl rounded-bl-sm mt-1 shadow-xl w-full group relative overflow-hidden`}>
                                      <div className={`absolute top-0 left-0 w-1 h-full ${currentScenario.accent}`}></div>
                                      <div className="text-[9px] text-white/40 uppercase font-bold mb-1 tracking-wider flex justify-between">
                                          <span>Action Swing Call</span>
                                          <span className={currentScenario.color}>Succès</span>
                                      </div>
                                      <div className="text-lg font-bold text-white font-display">
                                          {currentScenario.result}
                                      </div>
                                      {/* Shine Effect */}
                                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      {/* Scenario Navigation Dots */}
                      <div className="flex gap-2 mt-4">
                          {voiceScenarios.map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === voiceScenarioIndex ? `w-8 ${currentScenario.accent}` : 'w-2 bg-white/10'}`}
                              ></div>
                          ))}
                      </div>
                  </div>
               </div>

               {/* --- SCENE 2: WEBAPP (New Animation Style) --- */}
               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${activeTab === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="relative w-full max-w-md px-6 flex flex-col items-center gap-8">
                      
                      {/* Title for the Scenario */}
                      <div className="text-center animate-in fade-in slide-in-from-top-4 duration-500">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Expérience Joueur Digitale</span>
                          <div className="flex flex-col items-center">
                            <h3 key={currentWebScenario.label} className="text-2xl font-display font-bold text-white animate-in fade-in zoom-in-95 duration-300">{currentWebScenario.label}</h3>
                            <span key={currentWebScenario.sub} className="text-xs text-white/50 animate-in fade-in slide-in-from-top-1 duration-300">{currentWebScenario.sub}</span>
                          </div>
                      </div>

                      {/* Interaction Card */}
                      <div className="w-full relative">
                          {/* Connecting Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/5 via-white/10 to-white/5"></div>

                          <div className="space-y-6 relative">
                              
                              {/* 1. USER ACTION / SMS */}
                              <div key={`web-user-${webAppScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500">
                                  <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center shrink-0 z-10 relative shadow-lg">
                                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#1e293b]">
                                          <Smartphone size={10} className="text-black"/>
                                      </div>
                                      <span className="text-xl">📱</span>
                                  </div>
                                  <div className="bg-[#1e293b]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-sm mt-2 text-sm font-medium text-white/90 shadow-lg flex-1">
                                      <div className="text-[9px] text-white/30 uppercase font-bold mb-1">Joueur (SMS/Mobile)</div>
                                      "{currentWebScenario.userText}"
                                  </div>
                              </div>

                              {/* 2. SYSTEM LOGIC (Animated) */}
                              <div key={`web-logic-${webAppScenarioIndex}`} className="flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150">
                                   <div className="w-16 flex justify-center z-10">
                                      <div className="relative w-4 h-4">
                                         <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                                         <div className="absolute inset-0 bg-emerald-400 rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                       <Link size={10} className="animate-pulse"/>
                                       {currentWebScenario.aiLogic}
                                   </div>
                              </div>

                              {/* 3. WEBAPP RESULT */}
                              <div key={`web-result-${webAppScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300">
                                  <div className={`w-16 h-16 rounded-2xl ${currentWebScenario.accent} bg-opacity-10 border ${currentWebScenario.border} flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                      <currentWebScenario.icon size={24} className={currentWebScenario.color} />
                                  </div>
                                  <div className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] border ${currentWebScenario.border} p-5 rounded-2xl rounded-bl-sm mt-1 shadow-xl w-full group relative overflow-hidden`}>
                                      <div className={`absolute top-0 left-0 w-1 h-full ${currentWebScenario.accent}`}></div>
                                      <div className="text-[9px] text-white/40 uppercase font-bold mb-1 tracking-wider flex justify-between">
                                          <span>WebApp Swing Call</span>
                                          <span className={currentWebScenario.color}>Validé</span>
                                      </div>
                                      <div className="text-lg font-bold text-white font-display">
                                          {currentWebScenario.result}
                                      </div>
                                      {/* Shine Effect */}
                                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      {/* Scenario Navigation Dots */}
                      <div className="flex gap-2 mt-4">
                          {webAppScenarios.map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === webAppScenarioIndex ? `w-8 ${currentWebScenario.accent}` : 'w-2 bg-white/10'}`}
                              ></div>
                          ))}
                      </div>
                  </div>
               </div>

               {/* --- SCENE 3: INTEGRATION (New Animation Style) --- */}
               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${activeTab === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="relative w-full max-w-md px-6 flex flex-col items-center gap-8">
                      
                      {/* Title */}
                      <div className="text-center animate-in fade-in slide-in-from-top-4 duration-500">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Pont Technologique</span>
                          <div className="flex flex-col items-center">
                            <h3 key={currentIntegrationScenario.label} className="text-2xl font-display font-bold text-white animate-in fade-in zoom-in-95 duration-300">{currentIntegrationScenario.label}</h3>
                            <span key={currentIntegrationScenario.sub} className="text-xs text-white/50 animate-in fade-in slide-in-from-top-1 duration-300">{currentIntegrationScenario.sub}</span>
                          </div>
                      </div>

                      {/* Interaction Card */}
                      <div className="w-full relative">
                          {/* Connecting Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/5 via-white/10 to-white/5"></div>

                          <div className="space-y-6 relative">
                              
                              {/* 1. SOURCE INPUT */}
                              <div key={`integ-user-${integrationScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500">
                                  <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center shrink-0 z-10 relative shadow-lg">
                                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#1e293b]">
                                          <Server size={10} className="text-black"/>
                                      </div>
                                      <span className="text-xl">💾</span>
                                  </div>
                                  <div className="bg-[#1e293b]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-sm mt-2 text-sm font-medium text-white/90 shadow-lg flex-1">
                                      <div className="text-[9px] text-white/30 uppercase font-bold mb-1">Logiciel Métier (NetGolf/Prima)</div>
                                      "{currentIntegrationScenario.userText}"
                                  </div>
                              </div>

                              {/* 2. SYNC LOGIC (Animated) */}
                              <div key={`integ-logic-${integrationScenarioIndex}`} className="flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150">
                                   <div className="w-16 flex justify-center z-10">
                                      <div className="relative w-4 h-4">
                                         <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                                         <div className="absolute inset-0 bg-purple-400 rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider flex items-center gap-2 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                                       <ArrowLeftRight size={10} className="animate-spin"/>
                                       {currentIntegrationScenario.aiLogic}
                                   </div>
                              </div>

                              {/* 3. SYNC RESULT */}
                              <div key={`integ-result-${integrationScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300">
                                  <div className={`w-16 h-16 rounded-2xl ${currentIntegrationScenario.accent} bg-opacity-10 border ${currentIntegrationScenario.border} flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                      <currentIntegrationScenario.icon size={24} className={currentIntegrationScenario.color} />
                                  </div>
                                  <div className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] border ${currentIntegrationScenario.border} p-5 rounded-2xl rounded-bl-sm mt-1 shadow-xl w-full group relative overflow-hidden`}>
                                      <div className={`absolute top-0 left-0 w-1 h-full ${currentIntegrationScenario.accent}`}></div>
                                      <div className="text-[9px] text-white/40 uppercase font-bold mb-1 tracking-wider flex justify-between">
                                          <span>État Système</span>
                                          <span className={currentIntegrationScenario.color}>Synchronisé</span>
                                      </div>
                                      <div className="text-lg font-bold text-white font-display">
                                          {currentIntegrationScenario.result}
                                      </div>
                                      {/* Shine Effect */}
                                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex gap-2 mt-4">
                          {integrationScenarios.map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === integrationScenarioIndex ? `w-8 ${currentIntegrationScenario.accent}` : 'w-2 bg-white/10'}`}
                              ></div>
                          ))}
                      </div>
                  </div>
               </div>

               {/* --- SCENE 4: DASHBOARD (New Animation Style) --- */}
               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${activeTab === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                   <div className="relative w-full max-w-md px-6 flex flex-col items-center gap-8">
                      
                      {/* Title */}
                      <div className="text-center animate-in fade-in slide-in-from-top-4 duration-500">
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">Pilotage Stratégique</span>
                          <div className="flex flex-col items-center">
                            <h3 key={currentDashboardScenario.label} className="text-2xl font-display font-bold text-white animate-in fade-in zoom-in-95 duration-300">{currentDashboardScenario.label}</h3>
                            <span key={currentDashboardScenario.sub} className="text-xs text-white/50 animate-in fade-in slide-in-from-top-1 duration-300">{currentDashboardScenario.sub}</span>
                          </div>
                      </div>

                      {/* Interaction Card */}
                      <div className="w-full relative">
                          {/* Connecting Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/5 via-white/10 to-white/5"></div>

                          <div className="space-y-6 relative">
                              
                              {/* 1. DATA INPUT */}
                              <div key={`dash-user-${dashboardScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500">
                                  <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center shrink-0 z-10 relative shadow-lg">
                                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#1e293b]">
                                          <Database size={10} className="text-black"/>
                                      </div>
                                      <span className="text-xl">📊</span>
                                  </div>
                                  <div className="bg-[#1e293b]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-sm mt-2 text-sm font-medium text-white/90 shadow-lg flex-1">
                                      <div className="text-[9px] text-white/30 uppercase font-bold mb-1">Flux de Données</div>
                                      "{currentDashboardScenario.userText}"
                                  </div>
                              </div>

                              {/* 2. ANALYSIS LOGIC (Animated) */}
                              <div key={`dash-logic-${dashboardScenarioIndex}`} className="flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150">
                                   <div className="w-16 flex justify-center z-10">
                                      <div className="relative w-4 h-4">
                                         <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                                         <div className="absolute inset-0 bg-amber-400 rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                                       <LayoutDashboard size={10} className="animate-pulse"/>
                                       {currentDashboardScenario.aiLogic}
                                   </div>
                              </div>

                              {/* 3. DASHBOARD RESULT */}
                              <div key={`dash-result-${dashboardScenarioIndex}`} className="flex items-start gap-4 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300">
                                  <div className={`w-16 h-16 rounded-2xl ${currentDashboardScenario.accent} bg-opacity-10 border ${currentDashboardScenario.border} flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                      <currentDashboardScenario.icon size={24} className={currentDashboardScenario.color} />
                                  </div>
                                  <div className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] border ${currentDashboardScenario.border} p-5 rounded-2xl rounded-bl-sm mt-1 shadow-xl w-full group relative overflow-hidden`}>
                                      <div className={`absolute top-0 left-0 w-1 h-full ${currentDashboardScenario.accent}`}></div>
                                      <div className="text-[9px] text-white/40 uppercase font-bold mb-1 tracking-wider flex justify-between">
                                          <span>Insight Business</span>
                                          <span className={currentDashboardScenario.color}>Calculé</span>
                                      </div>
                                      <div className="text-lg font-bold text-white font-display">
                                          {currentDashboardScenario.result}
                                      </div>
                                      {/* Shine Effect */}
                                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex gap-2 mt-4">
                          {dashboardScenarios.map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 rounded-full transition-all duration-500 ${i === dashboardScenarioIndex ? `w-8 ${currentDashboardScenario.accent}` : 'w-2 bg-white/10'}`}
                              ></div>
                          ))}
                      </div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes progress {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
        }
        @keyframes shuttle {
            0% { left: -20%; opacity: 0; }
            50% { opacity: 1; }
            100% { left: 120%; opacity: 0; }
        }
        @keyframes slide-down {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};
