import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("./src/assets/video/hero.mp4");

  useEffect(() => {
    // Video Load Event
    const video = document.getElementById("hero-video");
    if (video) {
      video.oncanplaythrough = () => setIsVideoLoaded(true);
    }

    // Video Swap Logic (every 10 seconds)
    const videoSwapInterval = setInterval(() => {
      setCurrentVideo((prevVideo) =>
        prevVideo === "./src/assets/video/hero.mp4"
          ? "./src/assets/video/hero2.mp4"
          : "./src/assets/video/hero.mp4"
      );
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(videoSwapInterval); // Cleanup interval
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video Background */}
      <video
        id="hero-video"
        key={currentVideo} // Forces reloading when src changes
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text">
          BLC Bullish Coin
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-gray-200">
          The dogs are doing well, and so are the investors.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-all">
            Buy Now
          </button>
          <button className="border-2 border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold py-3 px-8 rounded-full transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
