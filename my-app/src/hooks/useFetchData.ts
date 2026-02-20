import { useEffect, useState } from "react";

export const useFetchData = <T>() => {
    const [booksToRender, setBooksToRender] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/books.json");
            if (!response.ok) {
                throw new Error("Nie można pobrać danych");
            }
            const data: T   [] = await response.json();
            setBooksToRender(data);
        } catch (error) {
            console.error("Błąd podczas pobierania danych:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        booksToRender,
        isLoading,
    }
}