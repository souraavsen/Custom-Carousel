import React from "react";
import { useState } from "react";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='carousel'>
      <div
        className='inner-item'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
