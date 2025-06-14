
const Legal = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-cormorant font-bold text-primary mb-12 text-center">
            Mentions légales
          </h1>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Identité
              </h2>
              <div className="text-gray-600 space-y-2">
                <p><strong>Nom :</strong> Julio</p>
                <p><strong>Activité :</strong> Accompagnement personnel</p>
                <p><strong>SIRET :</strong> [À renseigner]</p>
                <p><strong>Adresse :</strong> [À renseigner]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Hébergeur
              </h2>
              <div className="text-gray-600 space-y-2">
                <p><strong>Hébergeur :</strong> Lovable.dev</p>
                <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-gray-600">
                L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, etc.) 
                sont protégés par les droits d'auteur et appartiennent exclusivement à Julio ou à leurs 
                auteurs respectifs. Toute reproduction, représentation, modification, publication, 
                transmission ou dénaturation, totale ou partielle, est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-gray-600">
                Les informations contenues sur ce site sont données à titre indicatif et sont 
                susceptibles d'évoluer. Julio ne pourra être tenu responsable des dommages directs 
                et indirects causés au matériel de l'utilisateur, lors de l'accès au site internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Protection des données personnelles (RGPD)
              </h2>
              <div className="text-gray-600 space-y-4">
                <h3 className="font-semibold">Collecte des données</h3>
                <p>
                  Les données personnelles collectées via le formulaire de contact (pseudo, email, message) 
                  sont utilisées uniquement dans le cadre de la prise de contact et de la prestation de service.
                </p>
                
                <h3 className="font-semibold">Durée de conservation</h3>
                <p>
                  Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.
                </p>
                
                <h3 className="font-semibold">Droits des utilisateurs</h3>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression 
                  et d'opposition au traitement de vos données personnelles. Pour exercer ces droits, 
                  contactez-nous via le formulaire de contact.
                </p>
                
                <h3 className="font-semibold">Cookies</h3>
                <p>
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                  Aucun cookie de traçage publicitaire n'est utilisé.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Juridiction
              </h2>
              <p className="text-gray-600">
                En cas de litige, les tribunaux français seront seuls compétents. 
                Le droit français s'applique au présent site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                Conditions générales
              </h2>
              <div className="text-gray-600 space-y-4">
                <h3 className="font-semibold">Nature des services</h3>
                <p>
                  Les services proposés concernent exclusivement l'accompagnement personnel et social 
                  dans le respect de la législation en vigueur.
                </p>
                
                <h3 className="font-semibold">Clientèle</h3>
                <p>
                  Les services s'adressent exclusivement à une clientèle féminine majeure et aux couples. 
                  Toute demande émanant d'hommes seuls sera refusée.
                </p>
                
                <h3 className="font-semibold">Confidentialité</h3>
                <p>
                  La discrétion absolue est garantie concernant l'identité des clients et la nature 
                  des prestations. Aucune information ne sera divulguée à des tiers.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
