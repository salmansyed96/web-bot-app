// export default function LemonPage(){
//     return( <>
//      <h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>
//     Add Campaign
//   </h1>





//     </>
        
       
//     )
// }

'use client'
import { useRouter } from 'next/navigation';

// import React, { useState } from 'react';
// import { apiService } from "../Service/apiService";

// const FormComponent: React.FC = () => {
//   const [campaignName, setCampaignName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [file, setFile] = useState<File | null>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', { campaignName, startDate, file });
//     // Reset form fields if needed
//     setCampaignName('');
//     setStartDate('');
//     setFile(null);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   return (
//     <>
//    <h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>
//     Add Campaign
//   </h1>
//     <form onSubmit={handleSubmit} className=" w-900 ml-11 mt-9 bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <label htmlFor="campaignName" className="block text-gray-700 font-bold mb-2">
//           Campaign Name:
//         </label>
//         <input
//           id="campaignName"
//           type="text"
//           value={campaignName}
//           onChange={(e) => setCampaignName(e.target.value)}
//           className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//           placeholder="Enter campaign name"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
//           Campaign Start Date:
//         </label>
//         <input
//           id="startDate"
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
//           Upload File:
//         </label>
//         <input
//           id="file"
//           type="file"
//           onChange={handleFileChange}
//           className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Submit
//       </button>
//     </form>
//     </>
//   );
// };


// export default FormComponent;














import React, { useState } from 'react';
import { apiService, ApiResponse } from '../Service/apiService';

const FormComponent: React.FC = () => {
  const [campaignName, setCampaignName] = useState('');
 
  const [file, setFile] = useState<File | null>(null);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // console.log(file)
  //   let username=localStorage.getItem("username")
  //   // console.log(username)
  //   if (!file) {
  //     alert('Please select a file.');
  //     return;
  //   }

  //   try {
  //     // console.log(file)

  //     const formData = {
  //       campaignName,
        
  //       file,
  //     };
  //     console.log(formData);
  //     const formDatas = new FormData();
  //     formDatas.append('campaignName', JSON.stringify(campaignName));
  //     formDatas.append('createdBy', JSON.stringify(username));
  //     formDatas.append('file', file);
  //     console.log(formDatas)

  //     const response: ApiResponse<any> = await apiService.addCampaign(formDatas);

  //     if (response.error) {
  //       console.error('Error adding campaign:', response.error);
  //       // Handle error (e.g., show error message to user)
  //     } else {
  //       console.log('Campaign added successfully:', response.data);
  //       // Handle success (e.g., show success message, redirect user)
  //       // Optionally reset form fields
  //       setCampaignName('');
        
  //       setFile(null);
  //     }
  //   } catch (error) {
  //     console.error('Error adding campaign:', error);
  //     // Handle unexpected errors
  //   }
  // };



  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    let username:any = localStorage.getItem("username");
  
    if (!file) {
      alert('Please select a file.');
      return;
    }
  
    try {
      const formDatas = new FormData();
      formDatas.append('campaignName', campaignName);  // Directly append campaignName
      formDatas.append('createdBy', username);         // Directly append username
      formDatas.append('file', file);
  
      console.log(formDatas);
  
      const response: ApiResponse<any> = await apiService.addCampaign(formDatas);
  
      if (response.error) {
        console.error('Error adding campaign:', response.error);
        // Handle error (e.g., show error message to user)
      } else {
        console.log('Campaign added successfully:', response.data);
        router.push('/Campaigns');

        // Handle success (e.g., show success message, redirect user)
        // Optionally reset form fields
        setCampaignName('');
        setFile(null);
      }
    } catch (error) {
      console.error('Error adding campaign:', error);
      // Handle unexpected errors
    }
  };
  
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    // console.log(selectedFile)
  };

  return (
    <>
      <h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>
        Add Campaign
      </h1>
      <form onSubmit={handleSubmit} className="w-900 ml-11 mt-9 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="campaignName" className="block text-gray-700 font-bold mb-2 ">
            Campaign Name:
          </label>
          <input
            id="campaignName"
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter campaign name"
          />
        </div>
      
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Upload File:
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 addbtn hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormComponent;
