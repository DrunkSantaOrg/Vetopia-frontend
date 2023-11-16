import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardContent from '../components/DashboardContent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="main">
        <Sidebar />
        <div className='mainContent'>
            <Topbar />
            <DashboardContent />
        </div>
        
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;