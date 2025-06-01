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
const WindandHumidity = () => {
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
          Wind༄ and Dry Air🏜️
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
            Check for nearby thunderstorms in your area. If a storm is nearby,
            use this wind map to track cloud movement. Specifically use Low and Low-Mid Level winds. Where two winds
            meet—known as a convergence zone—the chance of thunderstorms
            increases. Wind dryness indicates humidity levels: wetter winds mean
            higher chances of cloud formation, while dry winds suggest a lower
            likelihood.
          </p>
        </div>
        <div className="wind-accordion-grid">
          <Accordion expand={true} title={"Low Level Winds (1.5 km Altitude)"}>
          <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Map to Open)
              </p>
            <iframe
              width="100%"
              height="400px"
              src="https://earth.nullschool.net/#current/wind/isobaric/850hPa/overlay=relative_humidity/orthographic=-280.05,10.86,3908"
              style={{ borderRadius: "15px", border: "1px solid #ccc" }}
            ></iframe>
          </Accordion>
          <Accordion expand={true} title={"Low-Mid Level Winds (3.0 km Altitude)"}>
          <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Map to Open)
              </p>
            <iframe
              width="100%"
              height="400px"
              src="https://earth.nullschool.net/#current/wind/isobaric/700hPa/overlay=relative_humidity/orthographic=-280.05,10.86,3908"
              style={{ borderRadius: "15px", border: "1px solid #ccc" }}
            ></iframe>
          </Accordion>
          <Accordion expand={true} title={"Mid Level Winds (5.5–6 km Altitude)"}>
          <p
                style={{
                  fontSize: "13px",
                  textAlign: "center",
                  margin: "0px 0px 10px 0px",
                }}
              >
                (Click the Map to Open)
              </p>
            <iframe
              width="100%"
              height="400px"
              src="https://earth.nullschool.net/#current/wind/isobaric/500hPa/overlay=relative_humidity/orthographic=-280.05,10.86,3908"
              style={{ borderRadius: "15px", border: "1px solid #ccc" }}
            ></iframe>
          </Accordion>
          <Accordion expand={false} title={"Dry Air (Tropical Tidbits)"}>
            <a
              href="https://www.tropicaltidbits.com/analysis/models/?model=gfs&region=india&pkg=midRH"
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
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default WindandHumidity;
