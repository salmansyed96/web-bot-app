'use client'

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService';
import { FaTrash, FaEdit, FaSpinner, FaTimes } from 'react-icons/fa';

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
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [templatesPerPage] = useState<number>(10);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getAllTemplates();
        if (response && response.data.length > 0) {
          setTemplates(response.data);
        } else {
          setError('Data not found.');
        }
      } catch (error) {
        setError('Failed to fetch data.');
        console.error("Error fetching campaign:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddTemplate = () => {
    router.push('/TemplateForm');
  };

  const handleTemplateClick = (id: number) => {
    router.push(`/TemplateForm/${id}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTemplates = templates.filter(template =>
    template.templateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = filteredTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleCheckboxChange = () => {
    setIsModalOpen(true);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5 mt-20">
        <h1 className="ml-14 font-bold text-4xl">Templates</h1>
        <div className="flex items-center mr-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search Templates"
            className="border border-gray-300 rounded-lg py-2 px-4 w-72 focus:outline-none focus:border-green-600 mr-4"
          />
          <button
            className="hover:bg-green-800 h-10 rounded-lg bg-green-600 text-white px-5 cursor-pointer"
            onClick={handleAddTemplate}
          >
            Add Template
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
        </div>
      ) : error ? (
        <div className="text-center mt-20">
          <img 
            src="/Pagenot.png" 
            alt="No Data Found" 
            className="mx-auto w-64 h-64 object-cover"
          />
        </div>
      ) : (
        <>
          <div className="flex justify-center overflow-x-auto">
            <div className="w-full max-w-7xl mt-10">
              <table className="min-w-full bg-white shadow-md border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left">Template Name</th>
                    <th className="p-3 text-left">Creation Date</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTemplates.length > 0 ? (
                    currentTemplates.map(template => (
                      <tr key={template.id} className="border-b">
                        <td className="p-3 text-left cursor-pointer" onClick={() => handleTemplateClick(template.id)}>{template.templateName}</td>
                        <td className="p-3 text-left">{template.createDate}</td>
                        <td className="p-3 text-left">
                          <span className={`px-2 py-1 rounded-md font-semibold text-white ${template.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                            {template.status}
                          </span>
                        </td>
                        <td className="p-3 text-left flex items-center">
                          <input
                            type="checkbox"
                            className={`mr-2 h-4 w-4 rounded ${selectedStatus === 'Completed' ? 'bg-green-600' : selectedStatus === 'Inactive' ? 'bg-red-600' : selectedStatus === 'Pending' ? 'bg-yellow-600' : 'bg-gray-300'}`}
                            onChange={handleCheckboxChange}
                          />
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
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(filteredTemplates.length / templatesPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded-lg ${i + 1 === currentPage ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} focus:outline-none`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-5">
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-xl font-bold mb-10">Select Approval Status</h2>
            <div className='text-center'>
              <div className="mb-4">
                <label className={`mr-2 p-2 rounded ${selectedStatus === 'Completed' ? 'bg-green-200' : 'bg-gray-200'}`}>
                  <input
                    type="radio"
                    value="Completed"
                    checked={selectedStatus === 'Completed'}
                    onChange={handleRadioChange}
                    className="mr-1"
                  />
                  Completed
                </label>
                <label className={`mr-2 p-2 rounded ${selectedStatus === 'Inactive' ? 'bg-red-200' : 'bg-gray-200'}`}>
                  <input
                    type="radio"
                    value="Inactive"
                    checked={selectedStatus === 'Inactive'}
                    onChange={handleRadioChange}
                    className="mr-1"
                  />
                  Inactive
                </label>
                <label className={`p-2 rounded ${selectedStatus === 'Pending' ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                  <input
                    type="radio"
                    value="Pending"
                    checked={selectedStatus === 'Pending'}
                    onChange={handleRadioChange}
                    className="mr-1"
                  />
                  Pending
                </label>
              </div>

              <button
                onClick={handleModalClose}
                className="bg-green-600 text-white px-4 py-2 rounded-lg mt-5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateList;
