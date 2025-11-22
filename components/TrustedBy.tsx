
import React from 'react';

// ----------------------------------------------------------------------
// GUIDE D'INTÉGRATION DES LOGOS :
// 1. Créez un dossier "logos" dans le dossier "public" de votre projet.
// 2. Ajoutez-y vos fichiers images (ex: golf-gouverneur.png).
// 3. Remplacez les URLs ci-dessous par vos chemins (ex: "/logos/golf-gouverneur.png").
//
// NOTE : Les images ci-dessous sont des générateurs automatiques pour la démo.
// ----------------------------------------------------------------------

const logos = [
  { 
    name: "Golf Gouverneur", 
    // Remplacer par : "/logos/golf-gouverneur.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Golf+Gouverneur&font=playfair-display" 
  },
  { 
    name: "Golf Club de Lyon", 
    // Remplacer par : "/logos/gcl.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Golf+Club+Lyon&font=playfair-display" 
  },
  { 
    name: "LUCULLUS", 
    // Remplacer par : "/logos/lucullus.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=LUCULLUS&font=merriweather" 
  },
  { 
    name: "Golf de la Bresse", 
    // Remplacer par : "/logos/golf-bresse.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Golf+de+la+Bresse&font=lora" 
  },
  { 
    name: "Domaine de Manville", 
    // Remplacer par : "/logos/manville.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Manville&font=playfair-display" 
  },
  { 
    name: "Mérignies Golf", 
    // Remplacer par : "/logos/merignies.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Merignies&font=raleway" 
  },
  { 
    name: "Golf de Pont Royal", 
    // Remplacer par : "/logos/pont-royal.png"
    src: "https://placehold.co/200x80/FAFAF9/002351?text=Pont+Royal&font=playfair-display" 
  },
];

export const TrustedBy: React.FC = () => {
  // Duplicate list for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-taupe/10 bg-offwhite overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-xs font-bold text-taupe uppercase tracking-widest">Ils nous font confiance</p>
      </div>
      
      {/* Masque dégradé pour l'effet infini */}
      <div className="relative w-full flex overflow-hidden mask-linear-gradient">
        <div className="flex animate-scroll whitespace-nowrap items-center gap-16 md:gap-24 px-8">
           {allLogos.map((logo, idx) => (
             <div key={idx} className="flex-shrink-0 group cursor-default flex items-center justify-center">
                 {/* 
                    L'image est en niveau de gris par défaut et reprend ses couleurs au survol.
                    Assurez-vous que vos PNG sont transparents pour un meilleur rendu.
                 */}
                 <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-10 md:h-14 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                 />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
