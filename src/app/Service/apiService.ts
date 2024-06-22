import axios, { AxiosResponse } from "axios";

export const apiService = {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return { data: responseData };
    } catch (error: any) {
      return { data: null as any, error: error.message };
    }
  },

  async login(data:any): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`;
    // const data = { username, password };
    return axios.post<any>(url, data);
  },
};

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
