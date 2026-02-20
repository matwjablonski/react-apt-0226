export const fetchData = async <T>() => {
    try {
        const response = await fetch("/books.json");
        if (!response.ok) {
            throw new Error("Nie można pobrać danych");
        }
        const data: T[] = await response.json();
        return data;
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
}