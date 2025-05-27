import {
  Search,
  Phone,
  Menu,
  Home,
  Building,
  Info,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-red-500 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logoS.png"
              alt="Say Allo Immo Logo"
              className="h-16 w-16 object-contain"
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
              href="#"
              className="flex items-center space-x-1 text-red-600 font-medium border-b-2 border-red-600 pb-1 transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 hover:border-b-2 hover:border-red-600 transition-all"
            >
              <Building className="h-4 w-4" />
              <span>Propriétés</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 hover:border-b-2 hover:border-red-600 transition-all"
            >
              <Search className="h-4 w-4" />
              <span>Services</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 hover:border-b-2 hover:border-red-600 transition-all"
            >
              <Info className="h-4 w-4" />
              <span>À Propos</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600 pb-1 hover:border-b-2 hover:border-red-600 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
              <Phone className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-gray-700">
                +216 54 311 907
              </span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 shadow-sm transition-all duration-200 text-sm font-medium">
              Connexion
            </Button>
            <Button
              variant="outline"
              className="md:hidden border-red-600 text-red-600 hover:bg-red-50"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
