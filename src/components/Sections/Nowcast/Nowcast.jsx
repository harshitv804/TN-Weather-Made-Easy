import { useState, useEffect } from "react";
import "./Nowcast.css";
import ImdRadar from "./ImdRadar.jsx";
import ThirdPartyRadar from "./ThirdPartyRadar.jsx";

const RadarLocDropdown = () => {
  return (
    <div className="container">
      <div className="nowcast-container glass-morph">
      <h2 style={{textAlign:'center',color:'#003366',margin:'0px'}}>Nowcast (Real-Time🕒)</h2>
        <ImdRadar/>
        <ThirdPartyRadar/>
      </div>
    </div>
  );
};

export default RadarLocDropdown;
