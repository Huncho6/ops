import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsIn = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black py-10 text-center text-white border border-t-2 border-gray-500">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-base sm:text-lg lg:text-lg font-medium text-gray-500">
          Projects Integrated into the OpSec Ecosystem
        </h2>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 px-10 mx-10">
        {/* Project Logos */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732752224/venumwallet_alrsvv.svg"
            alt="Venum Wallet"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829485/2_qe6thx.svg"
            alt="Taiko"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829485/3_assmo4.svg"
            alt="Optimism"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829482/11_x1glu2.svg"
            alt="Linea"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829484/4_agkpk8.svg"
            alt="Celestia"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829483/7_yz5bs4.svg"
            alt="Bittensor"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829483/6_qd1vhf.svg"
            alt="Zora"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829482/9_ucxkpv.svg"
            alt="StarkNet"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829483/5_siyndf.svg"
            alt="Avail"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829480/14_pycmhp.svg"
            alt="Base"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829482/10_x7qfse.svg"
            alt="V"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829481/12_tsgwpt.svg"
            alt="Eigen"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829482/8_l3ytfc.svg"
            alt="Shardum"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732829481/13_yjsjep.svg"
            alt="Git"
            onClick={() => navigate("/wallets")}
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsIn;
