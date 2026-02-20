import { useState, type ChangeEvent, type SyntheticEvent } from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <input type="text" placeholder="Type something..." value={inputValue} onChange={handleChange} />
    )
}