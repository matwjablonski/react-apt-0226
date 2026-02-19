import { type Book as BookType } from '../../App';

// przykład z użyciem całego obiektu jako propsa
type BookProps = {
    book: Omit<BookType, 'id'>;
};

// przykład z użyciem destrukturyzacji
// type BookProps = Omit<BookType, 'id'>;

export const Book = ({ book: { name, author, publicationDate } }: BookProps) => {
    return (
        <div>
            {name} - {author} ({publicationDate})
        </div>
    )
}