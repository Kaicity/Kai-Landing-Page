import React, { useEffect } from "react";
import BlogList from "../components/BlogCard2";
import NewLetter from "../components/NewLetter";
import Breadcrumbs from "../components/Breadcrumb";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <view>
      <Breadcrumbs />
      <BlogList />
      <br />
      <NewLetter />
    </view>
  );
}

export default ProductPage;
