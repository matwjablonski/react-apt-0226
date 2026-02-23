import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
    isUserAuthenticated: boolean;
}

export const ProtectedRoute = ({ isUserAuthenticated, children }: PropsWithChildren<ProtectedRouteProps>) => {
    if (!isUserAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}