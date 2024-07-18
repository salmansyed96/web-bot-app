// import { User, Tooltip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
// import { DeleteIcon, EditIcon, EyeIcon } from "../components/icons";

// export type User = {
//     id: string;
//     name: string;
//     email: string;
//     image: string;
//     lastSeen: string;
//   };

//   export const columns = [
//     {
//       key: "name",
//       label: "NAME",
//     },







//     {
//       key: "lastSeen",
//       label: "Last Seen",
//     },
//     {
//       key: "actions",
//       label: "Actions",
//     },
//   ];

//   export const renderCell = (user: User, columnKey: React.Key) => {
//     const cellValue = user[columnKey as keyof User];

//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "lg", src: user.image }}
//             description={user.email}
//             name={cellValue}
//           >
//             {user.email}
//           </User>
//         );
//       case "lastSeen":
//         return <span>{new Date(cellValue).toLocaleDateString()}</span>;
//       case "actions":
//         return (
//           <div className="relative flex items-center gap-2">
//             <Tooltip content="Details">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EyeIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Edit user">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EditIcon />
//               </span>
//             </Tooltip>
//             <Tooltip color="danger" content="Delete user">
//               <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                 <DeleteIcon />
//               </span>
//             </Tooltip>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   };

//   const ExampleTable = ({ users }: { users: User[] }) => {
//     return (
//       <Table aria-label="Example table with custom cells">
//         <TableHeader columns={columns}>
//           {(column) => (
//             <TableColumn
//               key={column.key}
//               align={column.key === "actions" ? "center" : "start"}
//             >
//               {column.label}
//             </TableColumn>
//           )}
//         </TableHeader>
//         <TableBody items={users}>
//           {(item) => (
//             <TableRow key={item.id}>
//               {columns.map((column) => (
//                 <TableCell key={column.key}>
//                   {renderCell(item, column.key)}
//                 </TableCell>
//               ))}
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     );
//   };

//   export default ExampleTable;











///%%%%%%%%%%%%%%


// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import { apiService } from '../Service/apiService'

// interface Campaign {
//   id: number;
//   message: string;
//   numbers: string;
//   status: number;
//   createdBy: string;
//   createdDate: string;
//   updatedBy: string | null;
//   updatedDate: string | null;
//   campaignName: string;
//   sno: number;
// }

// interface CampaignListProps {
//   campaigns: Campaign[];
// }



// const page = () => {
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: any = await apiService.getAllCampaign();
//         console.log(response.data)
//         // const response = await axios.get('/api/campaigns'); // Replace with your API endpoint
//         // setCampaigns(response.data); // Assuming API response is an array of campaigns
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); 
//   const campaignsData = [
//     {
//       "id": 1,
//       "message": "Hello furqan",
//       "numbers": "7354137893",
//       "status": 2,
//       "createdBy": "Furqan",
//       "createdDate": "2024-06-26",
//       "updatedBy": null,
//       "updatedDate": null,
//       "campaignName": "USA",
//       "sno": 1
//     },
//     {
//       "id": 2,
//       "message": "syed salman",
//       "numbers": "546476",
//       "status": 2,
//       "createdBy": "Furqan",
//       "createdDate": "2024-06-26",
//       "updatedBy": null,
//       "updatedDate": null,
//       "campaignName": "USA",
//       "sno": 2
//     },
//     {
//       "id": 2,
//       "message": "syed salman",
//       "numbers": "546476",
//       "status": 2,
//       "createdBy": "Furqan",
//       "createdDate": "2024-06-26",
//       "updatedBy": null,
//       "updatedDate": null,
//       "campaignName": "USA",
//       "sno": 2
//     },
//     {
//       "id": 2,
//       "message": "syed salman",
//       "numbers": "546476",
//       "status": 2,
//       "createdBy": "Furqan",
//       "createdDate": "2024-06-26",
//       "updatedBy": null,
//       "updatedDate": null,
//       "campaignName": "USA",
//       "sno": 2
//     },
//     // Add more campaigns as needed
//   ];

//   const router = useRouter();

//   const handleAddCampaigns = () => {
//     // Logic for adding campaigns goes here
//     console.log('Add Campaigns button clicked');
//     router.push('/AddCampaign');
//     // Example: You could trigger a modal, navigate to a new page, etc.
//   };


