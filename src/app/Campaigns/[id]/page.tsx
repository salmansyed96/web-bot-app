'use client'
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import { apiService } from '../../Service/apiService';

const CampaignDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
  const [campaign, setCampaign] = useState<any>(null);

  // useEffect(() => {
  //   // const fetchCampaign = async () => {
  //   //   try {
  //   //     const response = await apiService.getCampaignById(id as string);
  //   //     setCampaign(response.data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching campaign:', error);
  //   //   }
  //   // };

  //   // if (id) {
  //   //   fetchCampaign();
  //   // }
  // }, [id]);


  useEffect(()=>{
// console.log(id)
console.log("qejhjkdh")
  },[])
  // if (!campaign) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1> Im in update one page </h1>
    </div>
    // <div>
    //   <h1>Campaign Details</h1>
    //   <p><strong>Campaign Name:</strong> {campaign.campaignName}</p>
    //   <p><strong>Message:</strong> {campaign.message}</p>
    //   <p><strong>Numbers:</strong> {campaign.numbers}</p>
    //   <p><strong>Status:</strong> {campaign.status}</p>
    //   <p><strong>Created By:</strong> {campaign.createdBy}</p>
    //   <p><strong>Created Date:</strong> {campaign.createdDate}</p>
    //   {/* Add more fields as needed */}
    // </div>
  );
};

export default CampaignDetails;