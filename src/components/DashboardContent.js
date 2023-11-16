// an dashboard content component that renders the content of the dashboard

import React from 'react'
import './DashboardContent.css'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const DashboardContent = () => {
  const location = useLocation()
  const titlelist = location.pathname.slice(1).split('/')
  return (
    <div className="dashboardContent">
      <div className="dashboardContent__header">
        <Breadcrumb className="naviInfo"
          items={[
            {
              title: 'Home',
            },
            // use map to render the breadcrumb
            ...titlelist.map((title, index) => {
              return {
                title: <a href="">{title}</a>,
              }
            })
          ]}
        />
        <div className="headName">
          {titlelist[titlelist.length - 1].charAt(0).toUpperCase() +
            titlelist[titlelist.length - 1].slice(1)}
        </div>
      </div>
      <div className="dashboardContent__main"></div>
    </div>
  )
}

export default DashboardContent
