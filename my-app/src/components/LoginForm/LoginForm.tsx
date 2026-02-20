import { useState } from "react";
import { Input } from "../Input/Input"
import { Form } from "../Form/Form";

export const LoginForm = () => {
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
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return (
        <Form onSubmit={() => {}}>
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