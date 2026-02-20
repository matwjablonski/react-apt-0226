import { Link } from "react-router"

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/books">Książki</Link></li>
                <li><Link to="/readers">Czytelnicy</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    )
}