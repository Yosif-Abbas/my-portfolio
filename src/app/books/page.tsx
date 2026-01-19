
import BooksContainer from '@/components/books/BooksContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books',
};


export default async function BooksPage() {
  
  return (
    <div className="page-container">
      <BooksContainer/>
    </div>
  );
}
