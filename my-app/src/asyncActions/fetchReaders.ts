import { buildApiUrl } from "../utils/buildApiUrl";

export const fetchReaders = async <T>() => {
    try {
        const fullApiUrl = buildApiUrl('users');
        const response = await fetch(fullApiUrl);;
        if (!response.ok) {
            throw new Error("Nie można pobrać danych");
        }
        const data: T[] = await response.json();
        return data;
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
}