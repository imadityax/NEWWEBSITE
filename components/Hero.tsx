"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1600",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 min-h-screen flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-10">
            Highly Interactive <br />
            Cognitive Learning <br />
            Systems
          </h1>

          <button className="w-14 h-14 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-pink-500 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}