import Link from 'next/link';

import { getBooks } from '@/lib/hardcover/books';

import BooksShelf from '@/components/books/BooksShelf';
import HardcoverIcon from '@/components/books/HardcoverIcon';

export default async function BooksContainer() {
  const finished2025 = await getBooks({ year: 2025 });
  const finished2026 = await getBooks({ year: 2026 });
  const currentlyReading = await getBooks({ status: 'currently_reading' });

  return (
    <div className="container">
        <div className='flex '>

        <h2 className="container-h2">Books</h2>
        <Link href='https://hardcover.app/join?referrer_id=65864' target='_blank' className='flex items-end gap-x-1'>
          <HardcoverIcon/>
        </Link>
        </div>
        <div className="flex flex-col gap-y-1">

          <BooksShelf books={currentlyReading} />
          <BooksShelf year={2026} books={finished2026} />
          <BooksShelf year={2025} books={finished2025} />

        </div>
      </div>
  )
}
