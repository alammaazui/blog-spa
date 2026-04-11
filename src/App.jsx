import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Create from "./components/Create";
import View from "./components/View";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import AdminLayout from "./components/admin/AdminLayout";
import MainLayout from "./components/MainLayout";
import Protected from "./components/Protected";
import Unauthorized from "./components/Unauthorized";
const App = () => {

  const isUser = {
    status : true,
    token :"jdjfhdsjkfhkjsdhfkjsdfhkds",
    // role : "guest"  // guest , admin , author
    role : ["admin" ,"author"]  // guest , admin , author
  } 

  return (
    <div>
      {/* <h1>Welcome to React App</h1> */}
      {/* default component */}
      {/* <Nav /> */}
      {/* <Nav></Nav> */}
      {/* path based component */}

            <Routes>
              <Route path="*" element={<h1>Path Not Found</h1>}></Route>
              <Route path="unauth" element={<Unauthorized/>}></Route>
              {/* guest Layout */}
              <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home />}/>
                {/* <Route path="test" element={<><h1>test comp</h1></>}></Route> */}
                <Route path={"createBlog"} element={<Create />}/>
                <Route path={"editBlog/:blogid"} element={<Edit />}/>
                <Route path={"viewBlog/:blogid"} element={<View />}/>
               </Route>

              {/* Admin DashBoard */}
              <Route  element={<Protected user={isUser} allowedRole={"admin"}/>}>
                <Route path="adminDashboard" element={<AdminLayout></AdminLayout>}>
                    <Route index element={<h1>Welcome To Admin DashBoard</h1>}/>
                    <Route path="viewBlogs" element={<h1>Admin View Blog</h1>}/>
                    <Route path="createBlog" element={<h1>Admin Create Blog</h1>}/>
                    <Route path="viewUsers" element={<h1>Admin View User</h1>}/>
                    <Route path="createUser" element={<h1>Admin Create User</h1>}/>
                </Route>
              </Route>
              {/* Author DashBoard */}
              <Route element={<Protected user={isUser} allowedRole={"author"}></Protected>}>
                  <Route path="/authorDashboard" element={<h1>Welcome To Author Panel</h1>}></Route>

              </Route>


              
            </Routes>
          {/* </div>
        </div>
      </div> */}
      {/* path based component */}

      {/* default component */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
