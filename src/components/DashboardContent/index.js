// an dashboard content component that renders the content of the dashboard

import React from 'react'
import './DashboardContent.css'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const DashboardContent = () => {
 
  return (
    <div className="dashboardContent">
      <div className="dashboardContent__main"></div>
    </div>
  )
}

export default DashboardContent
