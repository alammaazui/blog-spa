import { Navigate, Outlet } from "react-router";

export default function Protected({ user, allowedRole }) {
  console.log(user);
  let isAllowed = false;

  user.role.map((role) => {
    if (role == allowedRole) {
        isAllowed = true
    }
  });
  return (
    <>
      { user.status && isAllowed ? <Outlet></Outlet> : <Navigate to={'unauth'}/>}
      {/* { user.status && user.role == allowedRole ? <Outlet></Outlet> : <Navigate to={'unauth'}/>} */}
    </>
  );
}
