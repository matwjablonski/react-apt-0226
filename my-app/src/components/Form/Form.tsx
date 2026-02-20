type FormProps = {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, onSubmit }: FormProps) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
}