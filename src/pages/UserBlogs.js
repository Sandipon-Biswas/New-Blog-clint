import React, { useState, useEffect } from "react";
import axios from "axios";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId",data?.user._id);
      const { data } = await axios.get(`http://localhost:4444/api/v1/blog/user-blog/64de2eb9f15cad39f584c5dd`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
<div></div>
  );
};

export default UserBlogs;