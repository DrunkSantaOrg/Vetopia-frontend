import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__search">
        <input type="text" placeholder="Search" />
      </div>
      
      <div className="topbar__info">
        <div className="topbar__icons">
          <Link to="/mail">
            <span role="img" aria-label="Mail Icon">📧</span>
          </Link>

          <Link to="/notifications">
            <span role="img" aria-label="Notifications Icon">🔔</span>
          </Link>
        </div>

        <div className="topbar__profile">
          {/* <img src="path/to/avatar.jpg" alt="User Avatar" /> */}
          <div className="avator">JC</div>
          <span>Jane Cooper</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;