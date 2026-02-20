import { useState } from 'react';
import { type Book as BookType } from '../../App';

// przykład z użyciem całego obiektu jako propsa
type BookProps = {
    // book: Omit<BookType, 'id'>;
    book: BookType;
    removeBookAction?(id: number): void;
};

// przykład z użyciem destrukturyzacji
// type BookProps = Omit<BookType, 'id'>;

export const Book = ({ book: { name, author, publicationDate, id }, removeBookAction }: BookProps) => {
    const [isBookRead, setIsBookRead] = useState(false);
    const [votes, setVotes] = useState(() => {
        return Math.floor(author.length * 2 / 5);
    })
    const bookStatus = isBookRead ? 'Przeczytana' : 'Nieprzeczytana';

    const handleVote = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }

    return (
        <div>
            <p>Oddano głosów: {votes}</p>
            <h2>{name} <small>{bookStatus}</small></h2>
            <p>{author} ({publicationDate})</p>
            <button onClick={() => setIsBookRead((prev) => !prev)}>
                {isBookRead ? 'Oznacz jako nieprzeczytaną' : 'Oznacz jako przeczytaną'}
            </button>
            <button onClick={handleVote}>Oddaj swój głos</button>
            <button onClick={() => removeBookAction && removeBookAction(id)}>Usuń z listy</button>
        </div>
    )
}
