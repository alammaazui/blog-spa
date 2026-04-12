import { Link } from "react-router";
import useAuthContext from "../context/useAuthContext";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const login = async function (event) {
    event.preventDefault();

     const {setUserData}= useAuthContext()

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, role: "guest" }),
      });

      if (!response.ok) {
        // navigate('/login')
      }

      const responseData = await response.json();
      // {id:1 , email :"" ,token :" ",role :""}
      setUserData(responseData)
      if (responseData.role == "admin") {
        navigate("/adminDashboard");
      } else if (responseData.role == "author") {
        navigate("/authorDashboard");
      }
      else{
        navigate('/')
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <div
          className="row justify-content-center align-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-5">
            <div className="card p-4 bg-dark text-light">
              <h1 className="text-center">Login</h1>

              <input
                type="email"
                className="form-control my-2"
                placeholder="Enter Email Address"
              />
              <input
                type="password"
                className="form-control my-2"
                placeholder="Enter Password"
              />
              <input
                type="submit"
                value={"Login"}
                className="btn btn-secondary my-2"
              />
              <hr />

              <Link className="text-center" to={"/register"}>
                Don't have Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
