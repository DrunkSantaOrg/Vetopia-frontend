import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import './HeadnBread.css'

const HeadnBread = () => {
  const location = useLocation()
  const titlelist = location.pathname.slice(1).split('/')
  
  return (
    <div className="dashboardContent__header">
      <Breadcrumb
        className="naviInfo"
        // 
        items={[
          // use map to render the breadcrumb
          ...titlelist.map((title, index) => {
            return {
              title: <Link to={titlelist.slice(1).join('/')}>{title}</Link>,
            }
          }),
        ]}
      />
      <div className="headName">
        {titlelist[titlelist.length - 1].charAt(0).toUpperCase() +
          titlelist[titlelist.length - 1].slice(1)}
        {/* 去除/符号*/}
      </div>
    </div>
  )
}

export default HeadnBread
