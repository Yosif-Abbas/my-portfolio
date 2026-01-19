import { IBook } from '@/types/book';
import BookCard from './BookCard';

export default function BooksShelf({ books, year }: { books: IBook[]; year?: number }) {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center px-2 py-2 ">
        <div className="flex gap-x-2 items-center ">
          {year ? (
            <>
              <h3 className="font-medium text-xl">{year}</h3>
              <p className="text-xs opacity-80">({books.length} Books Read)</p>
            </>
          ) : (
            <h3 className="font-medium text-xl">Currenty Reading</h3>
          )}
        </div>
      </div>
      <div className={`divide-y divide-[#edd4e610] overflow-hidden delay`}>
        {books.map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
