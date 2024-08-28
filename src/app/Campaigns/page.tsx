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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [campaignsPerPage] = useState<number>(10); // Items per page
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      NProgress.start(); // Start the progress bar

      try {
        const response = await apiService.getAllCampaign();
        if (response && response.data) {
          const uniqueCampaigns = new Set();
          const filteredCampaigns = response.data.filter((campaign: any) => {
            if (uniqueCampaigns.has(campaign.campaignName)) {
              return false;
            }
            uniqueCampaigns.add(campaign.campaignName);
            return true;
          });

          // Sort campaigns by createdDate in descending order
          const sortedCampaigns = filteredCampaigns.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

          setCampaigns(sortedCampaigns);
        } else {
          setCampaigns([]); // Handle case where no campaigns are found
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
    router.push('/AddCampaign');
  };

  const handleCampaignClick = (id: number) => {
    router.push(`/Campaigns/${id}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtered campaigns based on search term
  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.campaignName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='flex justify-between items-baseline mb-5 mt-14'>
        <h1 className='ml-14 font-bold text-4xl'>
          Campaigns
        </h1>
        <div className="flex items-center mr-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search Campaigns"
            className="border border-gray-300 rounded-lg py-2 px-4 w-72 focus:outline-none focus:border-green-600 mr-4"
          />
          <button
            className='hover:bg-green-800 h-10 rounded-lg bg-green-600 text-white px-5 cursor-pointer'
            onClick={handleAddCampaigns}
          >
            Add Campaigns
          </button>
        </div>
      </div>

      {loading ? (
        <div className='text-center mt-5'>
          <FaSpinner className="animate-spin text-4xl text-gray-600 mx-auto" />
        </div>
      ) : currentCampaigns.length === 0 ? (
        <div className='text-center mt-24'>
          <img 
            src="/Pagenot.png" 
            alt="No Data Found" 
            className="mx-auto w-64 h-64 object-cover"
          />
        </div>
      ) : (
        <div className="flex justify-center overflow-x-auto">
          <div className="w-full max-w-7xl mt-10">
            <table className="min-w-full bg-white shadow-md border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left w-1/3">Campaign Name</th>
                  <th className="p-3 text-left w-1/3">Start Date</th>
                  <th className="p-3 text-left w-1/6">Status</th>
                  <th className="p-3 text-left w-1/6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCampaigns.map(campaign => (
                  <tr key={campaign.id} className="border-b">
                    <td className="p-3 cursor-pointer w-1/3" onClick={() => handleCampaignClick(campaign.id)}>{campaign.campaignName}</td>
                    <td className="p-3 w-1/3">{campaign.createdDate}</td>
                    <td className="p-3 w-1/6">
                      <span
                        style={{ backgroundColor: 'rgb(217 247 230)', color: '#28C76F', padding: '10px' }}
                        className={`px-2 py-1 rounded-md font-semibold ${campaign.status == 1 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      >
                        {campaign.status == 0 ? 'Pending' : 'Active'}
                      </span>
                    </td>
                    <td className="p-3 w-1/6">
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
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredCampaigns.length / campaignsPerPage) }, (_, i) => (
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
  );
};

export default Page;
