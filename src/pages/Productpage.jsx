import React, { useEffect } from "react";
import BlogList from "../components/BlogCard2";
import NewLetter from "../components/NewLetter";
import Breadcrumbs from "../components/Breadcrumbs";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <BlogList />
      <br />
      <NewLetter />
    </div>
  );
}

export default ProductPage;
