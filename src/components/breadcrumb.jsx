import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go"; // Add a home icon from react-icons for visual appeal

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Get path segments

  return (
    <nav aria-label="breadcrumb" className="mt-32 sm:mt-12 md:mt-16 lg:mt-48 text-xl bg-gray-300 py-2 px-4 sm:px-8 lg:px-20">
      {/* Adjust padding for different screen sizes */}
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 text-lg sm:text-xl lg:text-2xl">
            <GoHome className="mr-2 text-2xl sm:text-3xl lg:text-4xl" />
            Trang Chủ
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`; // Construct path for each segment
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-xl sm:text-2xl lg:text-3xl font-bold">›</span> {/* Adjust separator size */}
              <Link
                to={to}
                className="text-blue-600 hover:text-blue-800 text-lg sm:text-xl lg:text-2xl"
              >
                {/* {value.charAt(0).toUpperCase() + value.slice(1)}  */} Sản Phẩm
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
