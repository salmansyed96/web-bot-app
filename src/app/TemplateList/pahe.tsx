'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const TemplateList: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get<Template[]>('http://localhost:8081/api/v1/admin/template');
        setTemplates(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching templates');
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-4xl mb-10 mt-11 ml-20 font-semibold text-gray-800">Template List</h1>
      <div className="ml-20 mb-60 p-8 shadow-md rounded-lg max-w-5xl w-full bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Templates</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Message</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Type</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Created Date</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {templates.map(template => (
              <tr key={template.id}>
                <td className="px-6 py-4 border-b border-gray-300">{template.id}</td>
                <td className="px-6 py-4 border-b border-gray-300">{template.templateName}</td>
                <td className="px-6 py-4 border-b border-gray-300">{template.templateMessage}</td>
                <td className="px-6 py-4 border-b border-gray-300">{template.templateType}</td>
                <td className="px-6 py-4 border-b border-gray-300">{template.createDate}</td>
                <td className="px-6 py-4 border-b border-gray-300">{template.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemplateList;
