
import { Home, Key, Calculator, FileText, Shield, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Achat de Propriété",
      description: "Accompagnement expert à chaque étape de l'achat de votre maison de rêve",
      features: ["Analyse de Marché", "Support de Négociation", "Assistance Juridique"]
    },
    {
      icon: Key,
      title: "Vente de Propriété", 
      description: "Maximisez la valeur de votre propriété avec notre approche stratégique de vente",
      features: ["Photographie Professionnelle", "Stratégie Marketing", "Optimisation des Prix"]
    },
    {
      icon: Calculator,
      title: "Évaluation de Propriété",
      description: "Évaluations précises basées sur les conditions actuelles du marché",
      features: ["Analyse Comparative", "Tendances du Marché", "Potentiel d'Investissement"]
    },
    {
      icon: FileText,
      title: "Documentation Légale",
      description: "Support juridique complet pour toutes vos transactions immobilières",
      features: ["Révision de Contrat", "Vérification de Titre", "Documentation"]
    },
    {
      icon: Shield,
      title: "Conseil en Investissement",
      description: "Conseils stratégiques pour les opportunités d'investissement immobilier",
      features: ["Analyse ROI", "Évaluation des Risques", "Planification de Portefeuille"]
    },
    {
      icon: Headphones,
      title: "Support 24h/24 7j/7",
      description: "Assistance continue pour tous vos besoins immobiliers",
      features: ["Support d'Urgence", "Portail Client", "Consultation d'Expert"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Nos <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Solutions immobilières complètes adaptées à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group border-gray-200 hover:border-red-500">
              <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
