const API_BASE_URL = "https://api.sayalloimmo.com/api"; // Update with your actual backend URL

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

// Generic fetch function
export async function fetchFromApi<T>(
  endpoint: string, 
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return { error: data.message || "An error occurred" };
    }
    
    return { data };
  } catch (error) {
    console.error("API request failed:", error);
    return { error: "Network error" };
  }
}

// Auth token management
export const getAuthToken = () => localStorage.getItem("authToken");

export const setAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};