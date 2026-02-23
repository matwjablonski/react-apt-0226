import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type StoreState = {
    readBooks: number[];
    setBookAsRead: (bookId: number) => void;
}

export const useStore = create<StoreState>()(
    devtools((set) => ({
        readBooks: [],
        setBookAsRead: (bookId: number) => set((state) => ({
            readBooks: 
                state.readBooks.includes(bookId) 
                    ? state.readBooks.filter((id) => id !== bookId) 
                : [...state.readBooks, bookId]
    })),
})));
