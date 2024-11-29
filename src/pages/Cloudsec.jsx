import React from "react";
import { useNavigate } from "react-router-dom";

const Cloudsec = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-black text-white p-8 lg:p-16">
      {/* Right Section with Video */}
      <div className="flex-1 lg:ml-8">
        <div className="bg-black rounded-lg shadow-lg p-8 flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dh60kpxg5/video/upload/v1732752917/router_vwvxy1.webm"
            className="w-full h-auto"
            controls
          />
        </div>
      </div>

      {/* Left Section with Text and Icons */}
      <div className="flex-1 lg:mt-0">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-10">
          Cloudsec Router
        </h1>
        <p className="text-gray-400 mb-6 pt-4 leading-relaxed text-xl">
          CloudSec is a lightning-speed router device that uses a strong,
          decentralized network architecture to improve online privacy and
          security.
        </p>
        <div>
          {/* Icon Items */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732855773/cloudsec_pek7yb.svg"
              alt="Placeholder Icon"
              className="w-full h-auto"
            />
          </div>
        </div>
        <button onClick={() => navigate("/wallets")} className="mt-6 px-6 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Cloudsec;
