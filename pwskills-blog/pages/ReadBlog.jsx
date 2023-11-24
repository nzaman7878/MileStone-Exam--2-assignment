import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ReadBlog.css";

export const ReadBlog = ({ blogData }) => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    const singleArray = blogData.filter((e, i) => id == i);

    // Check if the filtered array is not empty before updating state
    if (singleArray.length > 0) {
      setSingleData({ ...singleArray[0] });
    }

    // Log the singleData for debugging
    console.log(singleArray);
  }, [id, blogData]);

  return (
    <div id="ReadBlog">
      <img src={singleData?.img} alt="" />
      <h1>Blog Title: {singleData?.title}</h1>
      <p>Blog Content: {singleData?.content}</p>
    </div>
  );
};
