import { Outlet } from "react-router";
import Aside from "./Aside";

export default function AdminLayout (){

    return(
        <>
            <h1>Admin Layout</h1>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-2 bg-dark text-light border border-danger">
                        <h1>For Aside</h1>
                        <Aside></Aside>
                    </div>
                    <div className="col-md-10 border border-success">
                        <Outlet/>
                        <hr />
                        For Main
                        <hr />
                        
                    </div>
                </div>
            </div>
        </>

    )

}