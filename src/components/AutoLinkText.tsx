import Link from 'next/link';

type LinkConfig = {
  href: string;
  className?: string;
};

const LINKS: Record<string, LinkConfig> = {
  books: { href: '/books', className: 'books-link' },
  Books: { href: '/books', className: 'books-link' },
  projects: { href: '/projects', className: 'projects-link' },
  Projects: { href: '/projects', className: 'projects-link' },
};

export default function AutoLinkText({ text }: { text: string }) {
  const regex = new RegExp(`\\b(${Object.keys(LINKS).join('|')})\\b`, 'g');

  return (
    <>
      {text.split(regex).map((part, i) => {
        const config = LINKS[part];
        if (!config) return part;

        return (
          <Link key={i} href={config.href} className={config.className}>
            {part}
          </Link>
        );
      })}
    </>
  );
}
