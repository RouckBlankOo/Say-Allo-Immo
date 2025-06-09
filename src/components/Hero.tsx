import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('../assets/bgHero.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold tracking-wide mb-6">
                L'IMMOBILIER RÉINVENTÉ
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Trouvez Votre{" "}
                <span className="text-red-500 relative">
                  Bien Idéal
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4C50 4 50 1 100 1C150 1 150 7 200 7"
                      stroke="#f87171"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Say Allo Immo est un réseau immobilier dynamique, spécialisé
                dans les transactions immobilières telles que la vente, l'achat
                et la location de biens. Grâce à une connaissance approfondie du
                marché local et une approche centrée sur les besoins de chaque
                client, Say Allo Immo vous accompagne à chaque étape de votre
                projet immobilier. Que vous soyez à la recherche d'un
                appartement, d'une villa, d'un local commercial ou d'un terrain,
                notre équipe met tout en œuvre pour vous offrir des solutions
                sur mesure, en toute transparence et avec professionnalisme.
              </p>
            </div>

            {/* Company Description */}
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/50 rounded-2xl shadow-2xl p-8 text-center backdrop-blur-sm transform hover:scale-[1.02] hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin de Conseils d'Expert ?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nos conseillers immobiliers sont prêts à vous accompagner dans
                la recherche du bien parfait, qu'il soit résidentiel ou
                commercial.
              </p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 mb-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                onClick={() => (window.location.href = "#contact")}
              >
                Consultation Gratuite
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <div className="text-red-400 text-sm flex items-center justify-center">
                <span className="relative h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Disponible 24h/24 7j/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
