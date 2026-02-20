import { useState } from "react";
import type { Book as BookType } from "../../App";
import { Book } from "../Book/Book";

type BooksProps = {
    items: BookType[]
};

export const Books = ({ items }: BooksProps) => {
    const [notEnoughBooks, setNotEnoughBooks] = useState(false);
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

    const handleListRefAction = (element: HTMLUListElement | null) => {
        if (element) {
            const { height } = element.getBoundingClientRect();
            setNotEnoughBooks(height < 500);
        }
    }

    return (
        <div>
            {notEnoughBooks ? <p>Za mało książek. Zbieraj dalej!</p> : <p>Masz masę książek! Przystopuj!</p>}
            <ul ref={handleListRefAction}>
                {items.map((item) => (
                    <li key={item.id}>
                        <Book book={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
