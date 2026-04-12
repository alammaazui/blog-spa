import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { authentication } from "../context/AuthContext";
import useAuthContext from '../context/useAuthContext'
import { Skeleton } from "antd";
const Home = () => {

  // const {userData,setUserData} = useContext(authentication)

   const {setUserData} = useAuthContext()
  
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
    setTimeout(() => {
      getData();
      
    }, 3000);
  }, []);

  return (
    <>
      <button onClick={()=>{setUserData({email:"user1@ui.com" ,role:"admin" ,token:"1234##%%^62653672"})}}>Login</button>
      {/* {isloading && <h1>Loading ...</h1>} */}
      {isloading && <Skeleton></Skeleton>}
      {error && <h1>Error Message {error}</h1>}
      {blogData.map((blog) => (
        <div className="card my-3">
          <div className="card-header">
            <h2>{blog.title}</h2>
          </div>
          <div className="card-body">
            <h5>{blog.title}</h5>
            <h6>Written By {blog.author}</h6>

            <Link className="btn btn-dark w-100 my-2" to={`./viewBlog/${blog.id}`}>
              Read More
            </Link>
          </div>
        </div>
      ))}
      {
        
      }
    </>
  );
};

export default Home;
