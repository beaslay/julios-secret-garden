
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { motion } from 'framer-motion';
import PortfolioGrid from '@/components/PortfolioGrid';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
  const navigate = useNavigate();

  // Configuration des galeries
  const TOTAL_SLOTS = {
    public: 5,
    private: 8
  };

  const publicImages = [
    '/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png',
    '/lovable-uploads/9d5f788c-cda1-4309-88c8-f15e3bd7bc21.png',
  ];

  // Calcul des placeholders
  const publicPlaceholders = Math.max(0, TOTAL_SLOTS.public - publicImages.length);
  const privatePlaceholders = TOTAL_SLOTS.private; // Toutes privées sont des placeholders

  const handlePrivateGalleryAccess = () => {
    navigate('/contact?gallery=1');
  };

  const renderPlaceholder = (index: number) => (
    <motion.div
      key={`placeholder-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      aria-label="Emplacement photo à venir"
      className="aspect-[3/4] rounded-lg border border-neutral-700 bg-neutral-900/40
                 flex items-center justify-center text-neutral-400 italic text-sm
                 hover:scale-105 transition-transform duration-300"
    >
      À venir
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display text-primary mb-4">
            Galerie
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de nos créations et réalisations
          </p>
        </motion.div>

        {/* Galerie publique avec PortfolioGrid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display text-primary mb-8 text-center">
            Galerie Publique
          </h2>
          
          <div className="mb-8">
            <PortfolioGrid />
          </div>
        </motion.section>

        {/* Galerie privée */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display text-primary mb-8 text-center">
            Galerie Privée
          </h2>
          
          {/* Grille avec placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: privatePlaceholders }, (_, index) => (
              <Card key={`private-placeholder-${index}`} className="overflow-hidden">
                <CardContent className="p-0 h-64 flex items-center justify-center">
                  {renderPlaceholder(index)}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Accès protégé */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Section privée – accès sur demande uniquement
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="btn-primary focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                  aria-label="Demander l'accès à la galerie privée"
                >
                  <Key className="w-4 h-4 mr-2 animate-pulse" />
                  Demander l'accès
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Section Privée</DialogTitle>
                  <DialogDescription className="text-center">
                    Accès sur demande uniquement
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Key 
                      className="w-12 h-12 animate-pulse text-accent mb-4 cursor-pointer transition-transform"
                      onClick={handlePrivateGalleryAccess}
                      aria-label="Accéder à la demande de galerie privée"
                    />
                  </motion.div>
                  <p className="text-center text-muted-foreground mb-4">
                    Cette section contient du contenu exclusif accessible uniquement sur demande.
                  </p>
                  <Button 
                    onClick={handlePrivateGalleryAccess}
                    className="btn-primary focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                    aria-label="Faire une demande d'accès à la galerie privée"
                  >
                    Faire une demande d'accès
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Gallery;
