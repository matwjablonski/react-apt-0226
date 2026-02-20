import { useParams } from "react-router";

export const BookPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Strona o książce</h1>
            <p>ID: {id}</p>
        </div>
    );
}