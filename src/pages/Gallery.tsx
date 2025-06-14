
import { useState } from "react";
import { Eye, Lock } from "lucide-react";
import { toast } from "sonner";

const Gallery = () => {
  const [accessToken, setAccessToken] = useState("");
  const [tokenExpiry, setTokenExpiry] = useState<Date | null>(null);
  const [showPrivateGallery, setShowPrivateGallery] = useState(false);

  // Placeholder images for public gallery
  const publicImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop"
  ];

  // Placeholder images for private gallery
  const privateImages = [
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553191489-89f62a3b8c21?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553514029-1318c9127859?w=400&h=600&fit=crop"
  ];

  const handleTokenRequest = () => {
    // Simulate token generation and Telegram notification
    const token = Math.random().toString(36).substring(2, 15);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    
    setAccessToken(token);
    setTokenExpiry(expiry);
    
    toast.success("Token généré avec succès", {
      description: "Vérifiez votre Telegram pour valider l'accès. Le token expire dans 10 minutes."
    });
    
    // Simulate Telegram webhook
    console.log("Telegram webhook:", {
      message: "Nouvelle demande d'accès galerie privée",
      token: token,
      expiry: expiry.toISOString()
    });
  };

  const handleTokenValidation = () => {
    if (!accessToken) {
      toast.error("Aucun token généré");
      return;
    }
    
    if (tokenExpiry && new Date() > tokenExpiry) {
      toast.error("Token expiré. Veuillez en générer un nouveau.");
      setAccessToken("");
      setTokenExpiry(null);
      return;
    }
    
    // Simulate token validation
    setShowPrivateGallery(true);
    toast.success("Accès autorisé à la galerie privée");
  };

  const isTokenValid = accessToken && tokenExpiry && new Date() < tokenExpiry;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-cormorant font-bold text-primary mb-8 text-center">
            Galerie
          </h1>

          {/* Public Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-cormorant font-semibold text-primary mb-8 flex items-center">
              <Eye className="mr-3" size={32} />
              Galerie publique
            </h2>
            
            <div className="slider-gallery pb-4">
              {publicImages.map((image, index) => (
                <div key={index} className="flex-none w-80 h-96 snap-start">
                  <img
                    src={image}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Private Gallery Access */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-cormorant font-semibold text-primary mb-6 flex items-center">
                <Lock className="mr-3" size={32} />
                Galerie privée
              </h2>
              
              <p className="text-lg font-inter text-gray-600 mb-6">
                Accès exclusif pour une clientèle privilégiée. 
                Un token de sécurité sera généré et validé via Telegram.
              </p>
              
              <div className="space-y-4">
                {!accessToken ? (
                  <button
                    onClick={handleTokenRequest}
                    className="btn-primary"
                  >
                    Demander l'accès
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">Token généré :</p>
                      <p className="token-badge">{accessToken}</p>
                      {tokenExpiry && (
                        <p className="text-xs text-gray-500 mt-2">
                          Expire le : {tokenExpiry.toLocaleString()}
                        </p>
                      )}
                    </div>
                    
                    {isTokenValid && (
                      <button
                        onClick={handleTokenValidation}
                        className="btn-primary"
                      >
                        Valider l'accès
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Private Gallery Content */}
          {showPrivateGallery && (
            <section>
              <h3 className="text-2xl font-cormorant font-semibold text-accent mb-6">
                Contenu exclusif
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {privateImages.map((image, index) => (
                  <div key={index} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={image}
                      alt={`Photo privée ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
