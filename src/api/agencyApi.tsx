import { fetchFromApi, getAuthToken } from "./api";

export interface AgencyInfo {
  name: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Get agency information
export const getAgencyInfo = async (): Promise<AgencyInfo> => {
  const response = await fetchFromApi<AgencyInfo>("/agency");
  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as AgencyInfo;
};

// Update agency information (requires authentication)
export const updateAgencyInfo = async (
  agencyData: Partial<AgencyInfo>
): Promise<AgencyInfo> => {
  const response = await fetchFromApi<AgencyInfo>("/agency", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(agencyData),
  });

  if (response.error) {
    throw new Error(response.error);
  }
  return response.data as AgencyInfo;
};
