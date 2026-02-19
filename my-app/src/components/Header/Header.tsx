import { useState } from "react";

type HeaderProps = {
    appTitle?: string;
}

export const Header = ({ appTitle = "Witaj!" }: HeaderProps) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setIsUserLoggedIn((prevValue) => !prevValue);
    }

    return (
        <header>
            <button onClick={handleLoginLogout}>
                {isUserLoggedIn ? 'Wyloguj' : 'Zaloguj'}
            </button>
            {isUserLoggedIn && <p>Witaj, Mateusz!</p>}
            <h1>{appTitle}</h1>
        </header>
    )
}