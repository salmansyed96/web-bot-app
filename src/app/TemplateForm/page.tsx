'use client';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiService } from '../Service/apiService';
import { useRouter } from 'next/navigation';

const TemplateForm: React.FC = () => {
  const [templateName, setTemplateName] = useState<string>('');
  const [templateMessage, setTemplateMessage] = useState<string>('');
  const [templateType, setTemplateType] = useState<string>('SMS');
  const [category, setCategory] = useState<string>('');
  const [status] = useState<string>('start'); // Hidden field
  const [createBy, setCreateBy] = useState<string>(''); // Hidden field
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setCreateBy(username);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!templateName || !templateMessage || !category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const data = {
      templateName,
      templateMessage,
      templateType,
      category,
      createBy,  // Hidden field value
      status,    // Hidden field value
    };

    console.log(data);
    try {
      const response = await apiService.addTemplate(data);

      // Show success toast
      toast.success("Template created successfully!");

      // Redirect to a specific page
      router.push('/TemplateList'); // Adjust the route as needed
    } catch (error: any) {
      console.error("Error creating template:", error.message);

      // Show error toast
      toast.error("Something went wrong! " + (error.message || "Something went wrong."));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <h1 className="text-4xl mb-10 mt-11 ml-20 font-semibold text-gray-800">Create Template</h1>
      <div className="flex items-center justify-start">
        <div className="bg-white ml-20 mb-60 p-8 shadow-md rounded-lg max-w-3xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="templateName" className="block text-gray-700 font-bold mb-2">
                Template Name:
              </label>
              <input
                id="templateName"
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
                placeholder="Enter template name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="templateMessage" className="block text-gray-700 font-bold mb-2">
                Template Message:
              </label>
              <textarea
                id="templateMessage"
                value={templateMessage}
                onChange={(e) => setTemplateMessage(e.target.value)}
                className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
                placeholder="Enter template message"
              />
            </div>
            {/* Uncomment if needed
            <div className="mb-4">
              <label htmlFor="templateType" className="block text-gray-700 font-bold mb-2">
                Template Type:
              </label>
              <select
                id="templateType"
                value={templateType}
                onChange={(e) => setTemplateType(e.target.value)}
                className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
              >
                <option value="SMS">SMS</option>
                <option value="Email">Email</option>
              </select>
            </div>
            */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                Category:
              </label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
                placeholder="Enter category"
              />
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
  );
};

export default TemplateForm;
