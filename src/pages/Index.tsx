
import { Link } from "react-router-dom";
import { Sparkles, User, Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-end" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png"
            alt="Julio - Portrait professionnel"
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8 lg:px-16 pb-16">
          <div className="max-w-2xl text-primary-foreground">
            <h1
              className={`
                font-cormorant font-bold mb-6 animate-fade-in
                text-4xl sm:text-6xl md:text-7xl lg:text-8xl
              `}
              style={{
                fontSize: "clamp(2rem, 6vw, 5.5rem)",
                lineHeight: 1.1,
              }}
            >
              L'élégance à votre service
            </h1>
            <p className="text-xl lg:text-2xl font-inter mb-8 opacity-90 animate-fade-in" style={{ color: "#fff" }}>
              Accompagnement discret et raffiné pour une clientèle exigeante
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link
                to="/about"
                className="btn-primary outline-2 outline-offset-2 focus-visible:outline-accent"
              >
                Découvrir
              </Link>
              <Link
                to="/contact"
                className="btn-primary bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary outline-2 outline-offset-2 focus-visible:outline-accent"
              >
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
            <h2 className="text-3xl lg:text-4xl font-cormorant font-bold mb-8 text-primary">
              Une présence qui fait la différence
            </h2>
            <p className="text-lg lg:text-xl font-inter text-gray-700 leading-relaxed mb-12">
              Dans un monde où l'authenticité se fait rare, je cultive l'art de la présence véritable. 
              Chaque moment partagé est une invitation à l'élégance, au raffinement et à la discrétion absolue.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Discrétion */}
              <div className="text-center" aria-label="Discrétion">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent">
                  <Sparkles
                    size={32}
                    strokeWidth={1.5}
                    color="#fff"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-cormorant font-semibold mb-2 text-primary">
                  Discrétion
                </h3>
                <p className="text-gray-700">
                  Confidentialité absolue et respect de votre intimité
                </p>
              </div>
              {/* Présence */}
              <div className="text-center" aria-label="Présence">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent">
                  <User
                    size={32}
                    strokeWidth={1.5}
                    color="#fff"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-cormorant font-semibold mb-2 text-primary">
                  Présence
                </h3>
                <p className="text-gray-700">
                  Une compagnie raffinée et authentique
                </p>
              </div>
              {/* Sur-mesure */}
              <div className="text-center" aria-label="Sur-mesure">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent">
                  <Gem
                    size={32}
                    strokeWidth={1.5}
                    color="#fff"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-cormorant font-semibold mb-2 text-primary">
                  Sur-mesure
                </h3>
                <p className="text-gray-700">
                  Chaque rencontre adaptée à vos attentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
