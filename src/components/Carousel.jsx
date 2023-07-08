import React from "react";
import imageCarosel1 from "../assets/images/image1.png";
import imageCarosel2 from "../assets/images/image2.png";
import imageCarosel3 from "../assets/images/image3.png";
import imageCarosel4 from "../assets/images/image4.png";
import imageCarosel5 from "../assets/images/image8.jpeg";
import imageCarosel6 from "../assets/images/image9.jpeg";
const Carousel = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="carousel w-full sm:w-[80%]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel1}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel2}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel3}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel4}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel5}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            alt="Carousel"
            src={imageCarosel6}
            className="w-full sm:h-[500px] h-[350px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
