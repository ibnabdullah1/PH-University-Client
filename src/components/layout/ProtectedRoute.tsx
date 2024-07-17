import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/features/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  //1st way: const {token} = useAppSelector(state=> state.auth)

  //2nd way
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
