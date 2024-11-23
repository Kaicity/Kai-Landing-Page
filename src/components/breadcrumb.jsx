import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
   <div className="w-full mx-auto py-16">
      <nav
        aria-label="breadcrumb"
        className="bg-gray-100 px-4 lg:px-64 text-xl w-full p-2 my-12"
      >
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link
              to="/"
              className="flex items-center text-neutralDGrey hover:text-neutralDGrey text-sm"
            >
              Trang Chủ
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <li key={to} className="flex items-center">
                <span className="mx-2 text-lg font-semibold">›</span>
                <Link
                  to={to}
                  className="text-neutralDGrey hover:text-neutralDGrey text-smF"
                >
                  {/* {value.charAt(0).toUpperCase() + value.slice(1)}  */} Sản
                  phẩm
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
   </div>
  );
};

export default Breadcrumbs;
