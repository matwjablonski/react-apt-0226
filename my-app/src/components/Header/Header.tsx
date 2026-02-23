import type { PropsWithChildren } from "react";

type HeaderProps = {
    appTitle?: string;
    nav: React.ReactNode;
};

export const Header = ({ appTitle = "Witaj!", children, nav }: PropsWithChildren<HeaderProps>) => {
    return (
        <header>
            {children}
            <h1>{appTitle}</h1>
            {nav}
        </header>
    )
}