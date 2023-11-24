import React, { useState } from "react";
import { Header } from "../components/Header";
import "../styles/form.css";

// Functional component for adding a new blog
export const AddBlog = ({ updateData, prevData = [] }) => {
  // State to manage the form data
  const [blogData, setBlogData] = useState({
    title: "",
    img: "",
    desc: "",
    content: "",
  });

  // Function to submit the form data
  const submitData = () => {
    // Create a new array with the current blog data and previous data
    const newData = [blogData, ...prevData];

    // Update the data using the provided function
    updateData(newData);

    // Save the updated data to local storage
    localStorage.setItem("blogData", JSON.stringify(newData));
  };

  // Render the form for adding a new blog
  return (
    <div id="formParent">
      <div id="form">
        {/* Form Title */}
        <h1>Add Your Blog, Now!</h1>

        {/* Input for Image URL */}
        <input
          type="text"
          placeholder="Enter Image Url"
          value={blogData.img}
          onChange={(e) => {
            setBlogData({ ...blogData, img: e.target.value });
          }}
        />

        {/* Input for Blog Title */}
        <input
          type="text"
          placeholder="Enter Title of your blog"
          value={blogData.title}
          onChange={(e) => {
            setBlogData({ ...blogData, title: e.target.value });
          }}
        />

        {/* Input for Short Description */}
        <input
          type="text"
          placeholder="Type Short Description of your blog"
          value={blogData.desc}
          onChange={(e) => {
            setBlogData({ ...blogData, desc: e.target.value });
          }}
        />

        {/* Textarea for Blog Content */}
        <textarea
          placeholder="Type your blog"
          value={blogData.content}
          onChange={(e) => {
            setBlogData({ ...blogData, content: e.target.value });
          }}
        ></textarea>

        {/* Button to submit the form data */}
        <button onClick={submitData}>Add Blog</button>
      </div>
    </div>
  );
};
