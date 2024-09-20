import React, { useState, useEffect } from 'react';
import travel from '../images/destinations.png'
import melula2 from '../images/melula-clone.png'
import movieBlog from '../images/movie-blog.png'
import dronotic from '../images/drones.png'
import pizza from '../images/pizza-shop.png'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // List of project slides (image, title, description)
  const slides = [
    { img: travel, title: 'Travel destinations', description: 'Web page displaying the top 50 travel destination around the world.' },
    { img: movieBlog, title: 'Movie blog', description: 'A small blog featuring 3 of my all time favorite movies.' },
    { img: dronotic, title: 'Dronotics', description: 'A web page about the future of drones.' },
    { img: pizza, title: 'The Pizza shop', description: 'This is a web page I designed for a fictional pizza shop.' },
    { img: melula2, title: 'Melula-clone', description: 'This is a clone of the Melula clothing store web page.' },
    
  ];

  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
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
        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
          <h3 className="text-xl font-semibold">{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>
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
