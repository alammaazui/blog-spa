import { useState } from "react";
import { Link, useNavigate } from "react-router";
export default function Register() {

    const [data,setData] = useState({})
    const navigate =  useNavigate()

    const register = async function (event){

        event.preventDefault()

        try {
            
            const response = await fetch('http://localhost:8000/users',{
                method:"POST",
                headers : {'content-type' : "application/json"},
                body:JSON.stringify({...data ,role :"guest"})
            } )

            if(response.ok){
                navigate('/login')
            }

            
        } catch (error) {
            
        }

    }


  return (
    <>
      <div className="container">
        <div
          className="row justify-content-center align-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-5">
            <div className="card p-4 bg-dark text-light">
              <h1 className="text-center">Register</h1>
              <form onSubmit={(e)=>{register(e)}}>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Enter Username"
                    onInput={(e)=>{setData({...data,username : e.target.value})}}
                    />
                  <input
                    type="email"
                    className="form-control my-2"
                    placeholder="Enter Email Address"
                    onInput={(e)=>{setData({...data,email : e.target.value})}}
                    />
                  <input
                    type="password"
                    className="form-control my-2"
                    placeholder="Enter Password"
                    onInput={(e)=>{setData({...data,password : e.target.value})}}

                  />
                  <input
                    type="submit"
                    value={"Register"}
                    className="btn btn-secondary my-2 w-100"
                  />
              </form>
              <hr />
            
              <Link className="text-center" to={"/login"}>
                Already have Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
