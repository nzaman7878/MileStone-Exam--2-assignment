import React, { useState } from "react";
import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import "./styles/homepage.css";

// Functional component for the home page
export const HomePage = ({ blogData = [], setBlogData }) => {
  return (
    <div id="HomePage">
      {/* Header component (if needed) */}
      {/* <Header /> */}

      {/* Container for displaying blog cards */}
      <div id="blogParent">
        {/* Map through the blogData array and render BlogCard components */}
        {blogData?.map((e, i) => {
          return (
            <BlogCard
              key={i} // Add a unique key to each BlogCard for React's efficiency
              img={e.img}
              desc={e.desc}
              title={e.title}
              id={i}
              setBlogData={setBlogData}
              blogData={blogData}
            />
          );
        })}
      </div>
    </div>
  );
};
