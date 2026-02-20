import { ContactForm } from "../components/ContactForm/ContactForm"

export const ContactPage = ({ isUserLoggedIn }: { isUserLoggedIn: boolean }) => {
    return (
        <ContactForm isUserLoggedIn={isUserLoggedIn} />
    )
}