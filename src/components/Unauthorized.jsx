import { Link } from "react-router";

export default function Unauthorized (){

    return(
        <>
            <h1>Unauthorized User</h1>
            <hr />
            
            <Link>Go To Login</Link>
        </>
    )

}