import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BlogCard = ({ blogs }) => {
  return (
    <div>
      <div className="">
        <div className=" ">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
            {blogs &&
            blogs.map((blog, index) => (
              
                <Card className='mt-2 mx-2  mb-2' bg="dark" text="white" >
                  <Card.Img variant="top" src={blog.image} />
                  <Card.Body>
                    <Card.Title className='h1'>Title : {blog.title}</Card.Title>
                    <Card.Subtitle className="mb-2">Create Time: {blog.createdAt}</Card.Subtitle>
                    <Card.Text>Description : {blog.description}</Card.Text>
                  </Card.Body>
                </Card>
              
            ))}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
