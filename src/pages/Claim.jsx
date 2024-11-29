import React from "react";
import { useNavigate } from "react-router-dom";

const Claim = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black py-10 text-center text-white border border-t-2 border-gray-500 rounded-md">
      <h1 className="text-3xl font-bold mb-4">OpSec Migration</h1>
      <p className="mb-6">Claim Your OpSec Tokens Now</p>
      <button
        onClick={() => navigate("/wallets")}
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Claim Tokens
      </button>
    </div>
  );
};

export default Claim;
