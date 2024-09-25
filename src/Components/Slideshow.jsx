import React, { useState, useEffect } from 'react';
import travel from '../images/destinations.png'
import movieBlog from '../images/movie-blog.png'
import pizza from '../images/pizza.png'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // List of project slides 
  const slides = [
    { img: travel},
    { img: movieBlog},
    { img: pizza} 
  ];

  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Slide */}
      <div className="relative">
        <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className="w-full h-64 object-cover rounded-md shadow-lg" />
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
