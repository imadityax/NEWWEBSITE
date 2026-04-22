"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const slides = [
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1600",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // fade out duration before switching
    }, 4000); // switch every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />

      {/* Background Slideshow */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${slides[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: fade ? 1 : 0,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 min-h-screen flex items-center">
        <div className="w-full md:w-1/2">
          <p className="text-white/60 uppercase tracking-[0.4em] text-xs mb-5">
            Aaruchudar <span className="text-yellow-400">Pvt Ltd</span>
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
            Train the mind
            <br />
            before training the
            <br />
            skill.
          </h1>


        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrent(i);
                setFade(true);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-5" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}