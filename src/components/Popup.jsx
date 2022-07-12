import React, { useRef, useEffect } from "react";
import video from "../assets/promo.mov";

const Popup = ({ active, func }) => {
  return (
    <div className={`${active ? "active" : ""} popup`} onClick={func}>
      <div className="popup-content">
        <video src={video} controls></video>
      </div>
    </div>
  );
};
export default Popup;
