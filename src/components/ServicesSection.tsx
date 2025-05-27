import {
  Home,
  Key,
  Calculator,
  FileText,
  Headphones,
  Users,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Achat de Propriété",
      description:
        "Accompagnement expert à chaque étape de l'achat de votre maison de rêve",
      features: [
        "Analyse de Marché",
        "Support de Négociation",
        "Assistance Juridique",
      ],
    },
    {
      icon: Key,
      title: "Vente de Propriété",
      description:
        "Maximisez la valeur de votre propriété avec notre approche stratégique de vente",
      features: [
        "Photographie Professionnelle",
        "Stratégie Marketing",
        "Optimisation des Prix",
      ],
    },
    {
      icon: Calculator,
      title: "Évaluation de Propriété",
      description:
        "Évaluations précises basées sur les conditions actuelles du marché",
      features: [
        "Analyse Comparative",
        "Tendances du Marché",
        "Valorisation Précise",
      ],
    },
    {
      icon: FileText,
      title: "Documentation Légale",
      description:
        "Support juridique complet pour toutes vos transactions immobilières",
      features: [
        "Révision de Contrat",
        "Vérification de Titre",
        "Documentation",
      ],
    },
    {
      icon: Users,
      title: "Conseil Immobilier",
      description:
        "Conseils stratégiques pour vous guider dans vos décisions immobilières",
      features: [
        "Expertise du Marché Local",
        "Évaluation des Options",
        "Planification à Long Terme",
      ],
    },
    {
      icon: Headphones,
      title: "Support 24h/24 7j/7",
      description: "Assistance continue pour tous vos besoins immobiliers",
      features: [
        "Support d'Urgence",
        "Portail Client",
        "Consultation d'Expert",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-20 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-10 w-56 h-56 bg-red-50 rounded-full blur-3xl opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            NOS SERVICES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Des Solutions{" "}
            <span className="text-red-600 relative">
              Immobilières
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                  stroke="#dc2626"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions immobilières professionnelles adaptées à vos besoins
            spécifiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-500 group border-gray-100 hover:border-red-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-red-200 transform group-hover:scale-110 transition-all">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="group-hover:font-medium transition-all">
                      {feature}
                    </span>
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
