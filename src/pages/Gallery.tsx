
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const publicImages = [
    '/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png',
    '/lovable-uploads/9d5f788c-cda1-4309-88c8-f15e3bd7bc21.png',
  ];

  const handlePrivateGalleryAccess = () => {
    navigate('/contact?gallery=1');
  };

  return (
    <div className="min-h-screen bg-secondary pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-primary mb-4">
            Galerie
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de nos créations et réalisations
          </p>
        </div>

        {/* Galerie publique */}
        <section className="mb-16">
          <h2 className="text-2xl font-display text-primary mb-8 text-center">
            Galerie Publique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={image}
                    alt={`Création ${index + 1}`}
                    className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage(image)}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Galerie privée */}
        <section className="mb-16">
          <h2 className="text-2xl font-display text-primary mb-8 text-center">
            Galerie Privée
          </h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Accès sur demande uniquement
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary">
                  Demande d'accès
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center justify-center p-6">
                  <Key 
                    className="w-12 h-12 animate-ping-slow text-accent mb-4 cursor-pointer hover:scale-110 transition-transform"
                    onClick={handlePrivateGalleryAccess}
                    aria-label="Accéder à la demande de galerie privée"
                  />
                  <p className="text-center text-muted-foreground">
                    Cliquez sur la clé pour faire votre demande d'accès
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </div>

      {/* Modal simple pour l'image sélectionnée */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70"
              size="sm"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
