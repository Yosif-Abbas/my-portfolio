export interface IBook {
  id: number | null;
  edition_id: number | null;
  title: string;
  rating: number | null;
  isbn: string | null;
  editionTitle: string | null;
  pages: number | null;
  cover: string | null;
  authors: string[];
  translators: string[];
  finishedAt: string | null;
}
