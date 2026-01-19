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

  return (
    <div className="flex-1 px-1 py-2 bg-black/10 ">
      <div className="flex items-center text-sm sm:text-lg  ">
        <div className="flex gap-1 ">
          <div className="self-center">
            {book.finishedAt ? (
              <FiBook color="#8f7c7c" size={20} />
            ) : (
              <FiBookOpen color="#8f7c7c" size={20} />
            )}
          </div>
          <h4 className="text-[#8f7c7c] text-nowrap">{book.title}</h4>
          <p>
            <span>By: </span>
            {book.authors?.join(', ')}

            <span className="text-xs opacity-80">
              {book.translators[0] ? ` (Translator ${book.translators?.join(', ')})` : ''}
            </span>
          </p>
        </div>
        {book.finishedAt ? (
          <div className="ml-auto flex flex-col md:flex-row items-center md:divide-x divide-[#edd4e62e]">
            <p className="text-xs pr-1 text-nowrap">
              <span>Read At </span>
              {formattedReadDate}
            </p>
            <div className="pl-1">{book.rating ? <StarRating value={book.rating} /> : ''}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

// {book.cover ? (
//   <Image
//     src={book.cover}
//     alt={book.title}
//     width={300}
//     height={450}
//     quality={100}
//     priority
//     style={{
//       width: '75px',
//       height: 'auto',
//     }}
//     className="rounded-xs"
//   />
// ) : (
//   <div className="h-[120px] w-[75px] flex items-center justify-center">
//     <FiBook size={50} />
//   </div>
// )}
