export interface Project {
  id: string;
  title: string;
  essence?: string;
  slug: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  logo?: string;
  image: string;
}
