import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ShowPetComp from '../components/ShowPetComp'

import './Dashboard.css'

const ShowPet = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="mainContent">
        <Topbar />
        <ShowPetComp />
      </div>

      {/* Add dashboard content here */}
    </div>
  )
}

export default ShowPet
