'use client'

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService';
import { FaTrash, FaEdit, FaSpinner } from 'react-icons/fa';
// import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface Template {
  id: number;
  templateName: string;
  templateMessage: string;
  templateType: string;
  createDate: string;
  createBy: string;
  updateBy: string;
  updateDate: string;
  status: string;
}

const TemplateList = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // console.log("Fetching data...");

      try {
        // console.log("Fetching campaign with ID:");

      // apiService.getAllTemplates()
      const response = await apiService.getAllTemplates();
      console.log(response)

      

      } catch (error) {
        console.error("Error fetching campaign:", error);
       
      }
      // NProgress.start(); // Start the progress bar

      // try {
      //   const response = await apiService.getAllTemplates();
      //   console.log('API Response:', response.data);

      //   if (response && response.data) {
      //     // Remove duplicates by templateName
      //     const uniqueTemplates = new Set();
      //     const filteredTemplates = response.data.filter((template: any) => {
      //       if (uniqueTemplates.has(template.templateName)) {
      //         return false;
      //       }
      //       uniqueTemplates.add(template.templateName);
      //       return true;
      //     });
      //     setTemplates(filteredTemplates);
      //   } else {
      //     console.log('No data found or invalid response format.');
      //   }
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // } finally {
      //   NProgress.done(); // Complete the progress bar
      //   setLoading(false); // Set loading to false after data is fetched
      // }
    };

    fetchData();
  }, []);

  const handleAddTemplate = () => {
    console.log('Add Template button clicked');
    router.push('/TemplateForm'); // Adjust the route as needed
  };

  const handleTemplateClick = (id: number) => {
    console.log('Template ID:', id);
    router.push(`/TemplateForm/${id}`);
  };

  return (
    <>
      <div className='flex justify-between items-baseline'>
        <h1 className='ml-14' style={{ fontWeight: 'bold', fontSize: '40px' }}>
          Templates
        </h1>
        <button className='hover:bg-green-800 addbtn mr-10 h-55px py-4 mt-20 rounded-xl bg-green-600 text-white p-3 cursor-pointer ' onClick={handleAddTemplate}>
          Add Template
        </button>
      </div>

      {loading ? (
        <div className='text-center mt-5'>
          <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3">Template Name</th>
                <th className="p-3">Creation Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.length > 0 ? (
                templates.map(template => (
                  <tr key={template.id} className="border-b">
                    <td className="p-3 cursor-pointer" onClick={() => handleTemplateClick(template.id)}>{template.templateName}</td>
                    <td className="p-3">{template.createDate}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-md font-semibold text-white ${template.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                        {template.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="p-2">
                        <FaEdit style={{ color: '#4B465C' }} />
                      </button>
                      <button className="p-2">
                        <FaTrash style={{ color: '#4B465C' }} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-3 text-center">No templates available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TemplateList;
