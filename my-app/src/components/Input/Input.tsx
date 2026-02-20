import { type ChangeEvent, type InputHTMLAttributes } from "react";

type InputProps = {
    label: string;
    handleChange(e: ChangeEvent<HTMLInputElement>): void;
    // tutaj możemy dodać dodatkowe propsy, które chcemy obsłużyć w komponencie
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, value, handleChange, ...inputRest }: InputProps) => {    
    return (
        <div>
            <label htmlFor={inputRest.id}>{label}</label>
            <input type="text" {...inputRest} value={value} onChange={handleChange} />
        </div>
    )
}