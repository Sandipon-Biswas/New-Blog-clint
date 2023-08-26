import axios from 'axios';
import React,{useState,useEffect} from 'react'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  const getAllBlog =async ()=>{
    try {
      const {data} = await axios.get("http://localhost:4444/api/v1/blog/all-blog")
      if(data?.success){
        setBlogs(data?.blogs);
        console.log(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllBlog();
  }, [])
  
  return (
    <BlogCard blogs={blogs} />
  )
}

export default Blogs