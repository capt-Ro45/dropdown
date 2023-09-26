import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="Dropdown">
      <div className="Dropdown" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="frame-parent">
          <div className="products-parent">
            <div className="products">Products</div>
            <img className="frame-icon" alt="" src="/frame-icon/frame.png" />
          </div>
          <div className="products-parent">
            <div className="products">Solutions</div>
            <img className="frame-icon" alt="" src="/frame-icon/frame.png" />
          </div>
          <div className="products-parent">
            <div className="products">Resources</div>
            <img className="frame-icon" alt="" src="/frame-icon/frame2.png" />
          </div>
          <div className="products-parent">
            <div className="products">Pricing</div>
            <img className="frame-icon" alt="" src="/frame-icon/frame3.png" />
          </div>
        </div>
        <div className="rectangle-group">
          <div className="group-item" />
          <div className="help" >
            Help
          </div>
          <div className="learn" >
            Learn
          </div>
          <div className="rectangle-container">
            <div className="group-inner" />
            <div className="help-center-parent">
              <div className="help-center">
                <span>Help Center</span>
              </div>
              <div
                className="learn-how-to"
                style={{ fontWeight: 400, textAlign: "left" }}
              >
                Learn how to sign up, install and use our products.
              </div>
              <img
                className="group-icon"
                alt=""
                src="/group-icon/group-1.png"
              />
            </div>
          </div>
          <div className="group-div">
            <div className="rectangle-div" />
            <div className="help-center-parent">
              <div className="help-center">
                <span>Podcasts</span>
              </div>
              <div
                className="learn-how-to"
                style={{ fontWeight: 400, textAlign: "left" }}
              >
                Learn how to sign up, install and use our products.
              </div>
              <img
                className="group-icon"
                alt=""
                src="/group-icon/group-11.png"
              />
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="rectangle-div" />
            <div className="help-center-parent">
              <div className="help-center">
                <span>Community Forum</span>
              </div>
              <div
                className="learn-how-to"
                style={{ fontWeight: 400, textAlign: "left" }}
              >
                Learn, share and connect with other users.
              </div>
              <img
                className="group-icon"
                alt=""
                src="/group-icon/group-12.png"
              />
            </div>
          </div>
          <div className="rectangle-parent2">
            <div className="rectangle-div" />
            <div className="help-center-parent">
              <div className="help-center">
                <span>Community Forum</span>
              </div>
              <div
                className="learn-how-to"
                style={{ fontWeight: 400, textAlign: "left" }}
              >
                Learn, share and connect with other users.
              </div>
              <img
                className="group-icon"
                alt=""
                src="/group-icon/group-13.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
