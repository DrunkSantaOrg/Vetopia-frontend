import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import usePetOwnerData from "../../hooks/PetOwnerhook";
import './Setting.css';

const SettingComp = () => {
  const {fetchPetOwnerById} = usePetOwnerData();
  const [petOwner, setPetOwner] = useState(null);

  // Hardcoded ID for testing
  const petOwnerId = 1;

  useEffect(() => {
    const fetchPetOwnerData = async () => {
      const data = await fetchPetOwnerById(petOwnerId);
      if (data) {
        setPetOwner(data);
      }
    };
    fetchPetOwnerData();
  }, [fetchPetOwnerById, petOwnerId]);

  if (!petOwner) {
    return <div>Loading...</div>;
  }

  const secNavBarList = [
    'My Profile',
    'Notification',
    'Payment & Credits',
    'Password & Security',
  ];

  return (
      <div className="settings-main">
        <div className="second-nav-bar">
          {secNavBarList.map((item, index) => (
              <div key={index} className="second-nav-bar-item">{item}</div>
          ))}
        </div>
        <div className="maincontent">`
          <div className="maincontent-title">
            <div className="maincontent-title-item">My Profile</div>
            <Link to={'edit-profile'} state={{petOwner: petOwner}} className="edit-button">
              <span className='icon-Edit'></span>
              Edit
            </Link>
          </div>
          <div className="header">
            <div className="avatar">
              {/* Use initials from fetched data */}
              {petOwner.firstName[0].toUpperCase() + petOwner.lastName[0].toUpperCase()}
            </div>
            <div className="head-info">
              {/* Display fetched pet owner details */}
              <div className="head-name">{petOwner.firstName} {petOwner.lastName}</div>
              <div className="pet-owner">Pet Owner</div>
              {/* Assuming pets[0] is the main pet for display purposes */}
              {petOwner.pets && petOwner.pets.length > 0 && (
                  <div className="pet-owner-name">
                    <div className="pet-owner-name-item1">{petOwner.pets[0].type}</div>
                    :
                    <div className="pet-owner-name-item2">{petOwner.pets[0].name}</div>
                  </div>
              )}
            </div>
          </div>
          <div className="main-info">
            <div className="personalinfo">
              <div className="personalinfo-title">Personal Information</div>
              <div className="personalinfo-items-list">
                <div className="personalinfo-item">
                  <div className="personalinfo-item-title">First Name</div>
                  <div className="personalinfo-item-content">{petOwner.firstName}</div>
                </div>
                <div className="personalinfo-item">
                  <div className="personalinfo-item-title">Last Name</div>
                  <div className="personalinfo-item-content">{petOwner.lastName}</div>
                </div>
                <div className="personalinfo-item">
                  <div className="personalinfo-item-title">Email Address</div>
                  <div className="personalinfo-item-content">{petOwner.email}</div>
                </div>
                <div className="personalinfo-item">
                  <div className="personalinfo-item-title">Phone Number</div>
                  <div className="personalinfo-item-content">{petOwner.phoneNumber}</div>
                </div>
              </div>
            </div>
            <div className="addressinfo">
              <div className="addressinfo-title">Address</div>
              <div className="addressinfo-items-list">
                <div className="addressinfo-item mail">
                  <div className="addressinfo-item-title">Mailing Address</div>
                  <div className="addressinfo-item-content">{petOwner.mailingAddress}</div>
                </div>
                <div className="addressinfo-item">
                  <div className="addressinfo-item-title">City</div>
                  <div className="addressinfo-item-content">{petOwner.city}</div>
                </div>
                <div className="addressinfo-item">
                  <div className="addressinfo-item-title">State/Province</div>
                  <div className="addressinfo-item-content">{petOwner.province}</div>
                </div>
                <div className="addressinfo-item">
                  <div className="addressinfo-item-title">Postal Code</div>
                  <div className="addressinfo-item-content">{petOwner.postal}</div>
                </div>
                <div className="addressinfo-item">
                  <div className="addressinfo-item-title">Country/Region</div>
                  <div className="addressinfo-item-content">{/* Your country field here */}</div>
                </div>
                <div className="addressinfo-item billingAd">
                  <div className="addressinfo-item-title">Billing Address</div>
                  <div className="addressinfo-item-content">{petOwner.billingAddress}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SettingComp;
