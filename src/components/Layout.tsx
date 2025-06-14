
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/services", label: "Prestations" },
  { path: "/gallery", label: "Galerie" },
  { path: "/contact", label: "Contact" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-primary text-primary-foreground flex-col z-50">
        <div className="p-8">
          <Link to="/" className="text-2xl font-cormorant font-bold">
            Julio
          </Link>
        </div>
        
        <div className="flex-1 px-8">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 text-lg font-inter transition-colors ${
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
        </div>
        
        <div className="p-8">
          <Link to="/contact" className="btn-primary w-full text-center">
            Réserver
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-cormorant font-bold">
          Julio
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-primary text-primary-foreground z-50 animate-slide-in-left">
          <div className="p-4 flex justify-between items-center border-b border-accent">
            <Link to="/" className="text-xl font-cormorant font-bold">
              Julio
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
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
                    className={`block py-3 text-lg font-inter transition-colors ${
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
            
            <div className="mt-8">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Réserver
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64">
        {children}
      </main>
    </div>
  );
};
