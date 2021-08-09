import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCover from "../assets/book-cover-1.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const SliderTwo = () => {
  return (
    <div className="slider-two">
      <div className="container mb-4">
        <h4>Continue Watching</h4>
        <Carousel responsive={responsive}>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
          <div>
            <video controls>
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/ogg"
              />
            </video>
          </div>
        </Carousel>
      </div>

      <div className="container position-relative mb-5">
        <h4>Trending</h4><span className="more-covers"><a href="">More</a></span>
        <div className="book-detail">
          <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
          <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
          <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
           <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
          <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
          <div className="book-wrapper">
            <img src={BookCover} alt="book-cover-img" />
          </div>
         
        </div>
      </div>
    </div>
  );
};
