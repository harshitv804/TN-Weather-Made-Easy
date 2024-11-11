import Accordion from "../../Accordion/Accordion.jsx";
import { useState, useEffect } from "react";
const items = [
  {
    color: "brown",
    title: "Brown",
    description: "Dry Air (Less Chances Rain)",
  },
  { color: "cyan", title: "Cyan", description: "Wet Air (More Chances of Rain)" },
];
const Forecast = () => {
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
          Rain🌧️ Forecast🔮
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
Use the Windy app for rain forecasts with popular models like ECMWF (best for mid-range) and GFS (ideal for short-term). Additional models are available on Tropical Tidbits. Rely on Forecast only for precaution, real-time Rainfall quantum is only known by using Nowcast and wind convergence. 
          </p>
        </div>
        <div className="wind-accordion-grid">
          <Accordion expand={true} title={"Forecast (ECMWF Model)"}>
            <iframe
              width="100%"
              height="350px"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=6&overlay=clouds&product=ecmwf&level=surface&lat=11.269&lon=82.561&message=true"
              style={{ borderRadius: "15px", border: "1px solid #ccc" }}
            ></iframe>
          </Accordion>
          <Accordion expand={true} title={"Ensemble Forecast"}>
          <a
              href="https://meteologix.com/in/forecast/ensemble"
              target="_blank"
            >
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Image to Open)
              </p>
              <img
                className="clickable-image"
                style={{ width: "300px" }}
                src={"mx-logo.png"}
              />
            </a>
            <p
            style={{
              margin: "0px",
              textAlign: "justify",
              paddingBottom: "10px",
            }}
          >
Inside the website enter your city and get forecast for Temperature, Precipitation etc.
          </p>
          </Accordion>
          <Accordion expand={isDesktopOrTablet} title={"Forecast (Tropical Tidbits)"}>
            <a
              href="https://www.tropicaltidbits.com/analysis/models/?model=ecmwf&region=india&pkg=mslp_pcpn"
              target="_blank"
            >
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Image to Open)
              </p>
              <img
                className="clickable-image"
                style={{ width: "250px" }}
                src={"tropical-tit.png"}
              />
            </a>
            <p
            style={{
              margin: "0px",
              textAlign: "justify",
              paddingBottom: "10px",
            }}
          >
Inside the website move the slider to see the weather conditions at each forecast time.
          </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