//    data =[
//     {
//         "id": 1,
//         "message": "Hello furqan",
//         "numbers": "7354137893",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 1
//     },
//     {
//         "id": 3,
//         "message": "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
//         "numbers": "5456445",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 3
//     },
//     {
//         "id": 4,
//         "message": "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
//         "numbers": "7004137839",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 4
//     },
//     {
//         "id": 5,
//         "message": "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
//         "numbers": "1234567890",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 5
//     },
//     {
//         "id": 6,
//         "message": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
//         "numbers": "4543345344",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 6
//     },
//     {
//         "id": 7,
//         "message": "ghhhhhhhhhhf",
//         "numbers": "4564552345",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 7
//     },
//     {
//         "id": 8,
//         "message": "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
//         "numbers": "8888888888",
//         "status": 2,
//         "createdBy": "Furqan",
//         "createdDate": "2024-06-26",
//         "updatedBy": null,
//         "updatedDate": null,
//         "campaignName": "USA",
//         "sno": 8
//     }
// ]
//   return (
//     <>
//     <div className='flex justify-between'><h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>
//   Compaigns
// </h1>
// <button  className='mr-10 h-55px py-4 mt-20 rounded-xl bg-green-600 text-white' onClick={handleAddCampaigns}>Add Campaigns</button>
// </div>
// <div className="overflow-x-auto">
//       <table className="min-w-full bg-white shadow-md border-collapse">
//         <thead>
//           <tr className="border-b">
//             <th className="p-3">Campaign Name</th>
//             <th className="p-3">Start Date</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaignsData.map(campaign => (
//             <tr key={campaign.id} className="border-b">
//               <td className="p-3">{campaign.message}</td>
//               <td className="p-3">{campaign.createdDate}</td>
//               <td className="p-3">{campaign.status}</td>
//               <td className="p-3">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Edit
//                 </button>
//                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>




// </>
//   )
// }

// export default page

'use client'

import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService'
import { FaTrash, FaEdit } from 'react-icons/fa';

interface Campaign {
  id: number;
  message: string;
  numbers: string;
  status: number;
  createdBy: string;
  createdDate: string;
  updatedBy: string | null;
  updatedDate: string | null;
  campaignName: string;
  sno: number;
}

const Page = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      console.log("inside use effect");
      try {
        const response = await apiService.getAllCampaign();
        console.log(response.data);
        if (response && response.data) {
          // Create a set to track unique campaign names
          const uniqueCampaigns = new Set();
          const filteredCampaigns = response.data.filter((campaign: any) => {
            if (uniqueCampaigns.has(campaign.campaignName)) {
              return false; // Skip this campaign as it's a duplicate
            }
            uniqueCampaigns.add(campaign.campaignName);
            return true;
          });
          setCampaigns(filteredCampaigns); // Set state with filtered campaigns
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("inside use effect")
  //     try {
  //       const response = await apiService.getAllCampaign();
  //       console.log(response.data)
  //       if (response && response.data) {
  //         setCampaigns(response.data); // Assuming API response contains an array of campaigns
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log("syed jkhk")
  //   const fetchData = async () => {
  //     try {
  //       const response: any = await apiService.getAllCampaign();
  //       if (response && response.data) {
  //         setCampaigns(response.data); // Assuming API response contains an array of campaigns
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  const handleAddCampaigns = () => {
    console.log('Add Campaigns button clicked');
    router.push('/AddCampaign');
  };

  return (
    <>
      <div className='flex justify-between align-baseline'>
        <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>
          Campaigns
        </h1>
        <button className='mr-10 h-55px py-4 mt-20 rounded-xl bg-green-00 text-white p-3' onClick={handleAddCampaigns}>
          Add Campaigns
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3">Campaign Name</th>
              <th className="p-3">  Start Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className='ml-10'>
            {campaigns.map(campaign => (
              <tr key={campaign.id} className="border-b">
                <td className="p-3">{campaign.campaignName}</td>
                <td className="p-3">{campaign.createdDate}</td>
                <td className="p-3" >
                  <span style={{ backgroundColor: 'rgb(217 247 230)', color: '#28C76F', padding: '10px' }} className={`px-2 py-1 rounded-md font-semibold text-white ${campaign.status == 1 ? 'bg-yellow-500' : 'bg-green-500'}`}>
                    {campaign.status == 0 ? 'Pending' : 'Active'}
                  </span>
                </td>
                <td className="p-3">
                  <button className="p-2">
                    <FaEdit style={{ color: '#4B465C' }} />
                  </button>
                  {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                Delete
              </button> */}
                  <button className="p-2">
                    <FaTrash style={{ color: '#4B465C' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tbody>
           {campaigns.map(campaign => (
              <tr key={campaign.id} className="border-b">
                <td className="p-3">{campaign.campaignName}</td>
                <td className="p-3">{campaign.createdDate}</td>
                <td className="p-3">{campaign.status}</td>
                <td className="p-3">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default Page;



