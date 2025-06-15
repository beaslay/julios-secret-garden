
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  // Check if coming from gallery access request
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('gallery') === '1') {
      setFormData(prev => ({
        ...prev,
        message: "Demande d'accès galerie privée"
      }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate secretary processing
    try {
      console.log("Message envoyé à la secrétaire:", formData);
      
      // Simulate Telegram notification
      const telegramMessage = {
        type: "new_contact",
        data: {
          pseudo: formData.pseudo,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        }
      };
      
      console.log("Notification Telegram:", telegramMessage);
      
      // Reset form
      setFormData({ pseudo: "", email: "", message: "" });
      
      toast.success("Message envoyé avec succès", {
        description: "Votre demande a été transmise. Vous recevrez une réponse sous 24h."
      });
      
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary mb-8 text-center">
            Contact
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-semibold text-primary mb-6">
                Une conversation en toute discrétion
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg font-sans text-gray-600">
                  Chaque demande est traitée avec la plus grande confidentialité. 
                  Votre message sera transmis via ma secrétaire puis acheminé 
                  de manière sécurisée.
                </p>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    Processus de contact
                  </h3>
                  <ul className="space-y-3 text-gray-600 font-sans">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span>Votre message est analysé par notre secrétaire</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span>Notification sécurisée via Telegram</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                      <span>Réponse personnalisée sous 24h</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h4 className="font-display font-semibold text-amber-800 mb-2">
                    Note importante
                  </h4>
                  <p className="text-amber-700 text-sm font-sans">
                    Mes services s'adressent exclusivement à une clientèle féminine 
                    et aux couples. Les demandes d'hommes seuls ne seront pas traitées.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Envoyez-moi un message
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="pseudo" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Pseudo *
                    </label>
                    <input
                      type="text"
                      id="pseudo"
                      name="pseudo"
                      value={formData.pseudo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors font-sans outline-2 outline-offset-2 focus-visible:outline-accent"
                      placeholder="Votre pseudo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors font-sans outline-2 outline-offset-2 focus-visible:outline-accent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Votre message sera transmis à ma secrétaire *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none font-sans outline-2 outline-offset-2 focus-visible:outline-accent"
                      placeholder="Décrivez votre demande avec délicatesse..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
