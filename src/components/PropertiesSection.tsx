import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PropertiesSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Villa sur Hollywood Boulevard",
      location: "Hatteras Lane, Hollywood, FL 33019, USA",
      price: "740 000€",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      tags: ["À Vendre", "En Vedette", "Tendance"],
      specs: { beds: 3, baths: 4, sqft: 4530 },
      dateAdded: "13 juin 2022",
    },
    {
      id: 2,
      title: "Restaurant de Cuisine Traditionnelle",
      location: "Sunset Drive, Miami, FL, USA",
      price: "2 600€",
      type: "Commerce",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      tags: ["À Louer"],
      specs: { sqft: 950 },
      dateAdded: "12 juin 2022",
      isRental: true,
    },
    {
      id: 3,
      title: "Villa sur Grand Avenue",
      location: "CocoWalk, 3015 Grand Avenue, Miami, USA",
      price: "4 750€",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80",
      tags: ["À Louer", "En Vedette"],
      specs: { beds: 4, baths: 4, sqft: 9350 },
      dateAdded: "11 juin 2022",
      isRental: true,
    },
    {
      id: 4,
      title: "Appartement Moderne",
      location: "Ocean Drive, Miami Beach, FL, USA",
      price: "560 000€",
      type: "Appartement",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
      tags: ["À Vendre", "Tendance"],
      specs: { beds: 2, baths: 2, sqft: 1850 },
      dateAdded: "10 juin 2022",
    },
    {
      id: 5,
      title: "Maison avec Vue sur la Mer",
      location: "Key Biscayne, Miami, FL, USA",
      price: "1 200 000€",
      type: "Maison",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      tags: ["À Vendre", "En Vedette", "Premium"],
      specs: { beds: 5, baths: 6, sqft: 6200 },
      dateAdded: "9 juin 2022",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Propriétés <span className="text-red-500">En Vedette</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos propriétés premium soigneusement sélectionnées
          </p>
        </div>

        {domLoaded && (
          <div className="relative px-4 md:px-12 mb-16">
            <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <ChevronLeft className="text-red-500 h-6 w-6" />
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
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
              className="properties-swiper"
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id} className="h-auto">
                  <PropertyCard {...property} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <ChevronRight className="text-red-500 h-6 w-6" />
            </div>
          </div>
        )}

        <div className="swiper-pagination flex justify-center items-center space-x-2 my-8"></div>

        <div className="text-center mt-8">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg shadow-md transform transition-transform hover:scale-105">
            Voir Toutes les Propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
