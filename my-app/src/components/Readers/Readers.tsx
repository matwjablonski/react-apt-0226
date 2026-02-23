import { useState } from "react";
// import { useFetchData } from "../../hooks/useFetchData";
import { useReaders } from "../../hooks/queries/useReaders";

type Reader = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const Readers = () => {
    // const { data: readers, isLoading } = useFetchData<Reader[]>('users');
    // const [readers, setReaders] = useState<Reader[]>([]);
    // const [isLoading, setIsLoading] = useState(false);
    const { data: readers, isLoading } = useReaders<Reader[]>();
    const [isReadersListExpanded, setIsReadersListExpanded] = useState(true);

    // const fetchReaders = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //         if (!response.ok) {
    //             throw new Error("Nie można pobrać danych");
    //         }
    //         const data: Reader[] = await response.json();
    //         setReaders(data);
    //     } catch (error) {
    //         console.error("Błąd podczas pobierania danych:", error);
    //     }
    //     finally {
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchReaders();
    // }, []);

    if (isLoading) {
        return <p>Ładowanie czytelników...</p>;
    }

    if (!isReadersListExpanded) {
        return (
            <button onClick={() => setIsReadersListExpanded(true)}>Pokaż czytelników</button>
        )
    }

    return (
        <>
            <ul>
                {readers && readers.map((reader) => (
                    <li key={reader.id}>{reader.name}</li>
                ))}
            </ul>
            <button onClick={() => setIsReadersListExpanded(false)}>Ukryj czytelników</button>
        </>
    );
}