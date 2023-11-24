import React, { useEffect, useState } from "react";
import "../styles/ReadBlog.css";
import { useParams } from "react-router-dom";

// Functional component for reading a single blog
export const ReadBlog = ({ blogData }) => {
  // Get the "id" parameter from the URL
  const { id } = useParams();

  // State to store the data of the single blog
  const [singleData, setSingleData] = useState({});

  // Use useEffect to update the singleData when the "id" changes
  useEffect(() => {
    // Filter the blogData array to get the single blog based on the "id"
    const singleArray = blogData.filter((e, i) => id == i);

    // Update the state with the data of the single blog
    setSingleData({ ...singleArray[0] });

    console.log(singleArray);
  }, [id]);

  return (
    <div id="ReadBlog">
      {/* Display the image of the single blog */}
      <img src={singleData?.img} alt="" />

      {/* Display the title of the single blog */}
      <h1>Blog Title: {singleData?.title}</h1>

      {/* Display the content of the single blog */}
      <p>
        Blog Content: {singleData?.content}
      </p>
    </div>
  );
};
