'use client'

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService'

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

interface CampaignListProps {
  campaigns: Campaign[];
}



const page = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await apiService.getAllCampaign();
        console.log(response.data)
        // const response = await axios.get('/api/campaigns'); // Replace with your API endpoint
        // setCampaigns(response.data); // Assuming API response is an array of campaigns
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const campaignsData = [
    {
      "id": 1,
      "message": "Hello furqan",
      "numbers": "7354137893",
      "status": 2,
      "createdBy": "Furqan",
      "createdDate": "2024-06-26",
      "updatedBy": null,
      "updatedDate": null,
      "campaignName": "USA",
      "sno": 1
    },
    {
      "id": 2,
      "message": "syed salman",
      "numbers": "546476",
      "status": 2,
      "createdBy": "Furqan",
      "createdDate": "2024-06-26",
      "updatedBy": null,
      "updatedDate": null,
      "campaignName": "USA",
      "sno": 2
    },
    {
      "id": 2,
      "message": "syed salman",
      "numbers": "546476",
      "status": 2,
      "createdBy": "Furqan",
      "createdDate": "2024-06-26",
      "updatedBy": null,
      "updatedDate": null,
      "campaignName": "USA",
      "sno": 2
    },
    {
      "id": 2,
      "message": "syed salman",
      "numbers": "546476",
      "status": 2,
      "createdBy": "Furqan",
      "createdDate": "2024-06-26",
      "updatedBy": null,
      "updatedDate": null,
      "campaignName": "USA",
      "sno": 2
    },
    // Add more campaigns as needed
  ];
  
  const router = useRouter();

  const handleAddCampaigns = () => {
    // Logic for adding campaigns goes here
    console.log('Add Campaigns button clicked');
    router.push('/AddCampaign');
    // Example: You could trigger a modal, navigate to a new page, etc.
  };

  return (
    <>
    <div className='flex justify-between'><h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>
  Compaigns
</h1>
<button  className='mr-6 bg-green-500 text-white rounded' onClick={handleAddCampaigns}>Add Campaigns</button>
</div>
<div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3">Campaign Name</th>
            <th className="p-3">Start Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {campaignsData.map(campaign => (
            <tr key={campaign.id} className="border-b">
              <td className="p-3">{campaign.message}</td>
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
        </tbody>
      </table>
    </div>



    
</>
  )
}

export default page




