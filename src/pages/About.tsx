
import { useState, useEffect } from "react";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0]);
    }, 300);

    const timers = [1, 2, 3].map((index) =>
      setTimeout(() => {
        setVisibleSections(prev => [...prev, index]);
      }, 300 + (index * 800))
    );

    return () => {
      clearTimeout(timer);
      timers.forEach(clearTimeout);
    };
  }, []);

  const sections = [
    {
      title: "À demi-mot",
      content: "Il y a des rencontres qui se dessinent avant même d'avoir lieu. Des complicités qui naissent dans le non-dit, dans ce langage subtil que seules les âmes raffinées maîtrisent. Je cultive cet art délicat où chaque geste, chaque regard porte en lui une promesse d'authenticité."
    },
    {
      title: "Au-delà des apparences",
      content: "Derrière l'élégance des formes se cache une intelligence sensible, nourrie par la curiosité du monde et des êtres. Mes conversations s'enrichissent de littérature, d'art, de philosophie - ces territoires où l'esprit trouve sa véritable dimension. Car la beauté réside autant dans la profondeur des échanges que dans l'harmonie des silences."
    },
    {
      title: "En vérité",
      content: "Je n'accompagne que celles et ceux qui comprennent que le luxe véritable réside dans l'attention portée aux détails, dans cette capacité à créer un écrin temporel où chaque instant devient précieux. Mes rendez-vous ne sont pas des prestations, mais des parenthèses enchantées dans l'ordinaire de la vie."
    },
    {
      title: "Le chemin",
      content: "Choisir de faire appel à mes services, c'est choisir l'exigence de la qualité, la garantie de la discrétion et l'assurance d'une rencontre qui marquera votre mémoire. Car au-delà de ma présence, c'est un art de vivre que je partage avec vous."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-cormorant font-bold text-primary mb-16 text-center">
            À propos
          </h1>
          
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  visibleSections.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                  <h2 className="text-3xl lg:text-4xl font-cormorant font-semibold text-primary mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg lg:text-xl font-inter text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Une rencontre vous attend
              </h3>
              <p className="text-lg font-inter text-gray-600 mb-6">
                Pour une première prise de contact en toute discrétion
              </p>
              <a href="/contact" className="btn-primary">
                Prendre contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
