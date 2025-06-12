import {
  Building,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white py-16 border-t border-red-500/30 relative"
    >
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-3 rounded-lg shadow-md">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SAY ALLO IMMO</h3>
                <p className="text-red-400 text-sm">
                  Votre Partenaire Immobilier
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Découvrez l'incarnation de la flexibilité et donnez du pouvoir à
              vos projets immobiliers avec notre solution complète.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16bo3NdkHh/?mibextid=wwXIfr"
                className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/sayallo_immo?igsh=MW1pejkyODZybWEwaw=="
                className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@say_allo_immo?_t=ZM-8x40dZ6MI2o&_r=1"
                className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="TikTok"
              >
                <img
                  src="/assets/tiktok.png"
                  alt="TikTok"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Liens Rapides
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#properties"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Propriétés
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Types de Propriétés
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Maisons de Luxe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Appartements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Propriétés d'Investissement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Locations de Vacances
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Informations de Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-500"></span>
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 group-hover:bg-red-600 p-2 rounded-lg transition-colors mt-1">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Téléphone</p>
                  <p>+216 52 212 159</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 group-hover:bg-red-600 p-2 rounded-lg transition-colors mt-1">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p>sayallo@outlook.fr</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gray-800 group-hover:bg-red-600 p-2 rounded-lg transition-colors mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Adresse</p>
                  <p>
                    Rue Taher sfar, immeuble Bouraoui 2, B210, Sousse, Tunisia
                  </p>
                  <p className="text-sm mt-1">Lun - Ven: 9h - 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Say Allo Immo. Tous droits
            réservés. | Construit avec excellence et innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
