import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/useAuthContext";

export default function Protected({ user, allowedRole }) {
  // console.log(user);
  // let isAllowed = false;

  // user.role.map((role) => {
  //   if (role == allowedRole) {
  //       isAllowed = true
  //   }
  // });

  const {userData}= useAuthContext()

  console.log("current state of user data " , userData );

  return (
    <>
      {/* { user.status && isAllowed ? <Outlet></Outlet> : <Navigate to={'unauth'}/>} */}
      {/* { user.status && user.role == allowedRole ? <Outlet></Outlet> : <Navigate to={'unauth'}/>} */}
      {userData.role == allowedRole ? <Outlet></Outlet> : <Navigate to={'unauth'}/>}  
    </>
  );
}
