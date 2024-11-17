import React from "react";

function NewLetter() {
  return (
    <div className="px-4 lg:px-14 w-full mx-auto bg-neutralSilver py-16">
      <div>
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 leading-snug">
            Tư vấn trực tiếp các sản phẩm
          </h2>
          <div>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLetter;
