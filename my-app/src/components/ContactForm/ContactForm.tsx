import { useState } from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input"

export const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        message: "",
        phoneNumber: "",
    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted with data:", formState);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                label="Imię"
                placeholder="Podaj swoje imię"
                name="name"
                id="name"
                value={formState.name}
                handleChange={handleFormChange}
            />
            <Input
                name="message"
                id="message"
                label="Wiadomość"
                placeholder="Napisz wiadomość"
                value={formState.message}
                handleChange={handleFormChange}
            />
            <Input
                name="phoneNumber"
                id="phoneNumber"
                label="Numer telefonu"
                placeholder="Podaj swój numer telefonu"
                value={formState.phoneNumber}
                handleChange={handleFormChange}
            />
            <button type="submit">Wyślij</button>
        </Form>
    )
}