import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Mbarek",
      role: "Propriétaire",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "Say Allo Immo a rendu mon achat immobilier incroyablement fluide. Leur équipe était professionnelle, compétente et toujours disponible pour répondre à mes questions.",
      rating: 5,
    },
    {
      name: "Amir Ammar",
      role: "Acheteur",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "J'ai travaillé avec de nombreuses agences immobilières, mais Say Allo Immo se démarque. Leur analyse de marché et leurs conseils m'ont aidé à trouver la maison parfaite.",
      rating: 5,
    },
    {
      name: "Mariem Hsin",
      role: "Vendeuse",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "Ils ont vendu ma maison 20% au-dessus du prix demandé en seulement deux semaines ! Leur stratégie marketing et leurs compétences de négociation sont exceptionnelles.",
      rating: 5,
    },
    {
      name: "Sami Ghzel",
      role: "Propriétaire",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      content:
        "L'équipe de Say Allo Immo est tout simplement extraordinaire. Ils ont su vendre mon bien dans un délai record tout en obtenant le meilleur prix possible.",
      rating: 5,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm font-medium mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ce Que Disent Nos{" "}
            <span className="text-red-500 relative">
              Clients
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
            Découvrez ce que nos clients satisfaits ont à dire sur nos services
            immobiliers
          </p>
        </div>

        {domLoaded && (
          <div className="px-4 md:px-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass:
                  "inline-block w-3 h-3 bg-gray-600 rounded-full mx-1 cursor-pointer transition-all",
                bulletActiveClass: "bg-red-500 w-4 h-4",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto flex">
                  <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500 transition-all duration-500 flex flex-col w-full h-full min-h-[400px]">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-red-500 fill-current mr-1"
                        />
                      ))}
                    </div>

                    <div className="mb-4 flex-grow">
                      <Quote className="h-10 w-10 text-red-500/40 mb-3" />
                      <p className="text-gray-200 text-lg leading-relaxed line-clamp-6 h-[144px] overflow-hidden">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center pt-4 border-t border-gray-700 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-red-500"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-red-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
