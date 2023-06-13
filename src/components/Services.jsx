import React from "react";
import { Carousel } from "react-responsive-carousel";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//carousel ki css file

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        //showArrows={false} ... arrows
        //showThumbs={false}... are jo neeche aa rhe hain
        interval={1000}
      >
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">a for apple</p>
        </div>

        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">b for ball</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
