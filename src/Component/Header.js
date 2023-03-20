import React from 'react';
import './Header.css';
//import logo from '../static/img/iconsax-bold-heart-1@2x.png'

const Header = () => {
 

  return <React.Fragment>
    <div className='header'>
<div className='loyalBaze'>
    <p className='l'>LoyalBaze</p>
    {/* <img src={logo} alt='logo'/> */}

</div>
<div className='access' >Get Priority Access</div>
    </div>
  </React.Fragment>
}

export default Header
