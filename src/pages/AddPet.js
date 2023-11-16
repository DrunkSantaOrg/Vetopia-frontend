import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AddPetComp from "../components/AddPetComp";
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