import type { PropsWithChildren } from "react";

type FormProps = {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    isUserLoggedIn?: boolean;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, onSubmit, isUserLoggedIn }: PropsWithChildren<FormProps>) => {
    return (    
        <div className="">
            {isUserLoggedIn && <p>Witaj, jesteś zalogowany!</p>}
            <form onSubmit={onSubmit} noValidate>
                {children}
            </form>
        </div>
    );
}
