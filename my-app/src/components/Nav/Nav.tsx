import { useContext } from "react"
import { Link } from "react-router"
import { ThemeContext } from "../../context/ThemeContext"

export const Nav = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/books">Książki</Link></li>
                <li><Link to="/readers">Czytelnicy</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
                <li>
                    <button 
                        onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        Zmień motyw
                    </button>
                </li>
            </ul>
        </nav>
    )
}