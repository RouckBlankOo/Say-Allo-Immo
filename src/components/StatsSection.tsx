
import { Building, Users, Award, MapPin } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Building,
      number: "2,500+",
      label: "Propriétés Listées",
      description: "Annonces actives dans toutes catégories"
    },
    {
      icon: Users,
      number: "1,200+",
      label: "Clients Satisfaits",
      description: "Clients heureux et en constante augmentation"
    },
    {
      icon: Award,
      number: "15+",
      label: "Années d'Expérience",
      description: "Dans l'industrie immobilière"
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Emplacements",
      description: "Villes et quartiers couverts"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pourquoi Choisir <span className="text-red-500">Say Allo Immo</span>
          </h2>
          <p className="text-xl text-gray-300">
            Leader du marché immobilier avec excellence et innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold text-red-500 mb-2">{stat.label}</h4>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
