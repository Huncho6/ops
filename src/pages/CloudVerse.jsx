import React from "react";
import { useNavigate } from "react-router-dom";

const CloudVerse = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-black text-white p-8 lg:p-16">
      {/* Left Section */}
      <div className="flex-1 lg:mr-8">
        <div className="bg-black rounded-lg shadow-lg p-8 flex items-center justify-center">
          <video
            src="https://www.opsec.computer/videos/cloudverse-demo.webm"
            className="w-full h-auto"
            controls
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 lg:mt-0">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-10">
          OpSec Cloudverse
        </h1>
        <p className="text-gray-400 mb-6 pt-4 leading-relaxed text-xl">
          Connecting millions of people around the globe using advanced cloud-based products ranging from nodes, to validators, mining opportunities, and computational protocols.
        </p>
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

export default CloudVerse;
