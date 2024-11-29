import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732825846/opsec_gccd1a.webp"
            alt="opsec"
            className="w-32 h-auto"
          />
        </div>

        {/* Menu Button for Small Screens */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <IoClose /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden lg:flex space-x-14 text-lg font-semibold">
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Network
          </Link>
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Cloudverse
          </Link>
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Cloudsec
          </Link>
          <Link
            to="/wallets"
            className="cursor-pointer hover:text-gray-400"
          >
            Onesec
          </Link>
        </div>

        {/* Buttons (Hidden on Small Screens) */}
        <div className="hidden lg:flex space-x-6">
          <button onClick={() => navigate("/wallets")} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            $OPSEC
          </button>
          <button onClick={() => navigate("/wallets")} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            DexTools
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-center">
          <div className="flex flex-col space-y-4 text-lg">
            <Link
              to="/wallets"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-orange-700"
            >
              Home
            </Link>
            <Link
              to="/wallets"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-orange-700"
            >
              Projects
            </Link>
            <Link
              to="/wallets"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-700"
              onClick={() => setMenuOpen(false)}
            >
              Cloudverse
            </Link>
            <Link
              to="/wallets"
              className="cursor-pointer hover:text-orange-700"
              onClick={() => setMenuOpen(false)}
            >
              Cloudsec
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <button onClick={() => navigate("/wallets")} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              $OPSEC
            </button>
            <button onClick={() => navigate("/wallets")} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
              DexTools
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
