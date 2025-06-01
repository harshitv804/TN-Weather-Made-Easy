import BloggerGrid from "./BloggerGrid";
const WeatherBloggers = () => {
  return (
    <div className="container">
      <div className="nowcast-container glass-morph">
        <h2 style={{ textAlign: 'center', color: '#003366', margin: '0px', marginBottom: '15px' }}>Trusted✅ Weather Bloggers</h2>
        <div className="tipbox">
          <p style={{ margin: "0px", fontSize: "20px", paddingBottom: "10px" }}>
            ℹ️
          </p>
          <p style={{ margin: "0px", textAlign: "justify", paddingBottom: '10px' }}>
            Here are some popular and trusted weather bloggers you can follow for reliable forecasts and nowcasts. Find them on Facebook and X.
          </p>
        </div>
        <BloggerGrid />
      </div>
    </div>
  );
};

export default WeatherBloggers;
