import React, {useState} from "react";
import coding from "../assets/bw3.png";
import immersive from "../assets/process4.jfif";
import startup from "../assets/bw1.jpg";

function ProcessCard({number, title, description, background}) {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <div
      className="flex flex-col items-start justify-start p-8 rounded-lg shadow-lg bg-gray-300 hover:bg-gray-200 transition-all transform hover:scale-105 "
      style={{
        backgroundImage: background ? `url(${background})` : "",
        width: "22vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        filter: isHovered ? "brightness(100%)" : "brightness(60%)", // Adjust filter based on hover state
        transition: "filter 0.3s ease", // Smooth transition for the filter
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <div
        className={`text-6xl font-bold ${
          isHovered ? "text-brandPrimary" : "text-white"
        }`}
      >
        {number}
      </div>
      <h3
        className={`text-xl font-bold font-semibold mt-4 ${
          isHovered ? "text-white opacity-100" : "text-white"
        }`}
        style={{textAlign: "justify"}}
      >
        {title}
      </h3>
      <p
        className={`text-sm mt-2 ${
          isHovered ? "text-white opacity-100" : "text-white"
        }`}
        style={{textAlign: "justify"}}
      >
        {description}
      </p>
    </div>
  );
}

export default function ProcessGrid() {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
      id="blog-product"
    >
      {/* Title with question */}
      <h2 className="text-3xl text-neutralDGrey font-semibold text-center mb-8">
        What is our process?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-2xl">
        <ProcessCard
          number="01"
          title="Chức năng chính:"
          description="Máy xúc được sử dụng để đào, xúc, di chuyển đất đá hoặc các vật liệu nặng trong xây dựng và khai thác."
          background={immersive}
        />
        <ProcessCard
          number="02"
          title="Thành phần chính:"
          description=" Gồm cần, gầu, cabin, bánh xích hoặc bánh lốp, giúp máy di chuyển linh hoạt trên nhiều loại địa hình."
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
