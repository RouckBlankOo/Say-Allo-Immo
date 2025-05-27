import {
  Building,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-red-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-500 p-2 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SAY ALLO IMMO</h3>
                <p className="text-red-400 text-sm">
                  Votre Partenaire Immobilier
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Découvrez l'incarnation de la flexibilité et donnez du pouvoir à
              vos projets immobiliers avec notre solution complète.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-red-500">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Propriétés
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-red-500">
              Types de Propriétés
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Maisons de Luxe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Appartements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Propriétés d'Investissement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Locations de Vacances
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-red-500">
              Informations de Contact
            </h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+216 54 311 907</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>info@sayalloimmo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>123 Avenue Immobilière, Miami, FL</span>
              </div>
              <p className="text-sm">Lun - Ven: 9h - 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Say Allo Immo. Tous droits réservés. | Construit avec
            excellence et innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
