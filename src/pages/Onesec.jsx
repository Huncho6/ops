import React from "react";
import { useNavigate } from "react-router-dom";

const Onesec = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-black text-white p-8 lg:p-16">
      {/* Right Section with Video */}
      <div className="flex-1 lg:ml-8">
        <div className="bg-black rounded-lg shadow-lg p-8 flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dh60kpxg5/video/upload/v1732855573/onesec_erk5j2.mp4"
            className="w-full h-auto"
            controls
          />
        </div>
      </div>

      {/* Left Section with Text and Icons */}
      <div className="flex-1 lg:mt-0">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-10">Onesec</h1>
        <p className="text-gray-400 mb-6 pt-4 leading-relaxed text-xl">
          Revolutionizing web hosting with decentralization and freedom.
          Experience the power of hosting what you want, free from censorship or
          monitoring. Leveraging IPFS technology, your websites are securely
          hosted, and once deployed, even we can't take them down. Enjoy the
          ease and speed of setup, with hosting ready in less than 5 minutes.
          Join us in shaping a decentralized future for web hosting with OneSec.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Icon Items */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732855519/home-feature-1_yxbqb3.webp"
              alt="Decentralized"
              className="w-6 h-6 mr-2"
            />
            <span>Decentralized</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732855979/home-feature-2_y7oeh9.webp"
              alt="Fast"
              className=" h-auto mr-2"
            />
            <span>Fast</span>
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

export default Onesec;
