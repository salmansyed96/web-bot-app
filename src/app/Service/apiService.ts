import axios, { AxiosResponse } from "axios";

// Automatically add Authorization header with Bearer token to every request
(() => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
})();

export const apiService = {
  // GET request method
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

  
  // POST request method
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

  // Login method using Axios
  async login(data: any): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/signin`;
    return axios.post<any>(url, data);
  },
  // Login method using Axios
  async signup(data: any): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/signup`;
    return axios.post<any>(url, data);
  },

  // Add campaign method using Axios
  async addCampaign(data: any): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}maker/add-campaign`;
    return axios.post<any>(url, data);
  },
   // Add campaign method using Axios
   async addTemplate(data: any): Promise<AxiosResponse<any>> {

    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/template`;
    return axios.post<any>(url, data);
  },
  // Add campaign method using Axios
  async fetchTemplates(data: any): Promise<AxiosResponse<any>> {

    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/template/completed`;
    return axios.post<any>(url, data);
  },

  // Get all campaigns method using Axios
  async getAllCampaign(): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}checker/all-messages`;
    const headers = {
      'ngrok-skip-browser-warning': '69420',
    };

    

    try {
      const response = await axios.get(url, { headers });
      return response;
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw error;
    }
  },
  async getAllCompeletdtemplate(): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/template/completed`;
    const headers = {
      'ngrok-skip-browser-warning': '69420',
    };

    

    try {
      const response = await axios.get(url, { headers });
      return response;
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw error;
    }
  },

  async getAllTemplates(): Promise<AxiosResponse<any>> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}api/v1/admin/template`;
    const headers = {
      'ngrok-skip-browser-warning': '69420',
    };

    

    

    try {
      const response = await axios.get(url, { headers });
      return response;
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw error;
    }
  }
};

// Define the interface for API responses
export interface ApiResponse<T> {
  data: T;
  error?: string;
}
