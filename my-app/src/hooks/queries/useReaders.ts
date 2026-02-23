import { useQuery } from "@tanstack/react-query"
import { fetchReaders } from "../../asyncActions/fetchReaders"

export const useReaders = <T, >() => {
    return useQuery({
        queryKey: ['readers'],
        queryFn: fetchReaders<T>,
    })
}