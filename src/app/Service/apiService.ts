// services/apiService.ts

export interface ApiResponse<T> {
    data: T;
    error?: string;
  }
  
  export const apiService = {
    async get<T>(url: string): Promise<ApiResponse<T>> {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(HTTP error! status: ${response.status});
        }
        const data = await response.json();
        return { data };
      } catch (error: any) {
        return { data: null as any, error: error.message };
      }
    },
  
    async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(HTTP error! status: ${response.status});
        }
        const responseData = await response.json();
        return { data: responseData };
      } catch (error: any) {
        return { data: null as any, error: error.message };
      }
    },
  
    // Add more methods as needed (put, delete, etc.)
  };