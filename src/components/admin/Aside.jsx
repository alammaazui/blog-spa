import { Link } from "react-router"

export default function Aside (){


    return(
        <>
            <ul>
                <li>
                    <Link to={'/adminDashboard/'}>Home</Link>
                </li>
                <li>
                    <Link to='/adminDashboard/createBlog'>Add Blogs</Link>
                </li>
                <hr />
                <li>
                    <Link to='/adminDashboard/viewBlogs'>View Blogs</Link>
                </li>
                <hr />
                <li>
                    <Link to='/adminDashboard/viewUsers'>View Users</Link>
                </li>
                <hr />
                <li>
                    <Link to='/adminDashboard/createUser'>Add User</Link>
                </li>
                <hr />
            </ul>
            
        </>
    )

}