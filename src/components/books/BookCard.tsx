'use client';

import { FiBook, FiBookOpen } from 'react-icons/fi';
import StarRating from './StarRating';
import { IBook } from '@/types/book';

export default function BookCard({ book }: { book: IBook }) {
  const date = new Date(book.finishedAt || '');
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate().toString().padStart(2, '0');

  const formattedReadDate = `${day}-${month}-${year}`;

  const authors = book.authors?.join(', ');

  console.log(book);

  const translators =
    book.translators && book.translators.length > 0 && book.translators.join(', ');

  return (
    <div className="flex-1 px-2 py-3 bg-black/10 hover:bg-black/20 transition-colors duration-200">
      <div className="flex items-center text-sm sm:text-base">
        {/* FIX 1: Replaced w-full with flex-1 and added min-w-0 */}
        <div className="flex gap-3 items-start sm:items-center flex-1 min-w-0">
          <div className="shrink-0 mt-1 sm:mt-0">
            {book.finishedAt ? (
              <FiBook color="#8f7c7c" size={20} />
            ) : (
              <FiBookOpen color="#8f7c7c" size={20} />
            )}
          </div>

          {/* FIX 2: Replaced w-full with flex-1 and added min-w-0 */}
          <div className="flex flex-col sm:flex-row gap-x-2 flex-1 min-w-0 ">
            {/* FIX 3: Removed hardcoded max-w-50/75. Let flexbox handle the truncation dynamically! */}
            <h4
              className="text-[#8f7c7c] font-medium truncate sm:overflow-visible sm:whitespace-nowrap"
              title={book.title}
            >
              {book.title}
            </h4>

            <p className=" text-gray-400 truncate">
              <span className="opacity-70">By: </span>
              {authors}
              {translators && (
                <span className="text-xs opacity-60 ml-1">(Trans. {translators})</span>
              )}
            </p>
          </div>
        </div>

        {book.finishedAt && (
          <div className="ml-auto flex flex-col items-end sm:flex-row sm:items-center sm:divide-x divide-[#edd4e62e] shrink-0 pl-2">
            <p className="text-xs sm:pr-3 text-gray-400 whitespace-nowrap">
              <span className="hidden sm:inline opacity-70">Read: </span>
              {formattedReadDate}
            </p>
            <div className="sm:pl-3 mt-1 sm:mt-0">
              {book.rating ? <StarRating value={book.rating} /> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
