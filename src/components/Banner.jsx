import React from "react";
import src from "../assets/mayxucBanner.jfif";

function Banner() {
  return (
    <div
      className="bg-cover bg-center min-h-96 flex items-center justify-center text-white relative"
      style={{ backgroundImage: `url(${src})`, filter: "brightness(0.7)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center max-w-md relative z-10">
        <h2 className="text-5xl font-bold mb-2">Gọi Ngay Cho Tui</h2>
        <p className="text-3xl mb-4">(+91) 958423452</p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          Join With Us
        </button>
      </div>
    </div>
  );
}

export default Banner;
