import TwitterButtons from "../../TwitterButtons";
import BloggerGrid from "./BloggerGrid";
const WeatherBloggers = () => {
  return (
    <div className="container">
      <div className="nowcast-container glass-morph">
      <h2 style={{textAlign:'center',color:'#003366',margin:'0px',marginBottom:'15px'}}>Trusted✅ Weather Bloggers</h2>
      <div className="tipbox">
        <p style={{ margin: "0px", fontSize: "20px", paddingBottom: "10px" }}>
        ℹ️
        </p>
        <p style={{ margin: "0px", textAlign: "justify",paddingBottom:'10px' }}>
        Here are some popular and trusted weather bloggers you can follow for reliable forecasts and nowcasts. Find them on Facebook and X.
        </p>
        </div>
        <BloggerGrid/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div className="tipbox" style={{width:'95%'}}>
        <p style={{ margin: "0px", fontSize: "20px", paddingBottom: "10px" }}>
        ℹ️
        </p>
        <p style={{ margin: "0px", textAlign: "justify",paddingBottom:'10px' }}>
          Tutorial on TN Weather 101. Covers everything needed for a beginner weather enthusiast especially for TN Weather.
        </p>
        </div>
        <iframe width="auto" height="315" src="https://www.youtube-nocookie.com/embed/DV3TeIK62qI?si=kTXKSawPE9KYRT-z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true' style={{ borderRadius: "15px", border: "1px solid #ccc" }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default WeatherBloggers;
