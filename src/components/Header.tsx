import {
  Search,
  Phone,
  Menu,
  Home,
  Building,
  Info,
  MessageCircle,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');

      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute("href");

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top:
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                80,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <header
        className={`${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
        } border-b border-red-500 sticky top-0 z-50 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logoS.png"
                alt="Say Allo Immo Logo"
                className="h-16 w-16 object-contain hover:scale-105 transition-transform"
              />
              <div>
                <h1 className="text-2xl font-bold text-red-600 tracking-tight">
                  SAY ALLO IMMO
                </h1>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  Votre Partenaire Immobilier
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#hero"
                className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 border-b-2 border-transparent hover:border-red-600 transition-all"
              >
                <Home className="h-4 w-4 group-hover:text-red-600 transition-colors" />
                <span>Accueil</span>
              </a>
              <a
                href="#properties"
                className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 border-b-2 border-transparent hover:border-red-600 transition-all"
              >
                <Building className="h-4 w-4 group-hover:text-red-600 transition-colors" />
                <span>Propriétés</span>
              </a>
              <a
                href="#services"
                className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 border-b-2 border-transparent hover:border-red-600 transition-all"
              >
                <Search className="h-4 w-4 group-hover:text-red-600 transition-colors" />
                <span>Services</span>
              </a>
              <a
                href="#about"
                className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 border-b-2 border-transparent hover:border-red-600 transition-all"
              >
                <Info className="h-4 w-4 group-hover:text-red-600 transition-colors" />
                <span>À Propos</span>
              </a>
              <a
                href="#contact"
                className="group flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 border-b-2 border-transparent hover:border-red-600 transition-all"
              >
                <MessageCircle className="h-4 w-4 group-hover:text-red-600 transition-colors" />
                <span>Contact</span>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">
                  +216 52 212 159
                </span>
              </div>
              <Button
                variant="outline"
                className="md:hidden border-red-600 text-red-600 hover:bg-red-50 rounded-full"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Very simple email popup */}
      {showEmailInput && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Contactez-nous</h3>
              <button onClick={() => setShowEmailInput(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Votre Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="exemple@domaine.com"
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  alert("Email: " + email);
                  setShowEmailInput(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Envoyer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
