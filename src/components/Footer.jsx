import React from "react";

const Footer = () => {
  const companyLinks = [
    { text: "Về chúng tôi", href: "#" },
    { text: "Bài viết", href: "#" },
    { text: "Liên hệ chúng tôi", href: "#" },
    { text: "Tiêu điểm", href: "#" },
    { text: "Đánh giá", href: "#" },
  ];

  const supportLinks = [
    { text: "Hỗ trợ khách hàng", href: "#" },
    { text: "Điều khoản và dịch vụ", href: "#" },
    { text: "Tư vấn nhanh", href: "#" },
    { text: "Chính sách an toàn", href: "#" },
    { text: "Hoạt động", href: "#" },
  ];
  

  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/37c6c258905673ae11392618a6790b21163a2915c34073a534cb62ad5074a0c5?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/918f0713b545abd86ca478c16ba5246d9f6d11b1c6a754deab189831102a7a6e?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7b22d30d1243051bb008c93f600436e6fa895ad14f6cd9d77c46259d2d84d3a?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="flex flex-wrap gap-10 items-start px-40 py-16 bg-gray-800 max-md:px-5">
      <div className="flex overflow-hidden flex-col items-start min-w-[240px] w-[350px]">
        <div className="flex gap-2.5 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d55a773763833d64462c8a3dcdc6b7703a49c67b25d55c034282e91f9756eccf?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.43] w-[43px]"
            alt="Company logo"
          />
          <h2 className="text-white text-2xl font-bold">Thongular</h2>
        </div>

        <div className="flex overflow-hidden flex-col self-stretch mt-10 w-full text-sm leading-none text-slate-100">
          <p>Copyright © 2024 Thongular.</p>
          <p className="mt-2">All rights reserved</p>
        </div>

        <div className="flex overflow-hidden gap-4 items-start mt-10">
          {icons.map((icon, index) => (
            <a
              href="#"
              key={index}
              className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
            >
              <img
                loading="lazy"
                src={icon.src}
                className="object-contain shrink-0 w-8 aspect-square"
                alt={icon.alt}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-8 items-start min-w-[240px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-40">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Công Ty
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {companyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex overflow-hidden flex-col w-40">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Hỗ Trợ
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex overflow-hidden flex-col w-40">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Hỗ Trợ
          </h2>
          <nav className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
            {supportLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mt-3 first:mt-0 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex overflow-hidden flex-col min-w-[240px] w-[500px]">
          <h2 className="text-xl font-semibold leading-snug text-white">
            Thông tin liên hệ
          </h2>

          <form className="flex flex-col mt-6 w-full text-sm leading-none text-gray-300 max-w-[500px] gap-4">
            {/* Input Name và Email trên cùng một dòng */}
            <div className="flex gap-4">
              {/* Input Name */}
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="nameInput"
                  className="text-gray-400 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="nameInput"
                  placeholder="Nhập họ tên đầy đủ"
                  className="w-full px-3 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Input Email */}
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="emailInput"
                  className="text-gray-400 text-sm font-medium"
                >
                  Email của bạn
                </label>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Nhập email"
                  className="w-full px-3 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Input Address nằm riêng bên dưới */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="addressInput"
                className="text-gray-400 text-sm font-medium"
              >
                Địa chỉ
              </label>
              <textarea
                id="addressInput"
                placeholder="Địa chỉ của bạn"
                className="w-full px-3 py-2 h-24 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-brandPrimary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-neutralDGrey transition"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
