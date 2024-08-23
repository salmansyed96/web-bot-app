import React, { useEffect, useState } from 'react';

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
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>('All');

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/admin/template/completed')
      .then((response) => response.json())
      .then((data) => setTemplates(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleTemplateTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplateType(event.target.value);
  };

  const filteredTemplates = selectedTemplateType === 'All'
    ? templates
    : templates.filter(template => template.templateType === selectedTemplateType);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Templates</h1>

      <div className="mb-4">
        <label htmlFor="templateType" className="block text-sm font-medium text-gray-700">
          Filter by Template Type:
        </label>
        <select
          id="templateType"
          className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedTemplateType}
          onChange={handleTemplateTypeChange}
        >
          <option value="All">All</option>
          {[...new Set(templates.map(template => template.templateType))].map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-4">
        {filteredTemplates.map(template => (
          <li key={template.id} className="p-4 bg-gray-100 rounded-md shadow">
            <h2 className="text-lg font-bold">{template.templateName}</h2>
            <p className="text-sm">{template.templateMessage}</p>
            <p className="text-sm text-gray-600">Type: {template.templateType}</p>
            <p className="text-sm text-gray-600">Created By: {template.createBy}</p>
            <p className="text-sm text-gray-600">Updated By: {template.updateBy}</p>
            <p className="text-sm text-gray-600">Status: {template.status}</p>
            <p className="text-sm text-gray-600">Date: {template.createDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
