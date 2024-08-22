// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import { apiService } from '../Service/apiService';
// import { FaTrash, FaEdit, FaSpinner } from 'react-icons/fa';
// // import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// interface Template {
//   id: number;
//   templateName: string;
//   templateMessage: string;
//   templateType: string;
//   createDate: string;
//   createBy: string;
//   updateBy: string;
//   updateDate: string;
//   status: string;
// }

// const TemplateList = () => {
//   const [templates, setTemplates] = useState<Template[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       // console.log("Fetching data...");

//       try {
//         // console.log("Fetching campaign with ID:");

//       // apiService.getAllTemplates()
//       const response = await apiService.getAllTemplates();
//       console.log(response)

      

//       } catch (error) {
//         console.error("Error fetching campaign:", error);
       
//       }
//       // NProgress.start(); // Start the progress bar

//       // try {
//       //   const response = await apiService.getAllTemplates();
//       //   console.log('API Response:', response.data);

//       //   if (response && response.data) {
//       //     // Remove duplicates by templateName
//       //     const uniqueTemplates = new Set();
//       //     const filteredTemplates = response.data.filter((template: any) => {
//       //       if (uniqueTemplates.has(template.templateName)) {
//       //         return false;
//       //       }
//       //       uniqueTemplates.add(template.templateName);
//       //       return true;
//       //     });
//       //     setTemplates(filteredTemplates);
//       //   } else {
//       //     console.log('No data found or invalid response format.');
//       //   }
//       // } catch (error) {
//       //   console.error('Error fetching data:', error);
//       // } finally {
//       //   NProgress.done(); // Complete the progress bar
//       //   setLoading(false); // Set loading to false after data is fetched
//       // }
//     };

//     fetchData();
//   }, []);

//   const handleAddTemplate = () => {
//     console.log('Add Template button clicked');
//     router.push('/TemplateForm'); // Adjust the route as needed
//   };

//   const handleTemplateClick = (id: number) => {
//     console.log('Template ID:', id);
//     router.push(`/TemplateForm/${id}`);
//   };

//   return (
//     <>
//       <div className='flex justify-between items-baseline'>
//         <h1 className='ml-14' style={{ fontWeight: 'bold', fontSize: '40px' }}>
//           Templates
//         </h1>
//         <button className='hover:bg-green-800 addbtn mr-10 h-55px py-4 mt-20 rounded-xl bg-green-600 text-white p-3 cursor-pointer ' onClick={handleAddTemplate}>
//           Add Template
//         </button>
//       </div>

//       {loading ? (
//         <div className='text-center mt-5'>
//           <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md border-collapse">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-3">Template Name</th>
//                 <th className="p-3">Creation Date</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {templates.length > 0 ? (
//                 templates.map(template => (
//                   <tr key={template.id} className="border-b">
//                     <td className="p-3 cursor-pointer" onClick={() => handleTemplateClick(template.id)}>{template.templateName}</td>
//                     <td className="p-3">{template.createDate}</td>
//                     <td className="p-3">
//                       <span className={`px-2 py-1 rounded-md font-semibold text-white ${template.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
//                         {template.status}
//                       </span>
//                     </td>
//                     <td className="p-3">
//                       <button className="p-2">
//                         <FaEdit style={{ color: '#4B465C' }} />
//                       </button>
//                       <button className="p-2">
//                         <FaTrash style={{ color: '#4B465C' }} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="p-3 text-center">No templates available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default TemplateList;









// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import { apiService } from '../Service/apiService';
// import { FaTrash, FaEdit, FaSpinner } from 'react-icons/fa';

// interface Template {
//   id: number;
//   templateName: string;
//   templateMessage: string;
//   templateType: string;
//   createDate: string;
//   createBy: string;
//   updateBy: string;
//   updateDate: string;
//   status: string;
// }

// const TemplateList = () => {
//   const [templates, setTemplates] = useState<Template[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiService.getAllTemplates();
//         if (response && response.data.length > 0) {
//           setTemplates(response.data);
//         } else {
//           setError('Data not found.');
//         }
//       } catch (error) {
//         setError('Failed to fetch data.');
//         console.error("Error fetching campaign:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddTemplate = () => {
//     router.push('/TemplateForm');
//   };

//   const handleTemplateClick = (id: number) => {
//     router.push(`/TemplateForm/${id}`);
//   };

//   return (
//     <>
//       <div className='flex justify-between items-baseline'>
//         <h1 className='ml-14' style={{ fontWeight: 'bold', fontSize: '40px' }}>
//           Templates
//         </h1>
//         <button className='hover:bg-green-800 addbtn mr-10 h-55px py-4 mt-20 rounded-xl bg-green-600 text-white p-3 cursor-pointer ' onClick={handleAddTemplate}>
//           Add Template
//         </button>
//       </div>

//       {loading ? (
//         <div className='text-center mt-5'>
//           <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
//         </div>
//       ) : error ? (
//         <div className='text-center mt-5 text-red-600'>
//           {error}
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md border-collapse">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-3">Template Name</th>
//                 <th className="p-3">Creation Date</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {templates.length > 0 ? (
//                 templates.map(template => (
//                   <tr key={template.id} className="border-b">
//                     <td className="p-3 cursor-pointer" onClick={() => handleTemplateClick(template.id)}>{template.templateName}</td>
//                     <td className="p-3">{template.createDate}</td>
//                     <td className="p-3">
//                       <span className={`px-2 py-1 rounded-md font-semibold text-white ${template.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
//                         {template.status}
//                       </span>
//                     </td>
//                     <td className="p-3">
//                       <button className="p-2">
//                         <FaEdit style={{ color: '#4B465C' }} />
//                       </button>
//                       <button className="p-2">
//                         <FaTrash style={{ color: '#4B465C' }} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="p-3 text-center">No templates available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default TemplateList;











'use client'

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService';
import { FaTrash, FaEdit, FaSpinner } from 'react-icons/fa';

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

  return (
    <>
      <div className='flex justify-between items-center mb-5 mt-20'>
        <h1 className='ml-14 font-bold text-4xl'>
          Templates
        </h1>
        <div className="flex items-center mr-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search Templates"
            className="border border-gray-300 rounded-lg py-2 px-4 w-72 focus:outline-none focus:border-green-600 mr-4"
          />
          <button
            className='hover:bg-green-800 h-10 rounded-lg bg-green-600 text-white px-5 cursor-pointer'
            onClick={handleAddTemplate}
          >
            Add Template
          </button>
        </div>
      </div>

      {loading ? (
        <div className='text-center mt-5'>
          <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
        </div>
      ) : error ? (
        <div className='text-center mt-5 text-red-600'>
          {error}
        </div>
      ) : (
        <>
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
                {currentTemplates.length > 0 ? (
                  currentTemplates.map(template => (
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
    </>
  );
};

export default TemplateList;
