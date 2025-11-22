import React from 'react';

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-offwhite relative border-t border-taupe/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                <h3 className="text-3xl font-bold font-display text-navy mb-4">Nativement compatible.</h3>
                <p className="text-taupe text-sm leading-relaxed max-w-md">
                    Swing Call se connecte directement à vos outils existants. Aucune double saisie, tout est synchronisé en temps réel.
                </p>
            </div>
            <button className="hidden md:block px-6 py-2 rounded-full border border-taupe/20 text-xs font-bold text-taupe hover:bg-white transition-colors">
                Voir toutes les intégrations
            </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Integration 1 */}
            <div className="group flex items-center gap-6 p-8 bg-white rounded-3xl border border-taupe/10 hover:shadow-soft transition-all duration-300">
                <div className="w-20 h-20 bg-offwhite rounded-2xl shadow-inner flex items-center justify-center font-bold text-blue-600 text-2xl border border-taupe/10 group-hover:scale-105 transition-transform">
                    NG
                </div>
                <div>
                    <h4 className="text-xl font-bold text-navy mb-2 font-display">NetGolf</h4>
                    <p className="text-xs text-taupe mb-3">Synchronisation bidirectionnelle des départs et des fiches membres.</p>
                    <a href="#" className="text-xs text-navy font-bold hover:underline">Configuration en 1 clic →</a>
                </div>
            </div>

             {/* Integration 2 */}
             <div className="group flex items-center gap-6 p-8 bg-white rounded-3xl border border-taupe/10 hover:shadow-soft transition-all duration-300">
                <div className="w-20 h-20 bg-offwhite rounded-2xl shadow-inner flex items-center justify-center font-bold text-green-600 text-xl leading-tight text-center border border-taupe/10 group-hover:scale-105 transition-transform">
                    Prima<br/>Golf
                </div>
                <div>
                    <h4 className="text-xl font-bold text-navy mb-2 font-display">PrimaGolf</h4>
                    <p className="text-xs text-taupe mb-3">Gestion des réservations en temps réel et accès base de données.</p>
                    <a href="#" className="text-xs text-navy font-bold hover:underline">Configuration en 1 clic →</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};