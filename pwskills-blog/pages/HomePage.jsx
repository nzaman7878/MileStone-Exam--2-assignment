import React from "react";
import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import "../styles/homepage.css";

export const HomePage = ({ blogData = [], setBlogData }) => {
  return (
    <div id="HomePage">
      <div id="blogParent">
        {blogData?.map((e, i) => (
          <BlogCard
            key={i}  // Add a unique key for each BlogCard
            img={e.img}
            desc={e.desc}
            title={e.title}
            id={i}
            setBlogData={setBlogData}
            blogData={blogData}
          />
        ))}
      </div>
    </div>
  );
};
