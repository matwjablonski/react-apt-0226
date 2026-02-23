import { useMemo, useState } from 'react';
import { type Book as BookType } from '../../App';
import { Link } from 'react-router';
import styles from './Book.module.scss';
import { useStore } from '../../store';
import type { StoreState } from '../../store';

// przykład z użyciem całego obiektu jako propsa
type BookProps = {
    // book: Omit<BookType, 'id'>;
    book: BookType;
    removeBookAction?(id: number): void;
};

// przykład z użyciem destrukturyzacji
// type BookProps = Omit<BookType, 'id'>;

export const Book = ({ book: { name, author, publicationDate, id }, removeBookAction }: BookProps) => {
    const [votes, setVotes] = useState(() => {
        return Math.floor(author.length * 2 / 5);
    })
    const isBookRead = useStore((state: StoreState) => state.readBooks.includes(id));
    const bookStatus = isBookRead ? 'Przeczytana' : 'Nieprzeczytana';
    const { setBookAsRead } = useStore();

    const handleVote = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }

    const nameStyles = useMemo(() => ({
        color: isBookRead ? 'green' : 'black',
        textDecoration: isBookRead ? 'line-through' : 'none',
    }), [isBookRead]);

    return (
        <div className={styles.book}>
            <p>Oddano głosów: {votes}</p>
            <h2 style={nameStyles}>{name} <small>{bookStatus}</small></h2>
            <p>{author} ({publicationDate})</p>
            <button onClick={() => {
                // setIsBookRead((prev) => !prev);
                setBookAsRead(id);
            }}>
                {isBookRead ? 'Oznacz jako nieprzeczytaną' : 'Oznacz jako przeczytaną'}
            </button>
            <button onClick={handleVote}>Oddaj swój głos</button>
            <button onClick={() => removeBookAction && removeBookAction(id)} style={{ border: '2px solid red' }}>Usuń z listy</button>
            <Link to={`/books/${id}`}>Zobacz szczegóły</Link>
        </div>
    )
}
