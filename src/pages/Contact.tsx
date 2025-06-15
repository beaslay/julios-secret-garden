
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères")
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const location = useLocation();
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  // Check if coming from gallery access request
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('gallery') === '1') {
      setValue('message', 'Demande d\'accès galerie privée');
    }
  }, [location, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Message envoyé à la secrétaire:", data);
      
      // Simulate Telegram notification
      const telegramMessage = {
        type: "new_contact",
        data: {
          ...data,
          timestamp: new Date().toISOString()
        }
      };
      
      console.log("Notification Telegram:", telegramMessage);
      
      toast.success("Message envoyé avec succès", {
        description: "Votre demande a été transmise. Vous recevrez une réponse sous 24h."
      });
      
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast.error("Erreur lors de l'envoi du message");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-display font-bold text-primary mb-8 text-center"
          >
            Contact
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                  Envoyez-moi un message
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors font-sans focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                      placeholder="Votre nom"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors font-sans focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                      placeholder="votre@email.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-medium text-gray-700 mb-2">
                      Votre message sera transmis à ma secrétaire *
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none font-sans focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                      placeholder="Décrivez votre demande avec délicatesse..."
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                    aria-label={isSubmitting ? "Envoi en cours du message" : "Envoyer le message"}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
