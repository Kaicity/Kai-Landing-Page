import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

// React icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle menu open and close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Thêm sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup để gỡ bỏ sự kiện khi component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //NavItem array cac muc route page
  const navItems = [
    { link: "Trang chủ", path: "home" },
    { link: "Cộng đồng", path: "community" },
    { link: "Sản phẩm", path: "blog-product" },
    { link: "Giới thiệu", path: "sale" },
    { link: "Đánh giá", path: "rating" },
    { link: "Bài viết", path: "blog" },
    { link: "Công ty", path: "company" },
  ];

  return (
    <header
      className={`w-100 bg-white md:bg-transparent fixed top-0 right-0 left-0`}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex items-center justify-between text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d55a773763833d64462c8a3dcdc6b7703a49c67b25d55c034282e91f9756eccf?placeholderIfAbsent=true&apiKey=569ca0f11d24437e944df7e3364ce2c4"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.43] w-[43px]"
              alt="Company logo"
            />
            <h4 className="text-neutralDGrey">Thongular</h4>
          </a>

          {/* navitem nay danh man hinh kich co lon */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                // offset={-100}
                className="block text-base text-gray-900 hover:font-semibold cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button cho man hinh kich co lon */}
          <div className="space-x-12 lg:flex items-center hidden">
            <a
              href="/"
              className="lg:flex text-brandPrimary hover:text-gray-900"
            >
              Đăng nhập
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Đăng ký
            </button>
          </div>

          {/*Menu cho mobile  */}
          <div className="md:hidden">
            <button
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey"></FaXmark>
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey"></FaBars>
              )}
            </button>
          </div>
        </div>

        {/* Navitem cho mobile */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-brandPrimary md:hidden ${
            isMenuOpen ? "block fixed top-3 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              // offset={-100}
              className="block text-base text-white"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
