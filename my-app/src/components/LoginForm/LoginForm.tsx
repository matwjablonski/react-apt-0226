import { useState } from "react";
import { Input } from "../Input/Input"
import { Form } from "../Form/Form";

type LoginFormProps = {
    loginAction(canLogin: boolean): void;
}

export const LoginForm = ({ loginAction }: LoginFormProps) => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value);
    // }

    const [formState, setFormState] = useState({
        username: "",
        password: "",
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
        const canUserLogin = formState.username === "admin" && formState.password === "password";
        loginAction(canUserLogin);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                label="Nazwa użytkownika"
                placeholder="Username"
                name="username"
                id="username"
                value={formState.username}
                handleChange={handleFormChange}
            />
            <Input 
                label="Hasło"
                placeholder="Password"
                name="password"
                id="password"
                value={formState.password}
                handleChange={handleFormChange}
            />
            <button type="submit">Zaloguj</button>
        </Form>
    )
}