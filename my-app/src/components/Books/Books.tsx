import { use, useCallback, useEffect, useState } from "react";
import type { Book as BookType } from "../../App";
import { Book } from "../Book/Book";
// import { useFetchData } from "../../hooks/useFetchData";
import { fetchData } from "../../asyncActions/fetchBooks";
import styles from './Books.module.css';

const fetchBooksPromise = fetchData<BookType>();

export const Books = () => {
    const [notEnoughBooks, setNotEnoughBooks] = useState(false);
    // const { booksToRender: items, isLoading } = useFetchData<BookType>();
    const items = use(fetchBooksPromise);
    const [booksToRender, setBooksToRender] = useState<BookType[]>(items || []);

    // useEffect(() => {
    //     if (items) {
    //         setBooksToRender(items);
    //     }
    // }, [items]);
    
    // const listRef = useRef<HTMLUListElement>(null);

    // useEffect(() => {
    //     if (listRef.current) {
    //         const { height } = listRef.current.getBoundingClientRect();
    //         console.log("List height:", height);
    //         if (height > 500) {
    //             // zmiana stanu
    //         } else {
    //             // inna zmiana stanu
    //         }

    //     }
    // }, []);

    const handleListRefAction = useCallback((element: HTMLUListElement | null) => {
        if (element) {
            const { height } = element.getBoundingClientRect();
            setNotEnoughBooks(height < 500);
        }
    }, []);

    const handleRemoveBook = (id: number) => {
        console.log("Usuwamy książkę o id:", id);
        // const updatedBooks = booksToRender.filter((book) => book.id !== id);
        // setBooksToRender(updatedBooks);

        setBooksToRender((prevBooks) => {
            const updatedBooks = prevBooks.filter((book) => book.id !== id);
            return updatedBooks;
        });
    }

    useEffect(() => {
        document.title = `Masz ${booksToRender.length} książek!`;
    }, [booksToRender.length]);

    return (
        <div>
            {notEnoughBooks ? <p>Za mało książek. Zbieraj dalej!</p> : <p>Masz masę książek! Przystopuj!</p>}
            <ul ref={handleListRefAction} className={styles.books}>
                {booksToRender.map((item) => (
                    <li key={item.id}>
                        <Book book={item} removeBookAction={handleRemoveBook} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
