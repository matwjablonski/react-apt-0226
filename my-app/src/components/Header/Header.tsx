import type { PropsWithChildren } from "react";

type HeaderProps = {
    appTitle?: string;
};

export const Header = ({ appTitle = "Witaj!", children }: PropsWithChildren<HeaderProps>) => {
    return (
        <header>
            {children}
            <h1>{appTitle}</h1>
        </header>
    )
}