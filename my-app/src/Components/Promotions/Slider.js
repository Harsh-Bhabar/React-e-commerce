import React, { useState } from "react";
import "./slider-module.css";
import { sliderData } from "../../data";

export default function Slider(props) {

  const [currImageIndex, setCurrImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrImageIndex((prevImage) => (prevImage + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrImageIndex(
      (prevImage) => (prevImage - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="sliderLeft">
          <button className="slideBtn" onClick={prevSlide}>
            &lt;
          </button>
          <div className="circleAndImage">
            <div
              className="backCircle"
              style={{
                backgroundColor: sliderData[currImageIndex].backCircleColor,
              }}
            ></div>
            <div className="modelImageDiv">
              <img
                className="modelImage"
                src={sliderData[currImageIndex].imgUrl}
                alt={`img ${currImageIndex}`}
              />
            </div>
          </div>
        </div>
        <div className="sliderRight">
          <div className="rightText">
            <div className="mainText">
              {sliderData[currImageIndex].mainText}
            </div>
            <div className="subText">{sliderData[currImageIndex].subText}</div>
            <button className="ShopNowBtn slideBtn" onClick={nextSlide}>
              Shop Now
            </button>
          </div>
          <button className="slideBtn" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
