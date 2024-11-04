import React, { useEffect } from 'react';

const script = document.createElement('script');
script.src = 'https://platform.twitter.com/widgets.js';
script.async = true;
document.body.appendChild(script);
script.onload = () => {
  if (window.twttr) {
    window.twttr.widgets.load();
  }
};

const TwitterButtons = ({link, className}) => {
  return (
    <div>
<a href={link} className={className} data-size="small" data-show-count="false"></a><script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );
};

export default TwitterButtons;
