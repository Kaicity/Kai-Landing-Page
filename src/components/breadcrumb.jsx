import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); 

  return (
    <nav aria-label="breadcrumb" className="mt-32 sm:mt-12 md:mt-16 lg:mt-48 text-xl  px-10 sm:px-8 lg:px-20 sm:px-8 max-w-screen-2xl mx-auto my-12">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="flex items-center text-neutralDGrey hover:text-neutralDGrey text-lg sm:text-xl lg:text-2xl font-bold">
          Trang Chủ
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`; 
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-xl sm:text-2xl lg:text-3xl font-bold">›</span> 
              <Link
                to={to}
                className="text-neutralDGrey hover:text-neutralDGrey text-lg sm:text-xl lg:text-2xl font-bold"
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
