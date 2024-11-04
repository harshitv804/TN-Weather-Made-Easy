import React from 'react';
import './BloggerGrid.css';
import TwitterButtons from '../../TwitterButtons';

const BloggerGrid = () => {
  return (
    <div className="grid-container">
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1720335108010287104/tnofjhqa_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Chennai Weather</h4>
            <TwitterButtons link='https://twitter.com/chennaiweather' className='twitter-follow-button'/>
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1791767915219349504/bA1EhXeJ_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>TN Weatherman</h4>
            <TwitterButtons link='https://twitter.com/praddy06' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1688795011935252480/0tnRcSlB_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Sel</h4>
            <TwitterButtons link='https://twitter.com/Selwyyyyn' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1610112612230103040/l4QiGFt__400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>MasRainman</h4>
            <TwitterButtons link='https://twitter.com/MasRainman' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1559324742280044546/Heim0lcX_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>COMK</h4>
            <TwitterButtons link='https://twitter.com/ChennaiRains' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1691787239552897024/55MnsBVI_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Hrishi Jawahar</h4>
            <TwitterButtons link='https://twitter.com/jhrishi2' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1708136832251412480/WMRIc7oC_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Gokul Tamilselvam</h4>
            <TwitterButtons link='https://twitter.com/Gokul46978057' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1732087371234246656/Yme1RChm_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Rainstorm</h4>
            <TwitterButtons link='https://twitter.com/RainStorm_TN' className='twitter-follow-button'/>   
          </div>
        </div>
        <div className="grid-item">
          <div className="profile-pic">
            <img src="https://pbs.twimg.com/profile_images/1822596250966847488/THE2anmP_400x400.jpg" alt="Profile" />
          </div>
          <div className="profile-name">
            <h4>Chennai Weatherman</h4>
            <TwitterButtons link='https://twitter.com/chennaisweather' className='twitter-follow-button'/>   
          </div>
        </div>
    </div>
  );
};

export default BloggerGrid;