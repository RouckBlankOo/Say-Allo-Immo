import { fetchFromApi, getAuthToken } from "./api";

export interface Property {
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
  description?: string;
  featured?: boolean;
  status?: string;
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
export const getPropertyById = async (id: number): Promise<Property> => {
  const response = await fetchFromApi<Property>(`/properties/${id}`);
  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as Property;
};

// Create a new property (requires authentication)
export const createProperty = async (
  propertyData: Omit<Property, "id" | "dateAdded">
): Promise<Property> => {
  const response = await fetchFromApi<Property>("/properties", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(propertyData),
  });

  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as Property;
};

// Update an existing property (requires authentication)
export const updateProperty = async (
  id: number,
  propertyData: Partial<Property>
): Promise<Property> => {
  const response = await fetchFromApi<Property>(`/properties/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(propertyData),
  });

  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as Property;
};

// Delete a property (requires authentication)
export const deleteProperty = async (id: number): Promise<void> => {
  const response = await fetchFromApi<{ message: string }>(
    `/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    }
  );

  if (response.error) {
    throw new Error(response.error);
  }
};
