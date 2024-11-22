import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BlogList from "../components/BlogCard2";
import NewLetter from "../components/NewLetter";
import BreadcrumbComponent from "../components/breadcrumb";
import Breadcrumbs from "../components/breadcrumb";

function ProductPage() {
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
