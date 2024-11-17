import React from "react";

const BlogCard = ({ imageUrl, title, content, showBtn, btnContent }) => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
      id="blog-product"
    >
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row md:justify-between items-center gap-12">
        <div>
          <img src={imageUrl} alt="" className="w-full" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
            {title}
          </h2>
          <p className="text-neutralGrey text-sm leading-7 mb-8">{content}</p>
          {showBtn && (
            <button className="px-7 py-4 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
              {btnContent}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
