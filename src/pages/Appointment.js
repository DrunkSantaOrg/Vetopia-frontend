import React from 'react'
import Sidebar from '../components/Sidebar'
import { Breadcrumb } from 'antd'

const Appointment = () => {
  return (
    <div className="main">
      
      <Sidebar />
      <div>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
      </div>
      {/* Add dashboard content here */}
    </div>
  )
}

export default Appointment
