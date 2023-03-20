import React, { useState } from "react";
import "./About.css";
import frame from "../static/img/frame-1@2x.png";
import star from "../static/img/star-2-1@2x.png";
import star2 from "../static/img/star-2-1@2x.png";
import star3 from "../static/img/star-4-2@2x.png";
import Input from "./Input";
import Section from "./Section";
import ConsultationInput from "./ConsultationInput";
import Modal from "./Modal";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
 
  const closeModalHandler = () => setShowModal(false);

  return (
    <React.Fragment>
      <div className="flex-row-1">
        <div className="ellipse-41"></div>
        <div className="flex-col">
          <div className="overlap-group6">
            <div className="overlap-group5">
              <div className="ellipse-40"></div>
              <h1 className="turn-your-best-custo ">
                Turn your best customers
              </h1>
              <h1 className="turn-your-best ">
                into <span className="loyalfans">loyal fans</span>
              </h1>
              <p className="loyalbazeempowers ">
                <span>
                  Loyalbaze, empowers businesses to offer digital, mobile-first
                  loyalty programs to their customers. With our AI Powered
                  platform, you can easily create and manage custom loyalty and
                  rewards programs, track customer engagement, and gain valuable
                  insights to improve your business. Sign up now to get early
                  access.
                </span>
              </p>
              <img className="frame" src={frame} alt="Frame" />
              <img className="star-2" src={star} alt="Star 2" />
            </div>
            <div className="frame-1000004215">
              <Input />
              <Modal show={showModal} onCancel={closeModalHandler}></Modal>
          <button className="get-early-access" onClick={openModalHandler}>
            Get early access
          </button>
            </div>
            <div className="ellipse-39"></div>
            <img className="star-3" src={star2} alt="Star 3" />
          </div>
          <div>
            <div className="overlap-group-container">
              <div className="g ">
                <span>G</span>
              </div>
              <div className="p ">
                <span>P</span>
              </div>
              <div className="s ">
                <span>S</span>
              </div>
              <div className="t ">
                <span>T</span>
              </div>
            </div>
            <div className="x57-joined ">
              <span>+57 Joined</span>
            </div>
          </div>
          
          
        </div>

        <img className="star-1" src={star3} alt="Star 1" />
      </div>
      <div className="org">
        <Section />
        <ConsultationInput />
      </div>
    </React.Fragment>
  );
};

export default About;
