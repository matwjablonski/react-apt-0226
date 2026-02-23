import { createContext } from "react";

export type User = {
    isLoggedIn: boolean;
    name?: string;
} | null;

export const UserContext = createContext<User>(null);

export const UserProvider = UserContext.Provider;