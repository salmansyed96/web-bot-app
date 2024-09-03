"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as ProgressPrimitive from "@radix-ui/react-progress";

// Define a TypeScript type for campaign data
interface Campaign {
  id: string;
  campaignName: string;
  startDate: string;
  status: string;
  numbers: string[];
  message: string;
}

// Utility to conditionally join class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Progress component for the loading line
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "fixed top-0 left-0 h-1 w-full bg-gray-200",
      
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-green-600 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const CampaignDetails = () => {
  // const { id } = useParams<{ id?: string }>(); // Define type for id parameter
  const params = useParams<{id? : string}>()
  const id = params?.id;
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [progressValue, setProgressValue] = useState<number>(0);


  useEffect(() => {
    if (id) {
      const fetchCampaign = async () => {
        try {
          console.log("Fetching campaign with ID:", id);

          // Simulate progress bar loading
          let progressInterval = setInterval(() => {
            setProgressValue((prev) => (prev < 90 ? prev + 10 : prev));
          }, 100);

          setTimeout(() => {
            setCampaign({
              id: "dkdkdkd",
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
            setProgressValue(100);
            clearInterval(progressInterval);
          }, 1000);

        } catch (error) {
          console.error("Error fetching campaign:", error);
          setLoading(false);
          setProgressValue(0);
        }
      };

      fetchCampaign();
    }
  }, [id]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {loading && <Progress value={progressValue} />}
      <h1 className="text-3xl font-bold mb-6">Campaign Details</h1>

      <div className="bg-white max-w-2xl rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col space-y-4">
          <p className="text-xl">
            <strong>Campaign Name:</strong> {campaign?.campaignName}
          </p>
          <p className="text-xl">
            <strong>Start date:</strong> {campaign?.startDate}
          </p>
          <p className="text-xl">
            <strong>Status:</strong> {campaign?.status}
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
            {campaign?.numbers.map((number, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{number}</td>
                <td className="px-4 py-2 border">{campaign?.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div>Showing 1 to 10 of 100 entries</div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-gray-300 rounded">Previous</button>
            <button className="px-2 py-1 bg-green-500 text-white rounded">1</button>
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
