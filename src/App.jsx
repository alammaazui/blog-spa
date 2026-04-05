import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Create from "./components/Create";
import View from "./components/View";
import Edit from "./components/Edit";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <h1>Welcome to React App</h1>
      {/* default component */}
      <Nav />
      {/* <Nav></Nav> */}
      {/* path based component */}
      <div className="container my-5 " >
        <div className="row justify-content-center" style={{minHeight:'100vh'}}>
          <div className="col-md-10">
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              {/* <Route path="test" element={<><h1>test comp</h1></>}></Route> */}
              <Route path={"createBlog"} element={<Create />}></Route>
              <Route path={"editBlog/:blogid"} element={<Edit />}></Route>
              <Route path={"viewBlog/:blogid"} element={<View />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      {/* path based component */}

      {/* default component */}
      <Footer />
    </div>
  );
};

export default App;
