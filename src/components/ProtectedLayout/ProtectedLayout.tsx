import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProtectedLayout() {
  const { pathname } = useLocation();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return token ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedLayout;
