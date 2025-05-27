
import { Heart, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
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
  isRental 
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-gray-200 hover:border-red-500">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                tag === 'En Vedette' ? 'bg-red-500 text-white' :
                tag === 'Tendance' ? 'bg-black text-white' :
                'bg-gray-500 text-white'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white border-red-500 hover:text-red-500">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white border-red-500 hover:text-red-500">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Property Stats */}
        <div className="absolute bottom-4 right-4 flex gap-2 text-white">
          {specs.beds && (
            <div className="bg-red-500 px-2 py-1 rounded flex items-center gap-1 text-sm">
              🛏️ {specs.beds}
            </div>
          )}
          {specs.baths && (
            <div className="bg-red-500 px-2 py-1 rounded flex items-center gap-1 text-sm">
              🚿 {specs.baths}
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 flex items-center gap-1">
          📍 {location}
        </p>
        
        <div className="mb-4">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {type}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-black">{price}</span>
            {isRental && <span className="text-gray-500 ml-2">/ Mensuel</span>}
          </div>
          <div className="text-red-500 text-sm">
            📏 {specs.sqft} m²
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          Ajouté: {dateAdded}
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
          Voir Détails
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
