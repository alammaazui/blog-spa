import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState(false);
  const [isloading, setisloading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "GET",
      });
      if (!response.ok) {
        throw `error while requesting resource ${response.status}  `;
      }
      const response_data = await response.json();
      setBlogData(response_data);
      setError(false)
      setisloading(false)
    } catch (error) {
        setisloading(false)
        setError(error.message)
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isloading && <h1>Loading ...</h1>}
      {error && <h1>Error Message {error}</h1>}
      {blogData.map((blog) => (
        <div className="card my-3">
          <div className="card-header">
            <h2>{blog.title}</h2>
          </div>
          <div className="card-body">
            <h5>{blog.title}</h5>
            <h6>Written By {blog.author}</h6>

            <Link className="btn btn-dark w-100 my-2" to={"viewBlog"}>
              Read More
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
