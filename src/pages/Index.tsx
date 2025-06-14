
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png"
            alt="Julio - Portrait professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 lg:px-16">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl lg:text-7xl font-cormorant font-bold mb-6 animate-fade-in">
              L'élégance à votre service
            </h1>
            <p className="text-xl lg:text-2xl font-inter mb-8 opacity-90 animate-fade-in">
              Accompagnement discret et raffiné pour une clientèle exigeante
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/about" className="btn-primary">
                Découvrir
              </Link>
              <Link to="/contact" className="btn-primary bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-cormorant font-bold mb-8 text-primary">
              Une présence qui fait la différence
            </h2>
            <p className="text-lg lg:text-xl font-inter text-gray-600 leading-relaxed mb-12">
              Dans un monde où l'authenticité se fait rare, je cultive l'art de la présence véritable. 
              Chaque moment partagé est une invitation à l'élégance, au raffinement et à la discrétion absolue.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-cormorant font-semibold mb-2">Discrétion</h3>
                <p className="text-gray-600">Confidentialité absolue et respect de votre intimité</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎭</span>
                </div>
                <h3 className="text-xl font-cormorant font-semibold mb-2">Présence</h3>
                <p className="text-gray-600">Une compagnie raffinée et authentique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h3 className="text-xl font-cormorant font-semibold mb-2">Sur-mesure</h3>
                <p className="text-gray-600">Chaque rencontre adaptée à vos attentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
