import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

interface ProtectedRouteProps {
  element: ReactElement;
  loggedIn: boolean;
}

function ProtectedRoute({
  element, loggedIn,
}: ProtectedRouteProps): ReactElement {
  return loggedIn ? element : <Navigate to='/' replace />;
}

export default ProtectedRoute;