import Link from 'next/link';

import { getBooks } from '@/lib/hardcover/books';

import BooksShelf from '@/components/books/BooksShelf';
import HardcoverIcon from '@/components/books/HardcoverIcon';

export default async function BooksContainer() {
  const currentlyReadingPromise = getBooks({ status: 'currently_reading' });

  const currentYear = new Date().getFullYear();
  const startYear = 2002;

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index,
  );

  const yearlyBooksPromises = years.map(async (year) => {
    const books = await getBooks({ year });
    return { year, books };
  });

  const [currentlyReading, ...yearlyBooksData] = await Promise.all([
    currentlyReadingPromise,
    ...yearlyBooksPromises,
  ]);

  return (
    <div className="container">
      <div className="flex ">
        <h2 className="container-h2">Books</h2>
        <Link
          href="https://hardcover.app/join?referrer_id=65864"
          target="_blank"
          className="flex items-end gap-x-1"
        >
          <HardcoverIcon />
        </Link>
      </div>
      <div className="flex flex-col gap-y-1">
        {currentlyReading && currentlyReading.length > 0 && <BooksShelf books={currentlyReading} />}
        {yearlyBooksData.map(({ year, books }) => {
          if (!books || books.length === 0) return null;

          return <BooksShelf key={year} year={year} books={books} />;
        })}
      </div>
    </div>
  );
}
