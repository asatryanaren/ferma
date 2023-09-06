import { Navigate } from "react-router-dom";
import Login from "../components/login/Login";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: <Login />,
  },
  // {
  //   path: "/",
  //   component: <Navigate to={"/login"} />,
  // },
];
