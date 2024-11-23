import React, { useState } from "react";
import coding from "../assets/bw3.png";
import immersive from "../assets/process4.jfif";
import startup from "../assets/bw1.jpg";
import { motion } from "framer-motion";
import { fadeInFramer } from "../helper/fadeInFramer.js";

function ProcessCard({ number, title, description, background }) {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <motion.div
      className="flex flex-col items-start justify-start p-4 sm:p-6 md:p-8  shadow-lg bg-gray-300 hover:bg-gray-200 transition-all transform hover:scale-105"
      style={{
        backgroundImage: background ? `url(${background})` : "",
        width: "100%", // Full width by default
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        filter: isHovered ? "brightness(100%)" : "brightness(60%)",
        transition: "filter 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={fadeInFramer("up", 0.2)} // Apply fade-in animation when card comes into view
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
          isHovered ? "text-white opacity-100" : "text-white"
        }`}
      >
        {number}
      </div>
      <h3
        className={`text-base sm:text-lg md:text-xl font-bold font-semibold mt-4 ${
          isHovered ? "text-white opacity-100" : "text-white"
        }`}
        style={{ textAlign: "justify" }}
      >
        {title}
      </h3>
      <p
        className={`text-xs sm:text-sm md:text-base mt-2 ${
          isHovered ? "text-white opacity-100" : "text-white"
        }`}
        style={{ textAlign: "justify" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function ProcessGrid() {
  return (
    <div
      className="px-4 sm:px-8 lg:px-14 max-w-screen-2xl mx-auto py-16"
      id="blog-product"
    >
      {/* Title with question */}
      <motion.div
        className="text-center md:w-1/2 mx-auto"
        variants={fadeInFramer("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
          3 yếu tố cơ bản về máy xúc
        </h2>
        <p className="text-neutralGrey text-sm md:w-3/4 mb-8 mx-auto">
          Máy xúc là một loại thiết bị cơ giới được sử dụng rộng rãi trong xây
          dựng
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProcessCard
          number="01"
          title="Cấu tạo và chức năng"
          description="Máy xúc được sử dụng để đào, xúc, di chuyển đất đá hoặc các vật liệu nặng trong xây dựng và khai thác."
          background={immersive}
        />
        <ProcessCard
          number="02"
          title="Thành phần chính:"
          description="Gồm cần, gầu, cabin, bánh xích hoặc bánh lốp, giúp máy di chuyển linh hoạt trên nhiều loại địa hình."
          background={startup}
        />
        <ProcessCard
          number="03"
          title="Loại phổ biến:"
          description="Máy xúc bánh xích (bền, di chuyển địa hình khó) và máy xúc bánh lốp (linh hoạt, phù hợp địa hình bằng phẳng)."
          background={coding}
        />
      </div>
    </div>
  );
}
