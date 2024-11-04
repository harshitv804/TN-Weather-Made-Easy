import Accordion from "../../Accordion/Accordion.jsx";
import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { items, items1 } from "./mjoConstants.js";

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
          MJO🔄, ITCZ〰
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
          <p
            style={{
              margin: "0px",
              textAlign: "justify",
              paddingBottom: "10px",
            }}
          >
            ITCZ like a big, warm belt around the Earth where winds from North
            and South converge. It's a zone of converging winds near the equator
            which is warm and moist where, it creates a lot of clouds and rain.
            If it's in TN region it will create extra rains. Also helps in
            sterring cyclone. Example:
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
            <PhotoView src={"itcz-tn.png"}>
              <img
                style={{ width: "150px" }}
                className="clickable-image"
                src={"itcz-tn.png"}
                alt="MJO"
              />
            </PhotoView>
          </PhotoProvider>
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
                  "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/spatial_olrmap_full.gif"
                }
              >
                <img
                  className="clickable-image"
                  src={
                    "https://www.cpc.ncep.noaa.gov/products/precip/CWlink/MJO/spatial_olrmap_full.gif"
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
          <Accordion expand={isDesktopOrTablet} title={"ITCZ Finder"}>
            {" "}
            <p
              style={{
                margin: "0px",
                textAlign: "justify",
                paddingBottom: "10px",
              }}
            >
              Look for zone of converging winds or clouds near the equator which creates a lot of clouds and rain in that zone. More rains if the zone is near TN. For cyclone to favour towards TN, ITCZ must be below India and multiple factors are involved.
            </p>
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
              href="https://zoom.earth/maps/satellite/#view=6.515,81.029,6z/overlays=wind"
              target="_blank"
            >
              <div className="grid-item glass-morph">
                <div className="profile-pic">
                  <img src="zoom-earth.png" />
                </div>
                <div className="profile-name">
                  <h4>Zoom Earth</h4>
                </div>
              </div>
            </a>
            <a
              href="https://earth.nullschool.net/#current/wind/surface/level/overlay=total_precipitable_water/orthographic=-279.81,7.82,2657"
              target="_blank"
            >
              <div
                className="grid-item glass-morph"
                style={{ marginTop: "15px" }}
              >
                <div className="profile-pic">
                  <img src="nullearth.png" />
                </div>
                <div className="profile-name">
                  <h4>Earth Null School</h4>
                </div>
              </div>
            </a>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MJOITCZ;
