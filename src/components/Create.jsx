import { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  //
  // {title:"title value" , description: "value description" ,author : "author value"}
  let [data, setData] = useState({});
  let [error, setError] = useState(false);
const navigate = useNavigate()
  console.log("data : ", data);
    let api_url = 'http://localhost:8000/blogs'
  const postBlog = async (event) => {
    event.preventDefault();

    try {

        const response = await fetch(api_url,{
            method:"POST",
            headers:{'content-type':'application/json'},
            body : JSON.stringify(data)
        })

        if(response.ok){
            // window.location.href = ""
            navigate('/')
        }

    } catch (error) {

        setError(error.message)
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Write Your Ideas </h2>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => {postBlog(e)}}>
            <input
              onInput={(e) => {
                setData({ ...data, title: e.target.value });
              }}
              type="text"
              className="form-control my-2"
              placeholder="Enter Title of Blog"
            />
            <textarea
              onInput={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              type="text"
              className="form-control my-2"
              placeholder="Enter Description of Blog"
              rows={5}
            />
            <input
              onInput={(e) => {
                setData({ ...data, author: e.target.value });
              }}
              type="text"
              className="form-control my-2"
              placeholder="Enter Author Name"
              rows={5}
            />
            <input
              type="submit"
              className="btn btn-dark w-100"
              value="Post Blog"
            />
          </form>
        </div>
        <div className="card-footer">
            {error && <h1 className="text-danger">Error Message { error }</h1>}
        </div>
      </div>
    </>
  );
}
