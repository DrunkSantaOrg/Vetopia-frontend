import React from 'react'
import { Router, Route, Routes, Link } from 'react-router-dom';
import './HealthRecord.css';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';


const HealthRecord = () => {
  const location = useLocation();
  
  const titlelist = location.pathname.slice(1).split('/');
  // replace -
  titlelist[titlelist.length - 1] = titlelist[titlelist.length - 1].replace(/-/g, '');
  return (
    <div class="main-container">
      
      <div class="content">
        <div class="image-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9ec88b-1043-4518-820b-fcdc9c6939f3?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
            class="image"
          />
          <div class="message">
            Currently there is no pet data to display. <br /> Go ahead and add
            one!
          </div>
        </div>
        <Link to={'add-pet'} class="add-pet-form">
          <div class="add-pet-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/912e55fe-0284-4678-bd3b-1c49d4ed7d0a?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
              class="add-pet-image"
            />
            <div to="/health-records/add-pet" class="add-pet-button">Add pet</div>
          </div>
        </Link>
      </div>
    </div>
  );
};



export default HealthRecord;
