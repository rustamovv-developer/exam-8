import React, { memo, useEffect } from "react";
import Blog from "../../components/blog";
import "../../sass/pages/blog.scss";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="blog__page" id="blog__page">
      <div className="container">
        <div className="context">
          <p className="context__text">Блог</p>
        </div>
      </div>
      <Blog display={"none"} />
      <Blog display={"none"} />
    </main>
  );
};

export default memo(BlogPage);
