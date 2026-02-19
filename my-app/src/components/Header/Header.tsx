
type HeaderProps = {
    appTitle?: string;
}

export const Header = ({ appTitle = "Witaj!" }: HeaderProps) => {
    return (
        <header>
            <h1>{appTitle}</h1>
        </header>
    )
}