import React from 'react'
import { Link } from 'react-router-dom'
import './Setting.css'

const SettingComp = () => {
  const secNavBarList = [
    'My Profile',
    'Notification',
    'Payment & Credits',
    'Password & Security',
  ]
  return (
    <div className="settings-main">
      <div className="second-nav-bar">
        {secNavBarList.map((item) => {
          return <div className="second-nav-bar-item">{item}</div>
        })}
      </div>
      <div className="maincontent">
        <div className="maincontent-title">
          <div className="maincontent-title-item">My Profile</div>
          <Link to={'edit-profile'} className="edit-button">
            <span className='icon-Edit'></span>
            Edit</Link>
        </div>
        <div className="header">
          <div className="avatar">
            {/* temporatily use name to replace the Avatar imgs */}
            AB
          </div>
          <div className="head-info">
            <div className="head-name">Jane Cooper</div>
            <div className="pet-owner">Pet Owner</div>
            <div className="pet-owner-name">
              <div className="pet-owner-name-item1">Dog</div>:
              <div className="pet-owner-name-item2">Snow</div>
            </div>
          </div>
        </div>
        <div className="main-info">
          <div className="personalinfo">
            <div className="personalinfo-title">Personal Information</div>
            <div className="personalinfo-items-list">
              <div className="personalinfo-item">
                <div className="personalinfo-item-title">First Name</div>
                <div className="personalinfo-item-content">Jane</div>
              </div>
              <div className="personalinfo-item">
                <div className="personalinfo-item-title">Last Name</div>
                <div className="personalinfo-item-content">Cooper</div>
              </div>
              <div className="personalinfo-item">
                <div className="personalinfo-item-title">Email Address</div>
                <div className="personalinfo-item-content">
                  Janecooper1@gmail.com
                </div>
              </div>
              <div className="personalinfo-item">
                <div className="personalinfo-item-title">Phone Number</div>
                <div className="personalinfo-item-content">+1 1234567890</div>
              </div>
            </div>
          </div>

          <div className="addressinfo">
            <div className="addressinfo-title">Address</div>
            <div className="addressinfo-items-list">
              <div className="addressinfo-item mail">
                <div className="addressinfo-item-title">
                  Mailing Address
                </div>
                <div className="addressinfo-item-content">
                  Unit-001, 2049 50 St
                </div>
              </div>
              <div className="addressinfo-item">
                <div className="addressinfo-item-title">City</div>
                <div className="addressinfo-item-content">Drayton Valley</div>
              </div>
              <div className="addressinfo-item">
                <div className="addressinfo-item-title">State/Province</div>
                <div className="addressinfo-item-content">Alberta</div>
              </div>
              <div className="addressinfo-item">
                <div className="addressinfo-item-title">Postal Code</div>
                <div className="addressinfo-item-content">T7A 1S5</div>
              </div>
              <div className="addressinfo-item">
                <div className="addressinfo-item-title">Country/Region</div>
                <div className="addressinfo-item-content">Canada</div>
              </div>
              <div className="addressinfo-item billingAd">
                <div className="addressinfo-item-title">Billing Address</div>
                <div className="addressinfo-item-content">
                  Same as the mailing address above
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingComp
