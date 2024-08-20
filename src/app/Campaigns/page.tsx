'use client'

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { apiService } from '../Service/apiService';
import { FaTrash, FaEdit, FaSpinner } from 'react-icons/fa';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      console.log("inside use effect");
      NProgress.start(); // Start the progress bar

      try {
        const response = await apiService.getAllCampaign();
        console.log(response.data);
        if (response && response.data) {
          const uniqueCampaigns = new Set();
          const filteredCampaigns = response.data.filter((campaign: any) => {
            if (uniqueCampaigns.has(campaign.campaignName)) {
              return false;
            }
            uniqueCampaigns.add(campaign.campaignName);
            return true;
          });
          setCampaigns(filteredCampaigns);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        NProgress.done(); // Complete the progress bar
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleAddCampaigns = () => {
    console.log('Add Campaigns button clicked');
    router.push('/AddCampaign');
  };

  const handleCampaignClick = (id: number) => {
    console.log(id);
    router.push(`/Campaigns/${id}`);
  };

  return (
    <>
      <div className='flex justify-between items-baseline'>
        <h1 className='ml-14' style={{ fontWeight: 'bold', fontSize: '40px' }}>
          Campaigns
        </h1>
        <button className='addbtn mr-10 h-55px py-4 mt-20 rounded-xl bg-green-00 text-white p-3' onClick={handleAddCampaigns}>
          Add Campaigns
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
                <th className="p-3">Campaign Name</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className='ml-10'>
              {campaigns.map(campaign => (
                <tr key={campaign.id} className="border-b">
                  <td className="p-3 cursor-pointer" onClick={() => handleCampaignClick(campaign.id)}>{campaign.campaignName}</td>
                  <td className="p-3">{campaign.createdDate}</td>
                  <td className="p-3">
                    <span style={{ backgroundColor: 'rgb(217 247 230)', color: '#28C76F', padding: '10px' }} className={`px-2 py-1 rounded-md font-semibold text-white ${campaign.status == 1 ? 'bg-yellow-500' : 'bg-green-500'}`}>
                      {campaign.status == 0 ? 'Pending' : 'Active'}
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Page;
