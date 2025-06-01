import './Nowcast.css'
const ThirdPartyRadar = () => {
  return (
    <>
      <h4>3rd Party Radars (Tamil Nadu):</h4>
      <div className="third-party-radar-grid-container">
        <a href='https://www.windy.com/-Satellite-satellite?satellite,11.559,79.565,8' target="_blank" rel="noopener noreferrer"><div className="third-party-radar-box1">
          <h3>Windy</h3>              <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              margin: "0px 0px 10px 0px",
            }}
          >
            (Click to Open!)
          </p></div></a>
        <a href='https://www.accuweather.com/en/in/chennai/206671/weather-radar/206671' target="_blank" rel="noopener noreferrer"><div className="third-party-radar-box2"><h3>AccuWeather</h3>              <p
          style={{
            fontSize: "13px",
            textAlign: "center",
            margin: "0px 0px 10px 0px",
          }}
        >
          (Click to Open!)
        </p></div></a>
        <a href='https://www.rain-alarm.com/' target="_blank" rel="noopener noreferrer"><div className="third-party-radar-box3"><h3>Rain Alarm</h3>              <p
          style={{
            fontSize: "13px",
            textAlign: "center",
            margin: "0px 0px 10px 0px",
          }}
        >
          (Click to Open!)
        </p></div></a>
        <a href='https://zoom.earth/maps/satellite/#view=10.72416,78.30461,8z/overlays=wind' target="_blank" rel="noopener noreferrer"><div className="third-party-radar-box4"><h3>Zoom Earth</h3>              <p
          style={{
            fontSize: "13px",
            textAlign: "center",
            margin: "0px 0px 10px 0px",
          }}
        >
          (Click to Open!)
        </p></div></a>
      </div>
    </>
  );
};

export default ThirdPartyRadar;