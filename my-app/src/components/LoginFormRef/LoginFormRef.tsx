import { useRef } from "react"
import { Form } from "../Form/Form";

export const LoginFormRef = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        console.log("Username:", username);
        console.log("Password:", password);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button type="submit">Zaloguj</button>
        </Form>
    )
}