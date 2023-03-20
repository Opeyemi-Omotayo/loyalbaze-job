import React from 'react';
import './Section.css';
import highlight1 from '../static/img/highlight-1-1@2x.png';
import star32 from '../static/img/star-2-1@2x.png';
import star5 from '../static/img/star-4-2@2x.png';
import line6 from '../static/img/line-6-1@2x.png';

const Section = () => {
  return <React.Fragment>
    <div className='section'>
    <div className="flex-row-3">
                  <div className="ellipse-39-1"></div>
                  <img className="highlight-1" src={highlight1} alt="Highlight 1" />
                </div>
                <img className="star-3-1" src={star32} alt="Star 3" />
                <div className="overlap-group7">
                  <img className="star-5" src={star5} alt="Star 5" />
                  <div className="frame-1000004229">
                    <div className="priority-access ">
                      <span className='priority-text' >Priority Access</span>
                    </div>
                    <img className="line-6" src={line6} alt="Line 6" />
                  </div>
                  <p className="get-ready-to-revolut ">
                    <span className="get-ready-to-revolut-text ">Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</span>
                  </p>
                  
                  
                </div>
    </div>
  </React.Fragment>
}

export default Section
