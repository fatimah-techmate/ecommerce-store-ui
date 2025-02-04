import React from 'react'
import '../App.css'; // Import CSS file

const FeaturedCategory = () => {
  return (
    <div className="category-container">
      <div className="category-section">
      <h3>WHAT'S <br />NEW</h3>

        {[
          { src: '/assests/images/daily-unstitched.webp', label: 'Daily Unstitched' },
          { src: '/assests/images/embroidered-RTW.webp', label: 'Embroidered RTW' },
          { src: '/assests/images/printed-RTW.webp', label: 'Printed RTW' },
          { src: '/assests/images/unstitched-festive-new-arrivals.webp', label: 'Unstitched Festive' },
          { src: '/assests/images/RTW-festive-new-arrival-RTW.webp', label: 'RTW Festive' },
          { src: '/assests/images/matching-separates.webp', label: 'Matching Separates' },
          { src: '/assests/images/modest-wear.webp', label: 'Modest Wear' }
        ].map((item, index) => (
          <div key={index} className="category-item">
            <img className="category-image" src={item.src} alt={item.label} />
            <p className="category-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategory;
