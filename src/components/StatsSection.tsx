import { Building, Users, Award, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  // Counter animation refs and state
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    properties: 0,
    clients: 0,
    years: 0,
    locations: 0,
  });
  const targets = { properties: 300, clients: 1000, years: 5, locations: 3 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setCounts({
        properties: Math.floor(progress * targets.properties),
        clients: Math.floor(progress * targets.clients),
        years: Math.floor(progress * targets.years),
        locations: Math.floor(progress * targets.locations),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Building,
      number: counts.properties,
      suffix: "+",
      label: "Propriétés Listées",
      description: "Annonces actives dans toutes catégories",
    },
    {
      icon: Users,
      number: counts.clients,
      suffix: "+",
      label: "Clients Satisfaits",
      description: "Clients heureux et en constante augmentation",
    },
    {
      icon: Award,
      number: counts.years,
      suffix: "+",
      label: "Années d'Expérience",
      description: "Dans l'industrie immobilière",
    },
    {
      icon: MapPin,
      number: counts.locations,
      suffix: "+",
      label: "Emplacements",
      description: "Villes et quartiers couverts",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm font-medium mb-4">
            NOTRE IMPACT
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Pourquoi Choisir{" "}
            <span className="text-red-500 relative">
              Say Allo Immo
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leader du marché immobilier avec excellence et innovation depuis
            plus d'une décennie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl text-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-5xl font-bold text-white mb-3 flex items-center justify-center">
                  {stat.number}
                  <span className="text-red-500 ml-1">{stat.suffix}</span>
                </h3>

                <h4 className="text-xl font-semibold text-red-400 mb-3">
                  {stat.label}
                </h4>

                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
