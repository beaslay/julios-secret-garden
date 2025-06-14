
const Services = () => {
  const offers = [
    {
      title: "Rendez-vous intimiste",
      duration: "2 heures",
      price: "Sur demande",
      description: "Un moment d'exception en tête-à-tête, où le temps se suspend pour laisser place à la complicité et à l'authenticité.",
      features: ["Conversation raffinée", "Présence attentive", "Discrétion absolue"]
    },
    {
      title: "Escapade prolongée",
      duration: "3 heures",
      price: "Sur demande",
      description: "Une parenthèse plus longue pour approfondir la connaissance mutuelle et savourer chaque instant partagé.",
      features: ["Accompagnement personnalisé", "Flexibilité totale", "Moments privilégiés"]
    },
    {
      title: "Soirée d'exception",
      duration: "Soirée complète",
      price: "Sur demande",
      description: "Une soirée entière dédiée à votre bien-être, où chaque détail est pensé pour créer une expérience inoubliable.",
      features: ["Événement sur-mesure", "Accompagnement intégral", "Expérience unique"]
    }
  ];

  const chips = [
    { label: "Discrétion", description: "Confidentialité garantie" },
    { label: "Présence", description: "Attention authentique" },
    { label: "Sur-mesure", description: "Adapté à vos attentes" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-cormorant font-bold text-primary mb-8 text-center">
            Prestations
          </h1>
          
          <p className="text-xl font-inter text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Chaque rencontre est unique et conçue pour répondre à vos attentes les plus exigeantes. 
            Découvrez mes accompagnements pensés pour une clientèle raffinée.
          </p>

          {/* Chips Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {chips.map((chip, index) => (
              <div
                key={index}
                className="chip hover:bg-accent hover:text-white transition-colors cursor-pointer"
                title={chip.description}
              >
                {chip.label}
              </div>
            ))}
          </div>

          {/* Offers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offers.map((offer, index) => (
              <div key={index} className="card-offer">
                <div className="text-center">
                  <h3 className="text-2xl font-cormorant font-semibold text-primary mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-accent font-inter font-medium mb-4">
                    {offer.duration}
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-2xl font-cormorant font-bold text-primary">
                      {offer.price}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 font-inter mb-6">
                  {offer.description}
                </p>
                
                <ul className="space-y-2">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ambiance Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/9d5f788c-cda1-4309-88c8-f15e3bd7bc21.png"
                alt="Ambiance raffinée"
                className="w-full h-64 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-cormorant font-bold mb-2">
                  L'art de la rencontre
                </h3>
                <p className="text-lg font-inter opacity-90">
                  Chaque détail pensé pour créer une atmosphère d'exception
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-cormorant font-semibold text-primary mb-4">
              Réservez votre moment d'exception
            </h3>
            <p className="text-lg font-inter text-gray-600 mb-6 max-w-2xl mx-auto">
              Pour toute demande de renseignements ou réservation, 
              n'hésitez pas à me contacter en toute discrétion.
            </p>
            <a href="/contact" className="btn-primary">
              Prendre contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
