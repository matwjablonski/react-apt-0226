type FormProps = {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, onSubmit }: FormProps) => {
    return (
        <div className="">
            <form onSubmit={onSubmit} noValidate>
                {children}
            </form>
        </div>
    );
}