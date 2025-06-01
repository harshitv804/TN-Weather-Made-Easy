import Accordion from "../../Accordion/Accordion.jsx";
import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { items, items1, items2 } from "./mjoConstants.js";

const MJOITCZ = () => {
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
          MJO🔄 and El Niño☀️ La Niña🌧️
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
            The Madden-Julian Oscillation (MJO) is like a big, slow-moving wave
            of stormy and calm weather that travels around the Earth near the
            equator. When the MJO is near a region, there's a higher chance of
            rain and storms; when it moves away, the weather tends to get drier.
            When the MJO wave brings convection to a region, you can expect
            rainy weather. When it brings suppression, expect drier condition.
          </p>
        </div>
        <div className="wind-accordion-grid">
          <Accordion
            expand={true}
            title={"Forecasted Supression & Convection in MJO"}
          >
            <p
              style={{
                margin: "0px",
                textAlign: "justify",
                paddingBottom: "10px",
              }}
            >
              Look for the convection to move near/in the Indian Basin.
            </p>
            <PhotoProvider>
              <div>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {items1.map((item, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "8px", fontSize: "16px" }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          color: item.color,
                          textDecoration: "underline",
                        }}
                      >
                        {item.title}:
                      </span>
                      <span> {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Image to View!)
              </p>
              <PhotoView
                src={
                  "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/spatial_olrmap_CA_full.gif"
                }
              >
                <img
                  className="clickable-image"
                  src={
                    "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/spatial_olrmap_CA_full.gif"
                  }
                  alt="MJO OLR"
                />
              </PhotoView>
            </PhotoProvider>
          </Accordion>
          <Accordion expand={true} title={"Current and Forecasted MJO"}>
            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "8px", fontSize: "16px" }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: item.color,
                        textDecoration: "underline",
                      }}
                    >
                      {item.title}:
                    </span>
                    <span> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p
              style={{
                margin: "0px",
                textAlign: "justify",
                paddingBottom: "10px",
              }}
            >
              Tamil Nadu favours more rains when MJO comes to Phase 2, 3 and 4
              (if strong MJO). MJO will be strong when it's close to the center
              origin in the Image and vice-versa for Weak MJO.
            </p>
            <PhotoProvider>
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Image to View!)
              </p>
              <PhotoView
                src={
                  "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/ensplume_full.gif"
                }
              >
                <img
                  className="clickable-image"
                  src={
                    "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/ensplume_full.gif"
                  }
                  alt="MJO"
                />
              </PhotoView>
            </PhotoProvider>
          </Accordion>
          <Accordion expand={true} title={"El Niño and La Niña Effect"}>
            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items2.map((item, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "8px", fontSize: "16px" }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: item.color,
                        textDecoration: "underline",
                      }}
                    >
                      {item.title}:
                    </span>
                    <span> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p
              style={{
                margin: "0px",
                textAlign: "justify",
                paddingBottom: "10px",
              }}
            >
              El Niño and La Niña are climate patterns that originate in the tropical Pacific Ocean and have global impacts on weather, including in India. They are part of a cycle called the El Niño–Southern Oscillation (ENSO).
            </p>
            <PhotoProvider>
              <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Image to View!)
              </p>
              <PhotoView
                src={
                  "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_update/ssta_c.gif"
                }
              >
                <img
                  className="clickable-image"
                  src={
                    "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_update/ssta_c.gif"
                  }
                  alt="MJO"
                />
              </PhotoView>
            </PhotoProvider>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MJOITCZ;
