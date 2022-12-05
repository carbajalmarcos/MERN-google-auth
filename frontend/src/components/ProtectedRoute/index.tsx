import { useEffect, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";
import { LoadingOverlay } from "../LoadingOverlay";
function ProtectedRoute() {
  const isComponentMounted = useRef(true);
  const { loading, isAuth, error } = useIsAuthenticated(isComponentMounted);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !isAuth && error)  navigate("/login", { replace: true });
  }, [isAuth, navigate, loading, error]);




  if (loading) return <LoadingOverlay loading={true} />;

  return <Outlet />;
}

export default ProtectedRoute;
