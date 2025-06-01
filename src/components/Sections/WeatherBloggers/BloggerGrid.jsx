import './BloggerGrid.css';
import TwitterButtons from '../../TwitterButtons';

const BloggerGrid = () => {
  return (
<div className="grid-container">
  {[
    {
      name: "Chennai Weather",
      img: "https://pbs.twimg.com/profile_images/1720335108010287104/tnofjhqa_400x400.jpg",
      link: "https://twitter.com/chennaiweather",
    },
    {
      name: "TN Weatherman",
      img: "https://pbs.twimg.com/profile_images/1791767915219349504/bA1EhXeJ_400x400.jpg",
      link: "https://twitter.com/praddy06",
    },
    {
      name: "Sel",
      img: "https://pbs.twimg.com/profile_images/1688795011935252480/0tnRcSlB_400x400.jpg",
      link: "https://twitter.com/Selwyyyyn",
    },
    {
      name: "MasRainman",
      img: "https://pbs.twimg.com/profile_images/1610112612230103040/l4QiGFt__400x400.jpg",
      link: "https://twitter.com/MasRainman",
    },
    {
      name: "COMK",
      img: "https://pbs.twimg.com/profile_images/1559324742280044546/Heim0lcX_400x400.jpg",
      link: "https://twitter.com/ChennaiRains",
    },
    {
      name: "Hrishi Jawahar",
      img: "https://pbs.twimg.com/profile_images/1691787239552897024/55MnsBVI_400x400.jpg",
      link: "https://twitter.com/jhrishi2",
    },
    {
      name: "Gokul Tamilselvam",
      img: "https://pbs.twimg.com/profile_images/1920359262494011392/3SthpPI1_400x400.jpg",
      link: "https://twitter.com/Gokul46978057",
    },
    {
      name: "Rainstorm",
      img: "https://pbs.twimg.com/profile_images/1732087371234246656/Yme1RChm_400x400.jpg",
      link: "https://twitter.com/RainStorm_TN",
    },
    {
      name: "Chennai Weatherman",
      img: "https://pbs.twimg.com/profile_images/1822596250966847488/THE2anmP_400x400.jpg",
      link: "https://twitter.com/chennaisweather",
    },
    {
      name: "IMD Kerla (Official)",
      img: "https://pbs.twimg.com/profile_images/1862569351825547265/z5fyUo5l_400x400.jpg",
      link: "https://twitter.com/imd_trivandrum",
    },
    {
      name: "IMD TamilNadu (Official)",
      img: "https://pbs.twimg.com/profile_images/1862569351825547265/z5fyUo5l_400x400.jpg",
      link: "https://twitter.com/ChennaiRmc",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="grid-item-link"
      onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
      style={{ cursor: "pointer" }}
    >
      <div className="grid-item">
        <div className="profile-pic">
          <img
            src={item.img}
            alt="Profile"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "profile_placeholder.jpg";
            }}
          />
        </div>
        <div className="profile-name">
          <h4>{item.name}</h4>
          <TwitterButtons link={item.link} className="twitter-follow-button" />
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default BloggerGrid;