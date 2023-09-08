import React, { useState } from "react";
import "./slider-module.css";

export default function Slider(props) {
  const sliderData = [
    {
      imgUrl: "https://i.ibb.co/cXFnLLV/3.png",
		  backCircleColor: "#327d41",
      mainText: "Summer Styles",
      subText: "Lets shop something for this Summer",
    },
    {
      imgUrl: "https://i.ibb.co/DG69bQ4/2.png",
      backCircleColor: "black",
      mainText: "Winter Collections",
      subText: "Lets shop something for this Winter",
    },
    {
      imgUrl: "https://i.ibb.co/cXFnLLV/3.png",
		backCircleColor: "#32687d",
      mainText: "Autumn Styles",
      subText: "Lets shop something for this Autumn",
    },
  ];

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
        <div className="left">
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
                alt={`Image ${currImageIndex}`}
              />
            </div>
          </div>
        </div>
        <div className="right">
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
