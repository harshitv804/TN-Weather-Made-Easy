import Accordion from "../../Accordion/Accordion.jsx";
import { useState, useEffect } from "react";
import EasterlyEnsemble from "./EasterlyEnsemble.jsx";

const TropicalCyclone = () => {
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrTablet(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container">
      <div className="nowcast-container glass-morph">
        <h2
          style={{
            textAlign: "center",
            color: "#003366",
            margin: "0px",
            marginBottom: "15px",
          }}
        >
          Tropical Cyclone🌀
        </h2>
        <div className="tipbox">
          <p style={{ margin: "0px", fontSize: "20px", paddingBottom: "10px" }}>
            ℹ️
          </p>
          <p
            style={{
              margin: "0px",
              textAlign: "justify",
              paddingBottom: "10px",
            }}
          >
            Use the Windy app for Cyclone forecasts with popular models like ECMWF Ensemble
            (best for mid-range) and GFS (ideal for short-term). For optimal accuracy, rely
            on Forecast for precaution and Nowcast with wind convergence for
            real-time updates. Wind shear is when the wind is blowing one way down low, but a different way up high. If the wind shear is high it will affect the Low Pressure from intensifying. The dots with path in the ECMWF Ensemble shows the probability of LowPressure/Cyclone striking and its intensification.
          </p>
        </div>
        <div className="wind-accordion-grid">
          <Accordion expand={true} title={"ECMWF (Cyclone Ensemble)"}>
          <p
            style={{
              margin: "0px",
              textAlign: "justify",
              paddingBottom: "10px",
            }}
          >
The coloured dots with path in the ECMWF Ensemble shows the probability of LowPressure/Cyclone striking and its intensification.
          </p>
            <EasterlyEnsemble />
          </Accordion>
          <Accordion expand={true} title={"Forecast (GFS Model)"}>
            <iframe
              width="100%"
              height="350px"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=6&overlay=clouds&product=gfs&level=surface&lat=11.269&lon=82.561&message=true"
              style={{ borderRadius: "15px", border: "1px solid #ccc" }}
            ></iframe>
          </Accordion>
          <Accordion
            expand={isDesktopOrTablet}
            title={"Cyclone Tracking (Weather Nerds, JTWC)"}
          >
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                margin: "0px 0px 10px 0px",
              }}
            >
              (Click the Images to View the Website!)
            </p>
            <a
              href="https://www.weathernerds.org/tc_guidance/"
              target="_blank"
            >
            <div className="grid-item glass-morph">
              <div className="profile-pic">
                <img
                  src="tropical-tit.png"
                  alt="Profile"
                />
              </div>
              <div className="profile-name">
                <h4>Weather Nerds</h4>
              </div>
            </div>
            </a>

            <a
              href="https://www.metoc.navy.mil/jtwc/jtwc.html"
              target="_blank"
            >
                            <div className="grid-item glass-morph" style={{marginTop:'15px'}}>
              <div className="profile-pic">
                <img
                  src="jtwc.png"
                  alt="Profile"
                />
              </div>
              <div className="profile-name">
                <h4>JTWC</h4>
              </div>
            </div>
            </a>
            <a
              href="https://www.tropicaltidbits.com/analysis/models/?model=gfs&region=india&pkg=shear&runtime=2024110400&fh=0"
              target="_blank"
            >
                            <div className="grid-item glass-morph" style={{marginTop:'15px'}}>
              <div className="profile-pic">
                <img
                  src="jtwc.png"
                  alt="Profile"
                />
              </div>
              <div className="profile-name">
                <h4>Wind Shear (Tropical Tidbits)</h4>
              </div>
            </div>
            </a>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default TropicalCyclone;
