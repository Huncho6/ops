import React from "react";
import { useNavigate } from "react-router-dom";

const OpsecNetwork = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-black text-white p-8 lg:p-16">
      {/* Left Section with Video */}
      <div className="flex-1 lg:mr-8">
        <div className="bg-black rounded-lg shadow-lg p-8 flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dh60kpxg5/video/upload/v1732752913/network_f7c6jz.webm"
            className="w-full h-auto"
            controls
          />
        </div>
      </div>

      {/* Right Section with Text and Icons */}
      <div className="flex-1 lg:mt-0">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-10">
          OpSec Network
        </h1>
        <p className="text-gray-400 mb-6 pt-4 leading-relaxed text-lg sm:text-xl">
         <p>OpSec's Layer 1 blockchain combines the powers of AI and modular</p> 
         <p> architecture to enhance scalability, security, and flexibility while</p>
          <p>treamlining network operations and reducing development overhead.</p>
        </p>
        <div>
          {/* Icon Items */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732854564/network_lkgdof.webp"
              alt="OpSec Network"
              className="w-full h-auto mr-2"
            />
          </div>
        </div>
         <button
          onClick={() => navigate("/wallets")}
          className="mt-6 px-6 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OpsecNetwork;
