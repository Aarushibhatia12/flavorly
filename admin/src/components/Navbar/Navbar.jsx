import React from 'react';
import './Navbar.css';
import profileImage from '../../assets/profile_image.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <h1 className='main-logo'>Flavorly.</h1>
          <h5 className='sub-logo'>Admin Panel</h5>
        </div>
        <img className='profile' src={profileImage} alt="Profile" />
    </div>
  )
}

export default Navbar;
