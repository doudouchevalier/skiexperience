import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../assets/slide1home.jpg";
import slide2 from "../assets/slide2home.jpg";

const slides = [slide1, slide2];

const CarouselHero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden shadow-lg -mt-50">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 z-20 focus:outline-none"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-gray-700" />
      </button>

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 z-20"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xl text-gray-700" />
      </button>
    </div>
  );
};

export default CarouselHero;
