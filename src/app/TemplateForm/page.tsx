// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const TemplateForm: React.FC = () => {

  
//   const [templateName, setTemplateName] = useState<string>('');
//   const [templateMessage, setTemplateMessage] = useState<string>('');
//   const [templateType, setTemplateType] = useState<string>('SMS');
//   const [category, setCategory] = useState<string>(username); // Added category field
//   const [status] = useState<string>('start'); // Hidden field
//   const [createBy] = useState<string>(); // Hidden field
// useEffect(()=>{
//   let username=localStorage.getItem("username")
// },[])
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const data = {
//       templateName,
//       templateMessage,
//       templateType,
//       category, // Include category in the submission
//       // createDate: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
//       createBy,  // Hidden field value
//       status,    // Hidden field value
//     };

//     console.log(data);

//     // try {
//     //   const response = await axios.post('http://localhost:8081/api/v1/admin/template', data);
//     //   toast.success('Template created successfully!');
//     //   console.log('Response:', response.data);
//     // } catch (error) {
//     //   toast.error('Error creating template.');
//     //   console.error('Error:', error);
//     // }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer />
//       <h1 className="text-4xl mb-10 mt-11 ml-20 font-semibold text-gray-800">Create Template</h1>
//       <div className="flex items-center justify-start">
//         <div className="bg-white ml-20 mb-60 p-8 shadow-md rounded-lg max-w-3xl w-full">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Template Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="templateName" className="block text-gray-700 font-bold mb-2">
//                 Template Name:
//               </label>
//               <input
//                 id="templateName"
//                 type="text"
//                 value={templateName}
//                 onChange={(e) => setTemplateName(e.target.value)}
//                 className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
//                 placeholder="Enter template name"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="templateMessage" className="block text-gray-700 font-bold mb-2">
//                 Template Message:
//               </label>
//               <textarea
//                 id="templateMessage"
//                 value={templateMessage}
//                 onChange={(e) => setTemplateMessage(e.target.value)}
//                 className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
//                 placeholder="Enter template message"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="templateType" className="block text-gray-700 font-bold mb-2">
//                 Template Type:
//               </label>
//               <select
//                 id="templateType"
//                 value={templateType}
//                 onChange={(e) => setTemplateType(e.target.value)}
//                 className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
//               >
//                 <option value="SMS">SMS</option>
//                 <option value="Email">Email</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
//                 Category:
//               </label>
//               <input
//                 id="category"
//                 type="text"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full border-2 p-2 rounded-md focus:outline-none focus:border-green-600"
//                 placeholder="Enter category"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemplateForm;
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiService } from '../Service/apiService';

const TemplateForm: React.FC = () => {
  const [templateName, setTemplateName] = useState<string>('');
  const [templateMessage, setTemplateMessage] = useState<string>('');
  const [templateType, setTemplateType] = useState<string>('SMS');
  const [category, setCategory] = useState<string>('');
  const [status] = useState<string>('start'); // Hidden field
  const [createBy, setCreateBy] = useState<string>(''); // Hidden field

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setCreateBy(username);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      templateName,
      templateMessage,
      templateType,
      category,
      // createDate: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      createBy,  // Hidden field value
      status,    // Hidden field value
    };

    console.log(data);

    // try {
    //   const response = await axios.post('http://localhost:8081/api/v1/admin/template', data);
    //   toast.success('Template created successfully!');
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   toast.error('Error creating template.');
    //   console.error('Error:', error);
    // }
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
