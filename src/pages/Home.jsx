import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* Video Section */}
      <div className="relative h-[500px] lg:h-[600px] w-full">
        <video
          src="https://res.cloudinary.com/dh60kpxg5/video/upload/v1732751488/vide1_ylwosh.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        ></video>

        {/* Overlapping Globe and Text Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 flex flex-col items-center text-white justify-center space-y-8 px-6">
          {/* Heading Section */}
          <div className="order-1 lg:order-none text-center">
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-medium uppercase tracking-wide">
              Pioneering the Next Generation
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase mt-2">
              Decentralized <br />
              Supercomputer Applications
            </h1>
          </div>

          {/* Top Description */}
          <div className="order-2 lg:order-none flex flex-col lg:flex-row lg:justify-between lg:px-28 space-y-6 lg:space-y-0 text-center lg:text-left">
            <p className="text-gray-300 text-base sm:text-lg lg:text-base max-w-md">
              OpSec Ecosystem is a privacy-focused network dedicated to making
              operations on the cloud very seamless and efficient.
            </p>
            <p className="text-gray-300 text-base sm:text-lg lg:text-base max-w-md">
              OpSec decentralized cloud solutions range from high level nodes,
              light speed router devices, GPUs and hosting services.
            </p>
          </div>

          {/* Button */}
          <div className="order-3">
            <button 
            onClick={() => navigate("/wallets")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg uppercase">
              Explore CloudVerse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
