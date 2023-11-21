import React from "react";
import Sidebar from "/src/components/publicComponents/Sidebar";
import Topbar from "/src/components/publicComponents/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AddPet from "/src/components/AddPet";
import "./Dashboard.css";


const AddPet = () => {
    return (
      <div className="main">
          <Sidebar />
          <div className='mainContent'>
              <Topbar />
              <AddPetComp />
          </div>
          
        {/* Add dashboard content here */}
      </div>
    );
  };
  
  export default AddPet;