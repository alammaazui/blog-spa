import { Outlet } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <div className="container my-5 ">
        <div
          className="row justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-10">
            <Outlet/>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
