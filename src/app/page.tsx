import React from 'react'
import LoginForm from './LoginPage/page'
import { ToastContainer } from 'react-toastify'
import CampaignDetails from './Campaigns/[id]/page'
import TemplateList from './TemplateList/page'

export default function page() {
  return <>
  {/* <LoginForm/> */}
  {/* <AddCampaign/> */}
  <TemplateList/>
  <ToastContainer theme='dark'/>
  </>

}


