import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AddBlog } from "../pages/AddBlog";
import { ReadBlog } from "../pages/ReadBlog";

// Functional component for defining custom routes
export const CustomRoutes = () => {
  // State to manage the blog data
  const [blogData, setBlogData] = useState(
    JSON.parse(localStorage.getItem("blogData")) || []
  );

  return (
    <Routes>
      {/* Route for the home page */}
      <Route
        path="/"
        element={<HomePage blogData={blogData} setBlogData={setBlogData} />}
      />

      {/* Route for adding a new blog */}
      <Route
        path="/addblog"
        element={<AddBlog prevData={blogData} updateData={setBlogData} />}
      />

      {/* Route for reading a single blog */}
      <Route path="/read/:id" element={<ReadBlog blogData={blogData} />} />
    </Routes>
  );
};
