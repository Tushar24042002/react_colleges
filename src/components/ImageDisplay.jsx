import React from 'react';
import styles from './ImageDisplay.module.css'; // Ensure you have your styles set up

const ImageDisplay = ({ images }) => {
  const maxVisibleImages = 3; // Number of images to show before "+N more"
  const visibleImages = images.slice(0, maxVisibleImages);
  const remainingCount = images.length - maxVisibleImages;

  return (
    <div className={styles.imageContainer}>
      {visibleImages.map((image, index) => (
        <div key={index} className={styles.imageWrapper} style={{ zIndex: maxVisibleImages - index }}>
          <img
            src={image.image}
            alt={image.name || `Image ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
        <div className={styles.moreCount} style={{ zIndex: 0 }}>
          +{remainingCount < 0 ? 0 : remainingCount} More
        </div>
    </div>
  );
};

export default ImageDisplay;
