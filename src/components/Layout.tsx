
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, Mail, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/gallery", label: "Galerie" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServicesClick = () => {
    navigate("/services");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-secondary overflow-auto">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-48 bg-[#1E1E1E]/90 text-primary-foreground flex-col z-50">
        <div className="p-8">
          <Link 
            to="/" 
            className="text-[28px] font-display font-bold tracking-wide text-white select-none focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
            aria-label="Julio - Retour à l'accueil"
          >
            Julio
          </Link>
        </div>
        
        <div className="flex-1 px-8">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 text-lg font-sans transition-colors focus-visible:outline-accent focus-visible:outline-2 outline-offset-2 ${
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Icônes animées */}
          <div className="mt-8 space-y-4">
            <button
              onClick={handleServicesClick}
              className="flex items-center justify-center w-full py-3 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
              aria-label="Prestations"
            >
              <Briefcase className="w-6 h-6 hover:animate-pulse hover:scale-110 transition text-primary-foreground hover:text-accent" />
            </button>
            
            <button
              onClick={handleContactClick}
              className="flex items-center justify-center w-full py-3 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
              aria-label="Contact"
            >
              <Mail className="w-6 h-6 hover:animate-pulse hover:scale-110 transition text-primary-foreground hover:text-accent" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden bg-[#1E1E1E]/90 text-primary-foreground p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 h-16">
        <Link 
          to="/" 
          className="text-xl font-display font-bold tracking-wide text-white select-none focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
          aria-label="Julio - Retour à l'accueil"
        >
          Julio
        </Link>
        
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button 
              aria-label="Ouvrir le menu" 
              aria-expanded={isMenuOpen}
              className="lg:hidden p-2 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-3/4 bg-neutral-900 text-white">
            <div className="p-4">
              <Link 
                to="/" 
                className="text-xl font-display font-bold text-white select-none mb-8 block focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                aria-label="Julio - Retour à l'accueil"
                onClick={handleNavClick}
              >
                Julio
              </Link>
              
              <nav>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className={`block py-3 text-lg font-sans transition-colors focus-visible:outline-accent focus-visible:outline-2 outline-offset-2 ${
                          location.pathname === item.path
                            ? "text-accent"
                            : "text-white hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 space-y-4">
                  <button
                    onClick={() => {
                      handleServicesClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full py-3 text-white hover:text-accent transition-colors focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                    aria-label="Prestations"
                  >
                    <Briefcase className="w-6 h-6 mr-3" />
                    <span>Prestations</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      handleContactClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full py-3 text-white hover:text-accent transition-colors focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
                    aria-label="Contact"
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    <span>Contact</span>
                  </button>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Mobile bandeau latéral réduit */}
      <div className="lg:hidden fixed left-0 top-16 bottom-0 w-12 bg-[#1E1E1E]/90 z-30 flex flex-col items-center py-4 space-y-4">
        <button
          onClick={handleServicesClick}
          className="p-2 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
          aria-label="Prestations"
        >
          <Briefcase className="w-6 h-6 hover:animate-pulse hover:scale-110 transition text-primary-foreground hover:text-accent" />
        </button>
        
        <button
          onClick={handleContactClick}
          className="p-2 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
          aria-label="Contact"
        >
          <Mail className="w-6 h-6 hover:animate-pulse hover:scale-110 transition text-primary-foreground hover:text-accent" />
        </button>
      </div>

      {/* Main Content */}
      <main className="lg:ml-48 ml-12 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
};
