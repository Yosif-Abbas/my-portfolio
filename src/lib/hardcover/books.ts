// lib/books.ts

import { IBook } from '@/types/book';

type Author = {
  name: string;
};

type Contribution = {
  contribution: string | null;
  author: Author;
};

type Edition = {
  id?: number;
  title?: string;
  isbn_13?: string;
  pages?: number | null;
  physical_format?: string;
  image?: { url?: string };
  contributions?: Contribution[];
};

type UserBookRead = {
  finished_at?: string;
};

type BookData = {
  id?: number;
  title?: string;
};

type UserBook = {
  book?: BookData;
  edition?: Edition;
  user_book_reads?: UserBookRead[];
  rating?: number | null;
};

type RawData = {
  data: {
    me: [
      {
        user_books: UserBook[];
      },
    ];
  };
};

const HC_API = 'https://api.hardcover.app/v1/graphql';

async function fetchHardcover(query: string): Promise<RawData> {
  const res = await fetch(HC_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.HARDCOVER_API_KEY}`,
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });

  return res.json();
}

// Clean raw Hardcover data
export function cleanBooks(rawData: RawData): IBook[] {
  return rawData.data.me[0].user_books.map((ub) => {
    const edition = ub.edition ?? {};
    const bookData = ub.book ?? {};
    const contributions = edition.contributions ?? [];
    const read = ub.user_book_reads?.[0] ?? {};

    const authors = contributions.filter((c) => c.contribution === null).map((c) => c.author.name);

    const translators = contributions
      .filter((c) => c.contribution === 'Translator')
      .map((c) => c.author.name);

    return {
      id: bookData.id || null,
      edition_id: edition.id || null,
      title: edition.title || bookData.title || 'Unknown Title',
      rating: ub.rating || null,
      isbn: edition.isbn_13 || null,
      editionTitle: edition.title || null,
      pages: edition.pages || null,
      cover: edition.image?.url || null,
      authors,
      translators,
      finishedAt: read.finished_at || null,
    };
  });
}

// Fetch books by year or status
export async function getBooks({
  year,
  status,
}: {
  year?: number;
  status?: 'currently_reading' | 'want_to_read' | 'read';
} = {}): Promise<IBook[]> {
  let statusFilter = '';
  if (status === 'currently_reading') {
    statusFilter = 'status_id: {_eq: 2}';
  } else if (status === 'want_to_read') {
    statusFilter = 'status_id: {_eq: 1}';
  } else {
    // default: read books
    statusFilter = 'status_id: {_eq: 3}';
  }

  const yearFilter = year
    ? `user_book_reads: { finished_at: { _gte: "${year}-01-01", _lte: "${year}-12-31" } }`
    : '';

  // const dateSort = year ? 'user_book_reads: { { finished_at: desc }, limit: 1 }' : '';

  const query = `
    query ReadBooks {
      me {
        user_books(
        where: { 
          ${statusFilter},
          ${yearFilter} }
        order_by: {
          user_book_reads_aggregate: {
            max: { finished_at: desc }
          }
        }

        ) {
          book {
            id
            title
          }
          edition {
            id
            title
            isbn_13
            pages
            physical_format
            publisher { name }
            image { url }
            contributions {
              contribution
              author {
                name
              }
            }
          }
          user_book_reads {
            finished_at
          }
          rating
        }
      }
    }
  `;

  const rawData = await fetchHardcover(query);
  return cleanBooks(rawData);
}
