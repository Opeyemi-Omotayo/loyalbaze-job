import React from 'react';
import './Footer.css';
import iconcall from '../static/img/iconsax-bold-callcalling-1@2x.png';
import line14 from '../static/img/line-14-1@2x.png';
import iconsaxBoldHouse2 from '../static/img/iconsax-bold-house2-1@2x.png';

const Footer = () => {
  return <React.Fragment>
    <footer className="footer">
              <img className="line-14" src={line14} alt="Line 14" />
              <div className="flex-row-4">
                <div className="frame-1000004217">
                  <img className="icon" src={iconsaxBoldHouse2} alt="Iconsax/Bold/house2" />
                  <p className="x2nd-floor-the-garne ">
                    <span >2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</span>
                  </p>
                </div>
                <div className="loyalbaze-is-almost-here ">
                  <span >Loyalbaze is almost here.</span>
                </div>
                <div className="frame-1000004218">
                  <img className="icon" src={iconcall} alt="icon-call" />
                  <div className="phone ">
                    <span >+234 903 618 9485</span>
                  </div>
                </div>
              </div>
            </footer>
  </React.Fragment>
}

export default Footer
