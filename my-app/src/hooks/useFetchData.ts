import { useEffect, useState } from "react";

export const useFetchData = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error("Nie można pobrać danych");
            }
            const data: T = await response.json();
            setData(data);
        } catch (error: unknown) {
            console.error("Błąd podczas pobierania danych:", error);
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error("Nieznany błąd"));
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        isLoading,
        error,
    }
}