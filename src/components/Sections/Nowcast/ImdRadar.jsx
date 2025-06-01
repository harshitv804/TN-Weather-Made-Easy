import { useState, useEffect } from "react";
import Accordion from "../../Accordion/Accordion";
import { RotatingLines } from "react-loader-spinner";
import "./Nowcast.css";
import { PhotoView, PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const items = [
  { color: "blue", title: "Blue", description: "Light-Moderate precipitation." },
  { color: "orange", title: "Orange", description: "Moderate-Heavy precipitation." },
  { color: "red", title: "Red", description: "Heavy-Very Heavy precipitation." },
];

const ImdRadar = () => {
  const [selectedLoc, setSelectedLoc] = useState("Chennai");
  const [loading, setLoading] = useState(false);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  
  const [radarUrls, setRadarUrls] = useState({
    Chennai: [
          { url: "https://mausam.imd.gov.in/Radar/sri_cni.gif", range: "120Km Range (Intensity)" },
          { url: "https://mausam.imd.gov.in/Radar/ppi_cni.gif", range: "150Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppz_cni.gif", range: "500Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppv_cni.gif", range: "Wind Direction" },
        ],
        Karaikal: [
          { url: "https://mausam.imd.gov.in/Radar/ppi_kkl.gif", range: "150Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/sri_kkl.gif", range: "250Km Range (Intensity)" },
          { url: "https://mausam.imd.gov.in/Radar/ppz_kkl.gif", range: "500Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppv_kkl.gif", range: "Wind Direction" },
        ],
        Sriharikota: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_shr.gif", range: "250Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_shr.gif", range: "200Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_shr.gif", range: "500Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_shr.gif", range: "Wind Direction" },
    ],
    Kochi: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_koc.gif", range: "200Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_koc.gif", range: "160Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_koc.gif", range: "500Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_koc.gif", range: "Wind Direction" },
    ],
    Thiruvananthapuram: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_tvm.gif", range: "240Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_tvm.gif", range: "124Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_tvm.gif", range: "365Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_tvm.gif", range: "Wind Direction" },
    ]
  });

  useEffect(() => {
    const refreshImage = () => {
      setLoading(true);
      setRadarUrls({
        Chennai: [
          { url: "https://mausam.imd.gov.in/Radar/sri_cni.gif", range: "120Km Range (Intensity)" },
          { url: "https://mausam.imd.gov.in/Radar/ppi_cni.gif", range: "150Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppz_cni.gif", range: "500Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppv_cni.gif", range: "Wind Direction" },
        ],
        Karaikal: [
          { url: "https://mausam.imd.gov.in/Radar/ppi_kkl.gif", range: "150Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/sri_kkl.gif", range: "250Km Range (Intensity)" },
          { url: "https://mausam.imd.gov.in/Radar/ppz_kkl.gif", range: "500Km Range" },
          { url: "https://mausam.imd.gov.in/Radar/ppv_kkl.gif", range: "Wind Direction" },
        ],
        Sriharikota: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_shr.gif", range: "250Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_shr.gif", range: "200Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_shr.gif", range: "500Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_shr.gif", range: "Wind Direction" },
    ],
    Kochi: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_koc.gif", range: "200Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_koc.gif", range: "160Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_koc.gif", range: "500Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_koc.gif", range: "Wind Direction" },
    ],
    Thiruvananthapuram: [
      { url: "https://mausam.imd.gov.in/Radar/ppi_tvm.gif", range: "240Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/sri_tvm.gif", range: "124Km Range (Intensity)" },
      { url: "https://mausam.imd.gov.in/Radar/ppz_tvm.gif", range: "365Km Range" },
      { url: "https://mausam.imd.gov.in/Radar/ppv_tvm.gif", range: "Wind Direction" },
    ]
      });
      setTimeout(() => setLoading(false), 500);
    };

    const intervalId = setInterval(refreshImage, 600000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrTablet(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLocChange = (event) => {
    setSelectedLoc(event.target.value);
  };

  return (
    <>
      <div className="dropdown-container">
        <label htmlFor="location" className="dropdown-label">
          IMD Radar Location:
        </label>
        <select
          id="location"
          value={selectedLoc}
          onChange={handleLocChange}
          className="dropdown-select"
        >
          <option value="Chennai">Chennai</option>
          <option value="Karaikal">Karaikal</option>
          <option value="Sriharikota">Sriharikota</option>
          <option value="Kochi">Kochi</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        </select>
      </div>
      <div className="tipbox">
        <p style={{ margin: "0px", fontSize: "20px", paddingBottom: "10px" }}>
        ℹ️
        </p>
        <p style={{ margin: "0px", textAlign: "justify" }}>
        Presented below are the IMD Nowcast radar images, updated with a 20-minute delay. Each radar display illustrates the coverage area within a specific radius, allowing for real-time monitoring of weather conditions. Observing the wind flow direction will provide insights into the movement of cloud formations and potential weather changes in the region.
        </p>
        <div>
          <div className="tipbox">
          <strong><p>Rain Clouds:</p></strong>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px", fontSize: "16px" }}>
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
        </div>
        <div className="tipbox">
        <strong><p>Wind Direction:</p></strong>
        <p style={{ margin: "0px", textAlign: "justify" }}>
        The Wind direction maps shows the wind movement inside rain-bearing clouds (helps identify cyclones, wind shear, and turbulence). it shows wind speed and direction relative to the radar.
        </p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "8px", fontSize: "16px" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  Blue:
                </span>
                <span>Wind moving toward the radar.</span>
              </li>
              <li style={{ marginBottom: "8px", fontSize: "16px" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "orange",
                    textDecoration: "underline",
                  }}
                >
                  Orange:
                </span>
                <span>Wind moving away from the radar.</span>
              </li>
              </ul>
              </div>
      </div>
      <div className="imd-nowcast-accordion-grid">
        {radarUrls[selectedLoc].map((item, index) => (
          <Accordion key={index} title={item.range} expand={isDesktopOrTablet}>
            {loading ? (
              <RotatingLines
                strokeColor="#003366"
                visible={true}
                height="auto"
                width="30"
                strokeWidth="4"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            ) : (
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
                <PhotoView src={item.url}>
                  <img
                    className="clickable-image"
                    src={item.url}
                    alt={`${selectedLoc} ${item.range} Radar`}
                  />
                </PhotoView>
              </PhotoProvider>
            )}
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default ImdRadar;
