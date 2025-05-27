
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Primo-Accédante",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Say Allo Immo a rendu mon premier achat immobilier incroyablement fluide. Leur équipe était professionnelle, compétente et toujours disponible pour répondre à mes questions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investisseur Immobilier",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      content: "J'ai travaillé avec de nombreuses agences immobilières, mais Say Allo Immo se démarque. Leur analyse de marché et leurs conseils d'investissement m'ont aidé à construire un portefeuille rentable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Vendeuse",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Ils ont vendu ma maison 20% au-dessus du prix demandé en seulement deux semaines ! Leur stratégie marketing et leurs compétences de négociation sont exceptionnelles.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ce Que Disent Nos <span className="text-red-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-300">
            Témoignages réels de clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-red-500 fill-current" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 text-red-500 mb-2" />
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-red-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
