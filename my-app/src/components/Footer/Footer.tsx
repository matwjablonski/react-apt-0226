import { ContactForm } from "../ContactForm/ContactForm";

const Footer = ({ isUserLoggedIn }: { isUserLoggedIn: boolean } ) => (
    <footer>
        <ContactForm isUserLoggedIn={isUserLoggedIn} />
        <p>Copyright © 2024 | Created by: Mateusz</p>
    </footer>
);

export default Footer;