import React from 'react';
import './ConsultationInput.css';
import star42 from '../static/img/star-4-2@2x.png';


const ConsultationInput = () => {
  return <React.Fragment>
    <div className="flex-col-3">
                <div className="consultation">
                  <p >
                    <span className="book-a-consultation-with-us">Book a Consultation with us</span>
                  </p>
                  <div className="enter-your-full-name ">
                  <input type='text' className='inputt' placeholder='Enter your full name'/>
                  </div>
                  <div className="frame-1000004222-item ">
                  <input type='text' className='inputt' placeholder='Enter your work email'/>
                  </div>
                  <div className="frame-1000004222-item ">
                  <input type='number' className='inputt' placeholder='Mobile Number'/>
                  </div>
                  <div className="frame-1000004222-item ">
                  <input type='text' className='inputt' placeholder='Company Name'/>
                  </div>
                    <div className="select-country ">
                    <select type='text' className='inputt' placeholder='Select Country'>
                        <option value='Select Country'>Select Country</option>
                        <option value='South Africa'>Nigeria</option>
                        <option value='Zambia'>Zambia</option>
                        </select>
                    </div>
                  <div className="drop-a-message ">
                  <input type='text' className='inputt message' placeholder='Drop amessage....'/>
                  </div>
                    <div >
                      <span className="send-request">Send Request</span>
                    </div>
                </div>
                <img className="star-10" src={star42} alt="Star 4" />
              </div>
  </React.Fragment>
}

export default ConsultationInput
