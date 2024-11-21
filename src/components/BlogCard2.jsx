import React from "react";
import coding from "../assets/blackExcavator.jfif";
import ex1 from "../assets/blackProcess1.jpg";
import ex2 from "../assets/blackprocess2.avif";
import ex3 from "../assets/bw1.jpg";
import ex4 from "../assets/process1.jfif";
import ex5 from "../assets/process3.jfif";
import ex6 from "../assets/process4.jfif";
import ex7 from "../assets/banner_2.png";
import ex8 from "../assets/banner_3.png";
import ex9 from "../assets/bw2.png";

import {motion} from "framer-motion";
import {fadeInFramer} from "../helper/fadeInFramer.js";

const BlogCard = ({date, month, title, description, src}) => {
  return (
<div className="bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all h-auto">
<div className="relative">
      <img src={src} className="w-full h-40 sm:h-32 md:h-48 lg:h-112 object-cover" alt="Example" />
      <div className="absolute top-3 left-3 bg-blue-600 text-white rounded-md px-3 py-2 shadow-md">
          <p className="text-sm font-bold">{date}</p>
          <p className="text-xs">{month}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="text-gray-700 text-sm flex items-center mb-4 gap-4">
          <span className="truncate text-xs sm:text-sm md:text-base lg:text-lg">
            👷 Admin
          </span>
          <span className="truncate text-xs sm:text-sm md:text-base lg:text-lg">
            🔧 Comments
          </span>
        </div>

        <h3 className="text-x font-semibold mb-2 hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 truncate whitespace-nowrap overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogPosts = [
    {
      src: ex1,
      date: "30",
      month: "May",
      title: "Máy xúc bánh xích Caterpillar 320D",
      description:
        "Máy xúc bánh xích hiệu suất cao, được trang bị động cơ mạnh mẽ và công nghệ tiết kiệm nhiên liệu.Thích hợp cho các công trình xây dựng lớn, đào móng, khai thác đá và công việc đất.",
    },
    {
      src: ex2,
      date: "25",
      month: "Sep",
      title: "Máy xúc Komatsu PW160-11",
      description:
        "Máy xúc bánh lốp linh hoạt, dễ di chuyển, thích hợp cho các công trình xây dựng đô thị hoặc địa hình bằng phẳng. Dễ bảo trì và vận hành, với cabin thoải mái cho người lái.",
    },
    {
      src: ex3,
      date: "10",
      month: "Aug",
      title: "Máy xúc mini Kubota U50-5",
      description:
        "Máy xúc mini nhỏ gọn, thích hợp cho công việc nhỏ như làm vườn, thi công đường nội bộ, hoặc công trình dân dụng. Công suất vừa phải, dễ vận chuyển.",
    },
    {
      src: ex4,
      date: "30",
      month: "May",
      title: "Máy xúc Hitachi ZX200-5G",
      description:
        "Máy xúc bánh xích hạng trung, thiết kế bền bỉ với công nghệ thủy lực tiên tiến, giúp tăng hiệu suất và tiết kiệm nhiên liệu. Phù hợp cho công trình xây dựng, san lấp mặt bằng hoặc khai thác mỏ.",
    },
    {
      src: ex5,
      date: "25",
      month: "Sep",
      title: "Máy xúc Doosan DX140W-7",
      description:
        "Máy xúc bánh lốp với động cơ mạnh mẽ, thiết kế thân thiện với môi trường. Hệ thống kiểm soát tự động giúp nâng cao hiệu suất làm việc. Lý tưởng cho công trình trong đô thị và vùng nông thôn.",
    },
    {
      src: ex6,
      date: "10",
      month: "Aug",
      title: "Máy xúc Volvo EC750E",
      description:
        "Máy xúc bánh xích cỡ lớn, được thiết kế cho các công trình khai thác nặng hoặc xây dựng cơ sở hạ tầng lớn. Động cơ mạnh, hệ thống thủy lực tối ưu và cabin hiện đại.",
    },
    {
      src: ex7,
      date: "30",
      month: "May",
      title: "Máy xúc Hitachi ZX200-5G",
      description:
        "Máy xúc bánh xích hạng trung, thiết kế bền bỉ với công nghệ thủy lực tiên tiến, giúp tăng hiệu suất và tiết kiệm nhiên liệu. Phù hợp cho công trình xây dựng, san lấp mặt bằng hoặc khai thác mỏ.",
    },
    {
      src: ex8,
      date: "25",
      month: "Sep",
      title: "Máy xúc Doosan DX140W-7",
      description:
        "Máy xúc bánh lốp với động cơ mạnh mẽ, thiết kế thân thiện với môi trường. Hệ thống kiểm soát tự động giúp nâng cao hiệu suất làm việc. Lý tưởng cho công trình trong đô thị và vùng nông thôn.",
    },
    {
      src: ex9,
      date: "10",
      month: "Aug",
      title: "Máy xúc Volvo EC750E",
      description:
        "Máy xúc bánh xích cỡ lớn, được thiết kế cho các công trình khai thác nặng hoặc xây dựng cơ sở hạ tầng lớn. Động cơ mạnh, hệ thống thủy lực tối ưu và cabin hiện đại.",
    },
  ];

  return (
    <div
      className="px-4 sm:px-8 lg:px-14 max-w-screen-2xl mx-auto my-48 "
      id="blog-product"
    >
      <motion.div
        className="text-center md:w-1/2 mx-auto"
        variants={fadeInFramer("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.5}}
      >
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
          Các Loại Máy Xúc.
        </h2>
        <p className="text-neutralGrey text-sm md:w-3/4 mb-8 mx-auto">
          Máy xúc là một loại thiết bị cơ giới được sử dụng rộng rãi trong xây
          dựng và công trình để đào, di chuyển và xử lý vật liệu. Ngoài việc
          thực hiện các công việc đào bới, máy xúc còn có thể thực hiện nhiều
          nhiệm vụ khác nhờ vào tính linh hoạt và các phụ kiện kèm theo, như gầu
          xúc, gàu ngoạm, kìm, hay cuốc xúc.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 w-full">
      {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            src={post.src}
            date={post.date}
            month={post.month}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
