"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Define a TypeScript type for campaign data
interface Campaign {
  campaignName: string;
  startDate: string;
  status: string;
  numbers: string[];
  message: string;
}

const CampaignDetails = () => {
  const { id } = useParams<{ id?: string }>(); // Define type for id parameter
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchCampaign = async () => {
        try {
          // Simulate fetching data from API
          console.log("Fetching campaign with ID:", id);

          setTimeout(() => {
            setCampaign({
              campaignName: "Dubai Property",
              startDate: "10-12-20",
              status: "Active",
              numbers: [
                "+971-7078787878787",
                "+971-7078787878787",
                "+971-7078787878787",
                "+971-7078787878787",
              ],
              message: "MESSAGE",
            });
            setLoading(false);
          }, 1000);

          // Uncomment and use actual API service
          // const response = await apiService.getCampaignById(id);
          // setCampaign(response.data);

        } catch (error) {
          console.error("Error fetching campaign:", error);
          setLoading(false);
        }
      };

      fetchCampaign();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!campaign) {
    return <div>No campaign data found.</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Campaign Details</h1>

      <div className="bg-white  max-w-2xl rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col space-y-4">
          <p className="text-xl">
            <strong>Campaign Name:</strong> {campaign.campaignName}
          </p>
          <p className="text-xl">
            <strong>Start date:</strong> {campaign.startDate}
          </p>
          <p className="text-xl">
            <strong>Status:</strong> {campaign.status}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">NUMBER</th>
              <th className="px-4 py-2 border">MESSAGE</th>
            </tr>
          </thead>
          <tbody>
            {campaign.numbers.map((number, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{number}</td>
                <td className="px-4 py-2 border">{campaign.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div>Showing 1 to 10 of 100 entries</div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-gray-300 rounded">Previous</button>
            <button className="px-2 py-1 bg-green-500 text-white rounded">
              1
            </button>
            <button className="px-2 py-1 bg-gray-300 rounded">2</button>
            <button className="px-2 py-1 bg-gray-300 rounded">3</button>
            <button className="px-2 py-1 bg-gray-300 rounded">4</button>
            <button className="px-2 py-1 bg-gray-300 rounded">5</button>
            <button className="px-2 py-1 bg-gray-300 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
