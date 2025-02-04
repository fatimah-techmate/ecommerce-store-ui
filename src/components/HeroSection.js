import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  var settings = {
    dots: true,            // Enable navigation dots
    infinite: true,        // Infinite scrolling
    speed: 500,            // Transition speed between slides
    slidesToShow: 1,       // Number of slides to show at once
    slidesToScroll: 1,     // Number of slides to scroll
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,   // Delay between slide changes (3 seconds)
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="hero-image"
          src="/assests/images/Slider-Banner-1.jpg"
          alt="First slide"
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="/assests/images/Slider-Banner-2.webp"
          alt="Second slide"
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="/assests/images/Slider-Banner-3.webp"
          alt="Third slide"
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </div>

      <div>
        <img
          src="/assests/images/Slider-Banner-4.webp"
          alt="Third slide"
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </div>

      <div>
        <img
          src="/assests/images/Slider-Banner-5.webp"
          alt="Third slide"
          style={{ width: "100%", height: "550px", objectFit: "cover" }}
        />
      </div>

      <div>
        <img
          src="/assests/images/Slider-Banner-6.webp"
          alt="Third slide"
          style={{ width: "100%", height: "550px", objectFit: "" }}
        />
      </div>
    </Slider>
  );
}

export default HeroSection;
