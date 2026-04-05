import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

const View = () => {
    const [data,setData] = useState({})
    const [error,setError] = useState(false)
    const [isloading,setisloading] = useState(true)
    // console.log("value return by useParam Hook : ",useParams())
    const {blogid} =useParams()
    let navigate = useNavigate()
    
    useEffect(async()=>{

        try {

            const response =  await fetch(`http://localhost:8000/blogs/${blogid}`,{method:"GET"})
            if(!response.ok){
                throw `error while requesting resource ${response.status}`
            }
            const blog_data = await response.json()
            setData(blog_data)
            setisloading(false)
            
            
        } catch (error) {
            setError(error.message)
            setisloading(false)
        }


    },[])

    const deleteBlog = async () =>{
        try {

            // setisloading(true)
            const response =  await fetch(`http://localhost:8000/blogs/${blogid}`,{method:"DELETE"})

            if(!response.ok){
                throw `${response.status}`
            }

            navigate('/')

            

            
        } catch (error) {
            setError(error.message)
            setisloading(false)
        
        }
        

    }
  
    return (
        <>
        {isloading && <h1>Loading ...</h1>}
        {!isloading && <div className="card">
            {error && <h1 className='text-danger text-center'>Error Message{error}</h1>}
            <div className="card-header">
                <h2>{data?.title}</h2>
            </div>
            <div className="card-body">
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <p>Written By {data.author}</p>
            </div>
            <div className="card-footer">
                <button onClick={()=>{deleteBlog()}} className='btn btn-danger w-100 my-1'>Delete Blog</button>
                <Link className='btn btn-secondary w-100 my-1' to={`/editBlog/${data.id}`}>Edit Blog</Link>
                
            </div>
        </div>}
        </> 
    );
}

export default View;
