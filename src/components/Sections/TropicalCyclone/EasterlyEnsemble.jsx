import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useState, useEffect } from 'react';

const EasterlyEnsemble = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [imageError, setImageError] = useState(false);
  const [previousDaysCount, setPreviousDaysCount] = useState(0);
  const timeStrings = ['18', '12', '06', '00'];

  const getCurrentDateInIndia = (daysAgo = 0) => {
    const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-CA', options).replace(/-/g, '');
  };

  const generateImageUrls = () => {
    const date = getCurrentDateInIndia(previousDaysCount);
    return timeStrings.map(time => `https://www.easterlywave.com/media/typhoon/ensemble/${date}${time}/nio.png`);
  };

  const imageUrls = generateImageUrls();

  const handleImageError = () => {
    setImageError(true);
    // Move to the next image if available
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // Try the previous day if all images for the current day failed
      setPreviousDaysCount(prevCount => prevCount + 1);
      setCurrentIndex(0); // Reset to the first image for the new date
      setImageError(false); // Reset error for the new date attempt
    }
  };

  useEffect(() => {
    // Set the first image URL initially
    if (imageUrls.length > 0) {
      setImageUrl(imageUrls[currentIndex]);
      setImageError(false);
    }
  }, [currentIndex, imageUrls]);

  return (
    <div>
      {imageUrl ? (
        <PhotoProvider>
          <p
            style={{
              fontSize: '13px',
              textAlign: 'center',
              margin: '0px 0px 10px 0px',
            }}
          >
            (Click the Image to View!)
          </p>
          <PhotoView src={imageUrl}>
            <img
              src={imageUrl}
              className="clickable-image"
              alt="Typhoon Ensemble"
              onError={handleImageError}
              style={{ display: imageError && currentIndex < imageUrls.length ? 'none' : 'block' }}
            />
          </PhotoView>
        </PhotoProvider>
      ) : (
        <p style={{ color: 'red', textAlign: 'center' }}>
          All images failed to load. Try again later.
        </p>
      )}
      {imageError && currentIndex >= imageUrls.length && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Image not found (404). Trying previous days...
        </p>
      )}
    </div>
  );
};

export default EasterlyEnsemble;
