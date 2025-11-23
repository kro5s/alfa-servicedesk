import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { ProtectedLayoutProps } from "./types.ts";
import type { Role } from "../../types/types.ts";

function ProtectedLayout({ roles = [] }: ProtectedLayoutProps) {
  const { pathname } = useLocation();
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role") as Role | null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!token) return <Navigate to={"/login"} />

  if (role === null) return <Navigate to={"/login"} />

  if (roles?.length !== 0 && !roles.includes(role)) return <Navigate to={"/"} />;

  return <Outlet />;
}

export default ProtectedLayout;
