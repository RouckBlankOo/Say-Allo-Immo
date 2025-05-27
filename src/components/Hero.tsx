
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold text-white leading-tight mb-6">
                Trouvez Votre <span className="text-red-500">Maison de Rêve</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez l'incarnation de la flexibilité et donnez du pouvoir à vos projets immobiliers avec notre plateforme riche en fonctionnalités. 
                Adaptez-vous facilement aux différents types de propriétés et aux demandes du marché avec notre solution complète.
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex space-x-4 mb-6">
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                  Tout
                </Button>
                <Button variant="outline" className="rounded-full px-6 border-red-500 text-red-500 hover:bg-red-50">
                  À Louer
                </Button>
                <Button variant="outline" className="rounded-full px-6 border-red-500 text-red-500 hover:bg-red-50">
                  À Vendre
                </Button>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Entrez localisation, type de propriété..." 
                  className="pl-12 py-3 border-gray-200 rounded-lg focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="p-3 border border-gray-200 rounded-lg bg-white focus:border-red-500">
                  <option>Toutes Localisations</option>
                  <option>Miami, FL</option>
                  <option>Hollywood, FL</option>
                  <option>New York, NY</option>
                </select>
                <select className="p-3 border border-gray-200 rounded-lg bg-white focus:border-red-500">
                  <option>Type de Propriété</option>
                  <option>Villa</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                </select>
                <select className="p-3 border border-gray-200 rounded-lg bg-white focus:border-red-500">
                  <option>Gamme de Prix</option>
                  <option>0€ - 500K€</option>
                  <option>500K€ - 1M€</option>
                  <option>1M€+</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                  🔍 Recherche Avancée
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg">
                  Rechercher Propriétés
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black border border-red-500 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin de Conseils d'Expert ?
              </h3>
              <p className="text-gray-300 mb-6">
                Nos agents professionnels sont prêts à vous aider à trouver la propriété parfaite qui correspond à vos besoins et votre budget.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-3 mb-4">
                Consultation Gratuite
              </Button>
              <div className="text-red-400 text-sm">📞 Disponible 24h/24 7j/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
