import { Navigate } from "react-router-dom";
import {DefaultLayout} from "./defaultlayout";

export const ProtectedLayout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <DefaultLayout />;
};

