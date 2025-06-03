import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { getProperties } from "@/api/propertyApi";
import type { Property } from "@/api/propertyApi";

const PropertiesSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDomLoaded(true);

    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Fallback content while loading
  if (!domLoaded || loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded max-w-md mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4 h-96">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p>{error}</p>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="mt-4 border-red-500 text-red-500 hover:bg-red-50"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="properties"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            PROPRIÉTÉS EXCLUSIVES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Propriétés{" "}
            <span className="text-red-600 relative">
              En Vedette
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
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos propriétés premium soigneusement sélectionnées pour
            répondre à vos besoins
          </p>
        </div>

        {properties.length > 0 ? (
          <div className="relative px-4 md:px-12 mb-16">
            <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:shadow-xl transition-all">
              <ChevronLeft className="text-red-600 h-6 w-6" />
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={24}
              slidesPerView={1}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                bulletActiveClass: "bg-red-500 w-3 h-3",
                bulletClass:
                  "inline-block w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer transition-all",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={properties.length > 3}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  effect: "slide",
                },
                768: {
                  slidesPerView: 2,
                  effect: "slide",
                },
                1024: {
                  slidesPerView: 3,
                  effect: "coverflow",
                },
              }}
              className="properties-swiper py-10"
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id} className="h-auto">
                  <PropertyCard {...property} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:shadow-xl transition-all">
              <ChevronRight className="text-red-600 h-6 w-6" />
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Aucune propriété disponible pour le moment.
            </p>
          </div>
        )}

        <div className="swiper-pagination flex justify-center items-center space-x-2 my-8"></div>

        <div className="text-center mt-12">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg shadow-md hover:shadow-xl transform transition-all hover:-translate-y-1 group">
            <span className="font-medium">Voir Toutes les Propriétés</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
