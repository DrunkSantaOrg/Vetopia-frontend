import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import LogoVetopia from '../../../img/Logo.png'
import imgBd from '../../../img/icons_db.svg'
import imgHr from '../../../img/icons_hr.svg'
import imgAp from '../../../img/icons_ap.svg'
// import imgLg from '../img/icons_lg.svg'

import './Sidebar.css';
const Sidebar = () => {
    const location = useLocation();
    return (

    <div class="sidebar">
        <div class="logobox">
          <img src={LogoVetopia} alt='avator'  />
          <h3>Vetopia</h3>
        </div>
        
        <nav className="navigation">
        <Link to={'dashboard'} class={location.pathname.includes('dashboard') ? 'link-style active' : 'link-style'}>
            <div>
                <span className='icon-Dashboard'></span>
                <p>Dashboard</p>
            </div>
        </Link>
        <Link to={'health-records'} class={location.pathname.includes('health-records') ? 'link-style active' : 'link-style'}>
            <div>
            <span className='icon-Patient'></span>
                <p>Health Records</p>
            </div>
        </Link>
        <Link to={'appointment'} class={location.pathname.includes('appointment') ? 'link-style active' : 'link-style'}>
            <div>
            <span className='icon-Calendar'></span>
                <p>Appointments</p>
            </div>
        </Link>
        {/* Add other sidebar links here */}
        </nav>

        <div class="logout">            
            <span className='icon-Logout'></span>
            <p>logout</p>
        </div>
    </div>

    
  );
};

export default Sidebar;