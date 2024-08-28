import React, { useEffect, useState } from "react";

const DropdownWithApi: React.FC = () => {
  const [templates, setTemplates] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/admin/template/completed");
        const data = await response.json();
        setTemplates(data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div className="relative inline-block w-64">
      <select
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={selectedTemplate}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Select a template</option>
        {templates.map((template) => (
          <option key={template.id} value={template.templateName}>
            {template.templateName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownWithApi;
