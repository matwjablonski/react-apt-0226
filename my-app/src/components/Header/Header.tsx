type HeaderProps = {
    appTitle?: string;
    isUserLoggedIn?: boolean;
    logoutAction?: () => void;
}

export const Header = ({ appTitle = "Witaj!", isUserLoggedIn = false, logoutAction }: HeaderProps) => {
    return (
        <header>
            {isUserLoggedIn && <p>Witaj, Mateusz!</p>}
            {isUserLoggedIn && <button onClick={logoutAction}>Wyloguj</button>}
            <h1>{appTitle}</h1>
        </header>
    )
}