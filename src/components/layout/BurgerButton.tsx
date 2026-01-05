type Props = {
  open: boolean;
  onClick: () => void;
};

export default function BurgerButton({ open, onClick }: Props) {
  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onClick}
      className="flex flex-col p-4  gap-[4px] sm:hidden cursor-pointer hover:bg-[#10101050]"
    >
      <span className={`burger-bar ${open && 'rotate-45 translate-y-[8px]'}`} />
      <span className={`burger-bar ${open && 'opacity-0'}`} />
      <span className={`burger-bar ${open && '-rotate-45 -translate-y-[8px]'}`} />
    </button>
  );
}
