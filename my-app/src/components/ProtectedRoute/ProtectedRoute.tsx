import { useContext, type PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const user = useContext(UserContext);

    if (!user?.isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}