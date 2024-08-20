'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService, ApiResponse } from '../Service/apiService';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent: React.FC = () => {
  const [campaignName, setCampaignName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ campaignName?: string; file?: string }>({});
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { campaignName?: string; file?: string } = {};

    if (!campaignName.trim()) {
      newErrors.campaignName = 'Campaign Name is required';
    }

    if (!file) {
      newErrors.file = 'File is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const username = localStorage.getItem("username");

    if (!username) {
      console.error('Username not found in localStorage');
      return;
    }

    setLoading(true); // Start loading

    try {
      const formData = new FormData();
      formData.append('campaignName', campaignName);
      formData.append('createdBy', username);
      formData.append('file', file!);

      console.log('Form data:', formData);

      const response: ApiResponse<any> = await apiService.addCampaign(formData);

      if (response.error) {
        console.error('Error adding campaign:', response.error);
        toast.error('Error adding campaign.');
      } else {
        console.log('Campaign added successfully:', response.data);
        toast.success('Campaign added successfully!');
        router.push('/Campaigns'); // Redirect to the Campaigns page

        // Reset form fields
        setCampaignName('');
        setFile(null);
        setErrors({});
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Unexpected error occurred.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    setFile(selectedFile);
  };

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <ToastContainer />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="loader"></div> {/* Loading spinner */}
        </div>
      )}
      <div className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-4xl mb-10 mt-11 ml-20 font-semibold text-gray-800">Add Campaign</h1>
        <div className="flex items-center justify-start">
          <div className="bg-white ml-20 mb-60 p-8 shadow-md rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Campaign</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="campaignName" className="block text-gray-700 font-bold mb-2">
                  Campaign Name:
                </label>
                <input
                  id="campaignName"
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className={`w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600 ${
                    errors.campaignName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter campaign name"
                />
                {errors.campaignName && (
                  <p className="text-red-500 text-sm mt-1">{errors.campaignName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                  Upload File:
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className={`w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600 ${
                    errors.file ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1">{errors.file}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
