import React from "react";
import Image from "./Image";
import { SaleImageOne, SaleImageTwo, SaleImageThree } from "../assets";

function Sale() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16" id="sale">
      <h2 className="text-4xl font-semibold text-neutralDGrey mb-2">
        Máy Xúc Công Trình
      </h2>
      <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        {/* Hình ảnh đầu tiên */}
        <div className="w-full md:w-2/3 lg:w-1/2 h-[684px]">
          <Image className="h-full w-full object-cover" imgSrc={SaleImageOne} />
        </div>
        {/* Hai hình ảnh còn lại */}
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 lg:gap-10">
          <div className="h-[322px] w-full">
            <Image
              className="h-full w-full object-cover"
              imgSrc={SaleImageTwo}
            />
          </div>
          <div className="h-[322px] w-full">
            <Image
              className="h-full w-full object-cover"
              imgSrc={SaleImageThree}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
