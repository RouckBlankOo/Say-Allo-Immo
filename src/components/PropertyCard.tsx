import { Card } from "@/components/ui/card";
import { Bed, Bath, AreaChart, Heart, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  tags: string[];
  specs: {
    beds?: number;
    baths?: number;
    sqft: number;
  };
  dateAdded: string;
  isRental?: boolean;
}

const PropertyCard = ({
  title,
  location,
  price,
  type,
  image,
  tags,
  specs,
  dateAdded,
  isRental,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden h-full bg-white hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl group">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                tag === "À Vendre"
                  ? "bg-green-500 text-white"
                  : tag === "À Louer"
                  ? "bg-blue-500 text-white"
                  : tag === "En Vedette"
                  ? "bg-red-500 text-white"
                  : tag === "Tendance"
                  ? "bg-black text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 hover:bg-white border-red-500 hover:text-red-500"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 hover:bg-white border-red-500 hover:text-red-500"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Property Stats */}
        <div className="absolute bottom-4 right-4 flex gap-2 text-white">
          {specs.beds && (
            <div className="bg-black/70 px-2 py-1 rounded-md flex items-center text-xs">
              <Bed className="h-3 w-3 mr-1" /> {specs.beds}
            </div>
          )}
          {specs.baths && (
            <div className="bg-black/70 px-2 py-1 rounded-md flex items-center text-xs">
              <Bath className="h-3 w-3 mr-1" /> {specs.baths}
            </div>
          )}
          <div className="bg-black/70 px-2 py-1 rounded-md flex items-center text-xs">
            <AreaChart className="h-3 w-3 mr-1" /> {specs.sqft} m²
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">
            {type}
          </span>
          <p className="font-bold text-lg text-red-600">
            {price}
            {isRental ? "/mois" : ""}
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-4">{location}</p>

        <div className="flex items-center text-xs text-gray-400 pt-4 border-t border-gray-100">
          <Calendar className="h-3 w-3 mr-1" /> Ajouté le {dateAdded}
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
