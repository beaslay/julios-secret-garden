
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Briefcase, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/gallery", label: "Galerie" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    
    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const handleServicesClick = () => {
    navigate("/services");
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsMobileMenuOpen(false);
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
      <header className="lg:hidden bg-[#1E1E1E]/90 text-primary-foreground p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 h-12">
        <Link 
          to="/" 
          className="text-xl font-display font-bold tracking-wide text-white select-none focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
          aria-label="Julio - Retour à l'accueil"
        >
          Julio
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile bandeau latéral réduit */}
      <div className="lg:hidden fixed left-0 top-12 bottom-0 w-12 bg-[#1E1E1E]/90 z-30 flex flex-col items-center py-4 space-y-4">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 bg-[#1E1E1E]/90 text-primary-foreground z-50 slide-in-left-menu"
        >
          <div className="p-4 flex justify-between items-center border-b border-accent">
            <Link 
              to="/" 
              className="text-xl font-display font-bold text-white select-none focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Julio - Retour à l'accueil"
            >
              Julio
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 focus-visible:outline-accent focus-visible:outline-2 outline-offset-2"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-lg font-sans transition-colors focus-visible:outline-accent focus-visible:outline-2 outline-offset-2 ${
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
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-48 ml-12">
        {children}
      </main>
    </div>
  );
};
