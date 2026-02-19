import type { Book as BookType } from "../../App";
import { Book } from "../Book/Book";

type BooksProps = {
    items: BookType[]
};

export const Books = ({ items }: BooksProps) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <Book book={item} />
                </li>
            ))}
        </ul>
    );
};
