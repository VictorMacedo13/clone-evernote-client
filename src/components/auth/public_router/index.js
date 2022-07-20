import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = () => {
  return localStorage.getItem("user") ? <Navigate to={"/notes"} /> : <Outlet />;
};

export default PublicRouter;
