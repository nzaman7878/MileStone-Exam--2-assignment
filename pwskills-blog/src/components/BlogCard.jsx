import React from "react";
import "./styles/blogCard.css"; // Import the CSS for styling
import { NavLink } from "react-router-dom";

// Functional component for displaying a blog card
export const BlogCard = (props) => {
  // Destructure the props to get necessary data
  const { img, title, desc, id, setBlogData, blogData } = props;

  // Function to delete a blog
  const deleteBlog = () => {
    // Filter out the blog to be deleted
    const newArr = blogData.filter((e, i) => id !== i);
    console.log(newArr);

    // Update state with the new blog array and save to local storage
    setBlogData([...newArr]);
    localStorage.setItem("blogData", JSON.stringify(newArr));
  };

  // Render the blog card
  return (
    <div className="blogCard">
      {/* Display the blog image */}
      <img src={img} alt="" srcSet="" />

      {/* Display the blog title */}
      <h1>
        Blog Title: {title}
      </h1>

      {/* Display the blog description */}
      <p>
        Blog Description: {desc}
      </p>

      {/* Navigation link to read the full blog */}
      <NavLink to={`/read/${id}`}>
        <button>Read Blog</button>
      </NavLink>

      {/* Button to edit the blog (not implemented yet) */}
      <button>Edit Blog</button>

      {/* Button to delete the blog */}
      <button onClick={deleteBlog}>Delete Blog</button>
    </div>
  );
};
