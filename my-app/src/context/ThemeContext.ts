import { createContext } from "react";

export type Theme = {
    theme: "light" | "dark";
    changeTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = createContext<Theme>({
    theme: "light",
    changeTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;
