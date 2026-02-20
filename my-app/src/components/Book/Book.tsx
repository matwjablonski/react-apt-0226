import { useState } from 'react';
import { type Book as BookType } from '../../App';

// przykład z użyciem całego obiektu jako propsa
type BookProps = {
    book: Omit<BookType, 'id'>;
};

// przykład z użyciem destrukturyzacji
// type BookProps = Omit<BookType, 'id'>;

export const Book = ({ book: { name, author, publicationDate } }: BookProps) => {
    const [isBookRead, setIsBookRead] = useState(false);
    const bookStatus = isBookRead ? 'Przeczytana' : 'Nieprzeczytana';

    return (
        <div>
            <h2>{name} <small>{bookStatus}</small></h2>
            <p>{author} ({publicationDate})</p>
            <button onClick={() => setIsBookRead((prev) => !prev)}>
                {isBookRead ? 'Oznacz jako nieprzeczytaną' : 'Oznacz jako przeczytaną'}
            </button>
        </div>
    )
}
