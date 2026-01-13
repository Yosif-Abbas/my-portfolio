import Link from 'next/link';
import { IconType } from 'react-icons';
import { useState } from 'react';
import GoogleIcon from './GmailIcon';

type Props = {
  title: string;
  color?: string;
  link: string;
  Icon: IconType | React.FC<{ size?: number; isHovered?: boolean }>;
  size?: number;
  hideName?: boolean;
  className?: string;
};

export default function SocialLink({
  title,
  color,
  link,
  Icon,
  size = 26,
  hideName,
  className,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      className={`transition-colors duration-175 flex flex-col items-center ${className}`}
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon === GoogleIcon ? (
        <Icon size={size} isHovered={isHovered} />
      ) : (
        <Icon size={size} style={{ color: isHovered ? color : '' }} />
      )}

      <span
        className={`text-xs font-normal tracking-widest hidden ${
          hideName ? '' : 'sm:inline-block'
        }`}
        style={{ color: isHovered ? color : '' }}
      >
        {title}
      </span>
    </Link>
  );
}
