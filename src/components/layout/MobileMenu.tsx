import Link from 'next/link';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed z-9 top-0 left-0 w-full md:hidden shadow-xl bg-[#3a1830] ${
        open ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-200`}
    >
      <ul className="flex flex-col divide-y divide-[#eeeeee10]">
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/home" onClick={onClose} className="flex-grow p-3">
            Home
          </Link>
        </li>
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/projects" onClick={onClose} className="flex-grow p-3">
            Projects
          </Link>
        </li>
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/about" onClick={onClose} className="flex-grow p-3">
            About
          </Link>
        </li>
        <li className="hover:bg-[#10101010] text-lg flex">
          <Link href="/contact" onClick={onClose} className="flex-grow p-3">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
