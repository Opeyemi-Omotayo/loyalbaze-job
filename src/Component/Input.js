import React from 'react';
import './Input.css';
import icon1 from '../static/img/iconsax-linear-profilecircle-1@2x.png';
import icon2 from '../static/img/mail-01-1@2x.png';

const Input = () => {
  return <React.Fragment>
    <div className='frame-100000420-1 '>
      <img className="icon-1" src={icon1} alt="Iconsax/Linear/profilecircle" />
      <div className="tell-us-your-name ">
        
        <input type='text' className='input' placeholder='Tell us your name'/>
      </div>
    </div>
    <div className='frame-100000420-1 '>
      <img className="icon-1" src={icon2} alt="Iconsax/Linear/profilecircle" />
      <div className="tell-us-your-name ">
        
        <input type='text' className='input' placeholder='Enter your email address'/>
      </div>
    </div>
  </React.Fragment>
}

export default Input
