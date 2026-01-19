import Link from 'next/link';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`absolute z-9 top-full left-0 w-full sm:hidden shadow-xl bg-[#3a1830] ${
        open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } transition-all duration-200`}
    >
      <ul className="flex flex-col divide-y divide-[#eeeeee10]">
        
      <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/books" onClick={onClose} className="flex-1 p-3">
            Books
          </Link>
        </li>

        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/projects" onClick={onClose} className="flex-1 p-3">
            Projects
          </Link>
        </li>
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/about" onClick={onClose} className="flex-1 p-3">
            About
          </Link>
        </li>

        {/* <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/activities" onClick={onClose} className="flex-grow p-3">
            Activities
          </Link>
        </li>
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/blog" onClick={onClose} className="flex-grow p-3">
            Blog
          </Link>
        </li> */}
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/contact" onClick={onClose} className="flex-1 p-3">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
