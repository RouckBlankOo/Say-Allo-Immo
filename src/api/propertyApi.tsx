import { fetchFromApi } from "./api";

export interface Property {
  _id: string; // MongoDB's internal ID
  title: string;
  location: string;
  price: string;
  type: string;
  status: string;
  beds?: number;
  baths?: number;
  sqft: number;
  image?: string;
  planImage?: string;
  dateAdded?: string;
  featured: boolean;
  description: string;
  tags: string[];
  isRental?: boolean;
}

// Get all properties
export const getProperties = async (): Promise<Property[]> => {
  const response = await fetchFromApi<Property[]>("/properties");
  if (response.error) {
    throw new Error(response.error);
  }
  return response.data || [];
};

// Get a single property by ID
export const getPropertyById = async (id: string): Promise<Property> => {
  const response = await fetchFromApi<Property>(`/properties/${id}`);
  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as Property;
};

// Get featured properties
export const getFeaturedProperties = async (): Promise<Property[]> => {
  const properties = await getProperties();
  return properties.filter((property) => property.featured);
};
