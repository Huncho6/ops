import React from "react";

const OpsecFooter = () => {
  return (
    <div className="bg-black text-white p-6">
      <div className="border-gray-500 rounded-3xl border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-4">
          {/* Company Section */}
          <div className="pl-4">
            <h3 className="font-semibold text-4xl mb-4">Company</h3>
            <ul className="space-y-10">
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Network
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="pl-4">
            <h3 className="font-semibold text-4xl mb-4">Socials</h3>
            <ul className="space-y-10">
              <li>
                <a href="#" className="hover:underline">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1732825846/opsec_gccd1a.webp"
                alt="OpSec Logo"
                className="mx-auto mb-4 h-16"
              />
              <p className="text-sm">© 2024 - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpsecFooter;
