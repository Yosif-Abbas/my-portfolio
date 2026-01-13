'use client';

import { FaWhatsapp } from 'react-icons/fa';
import SocialLink from '../SocialLink';
import GoogleIcon from '../GmailIcon';

export default function ContactMe() {
  return (
    <div className="flex flex-col gap-y-2 flex-1 px-8">
      <h2 className="text-xl ">Contact Me</h2>
      <div className="flex gap-8 pl-4">
        <SocialLink
          Icon={FaWhatsapp}
          title="Github"
          color="#25D366"
          link="https://wa.me/201091933225"
          size={38}
          hideName
          className="items-start"
        />
        <SocialLink
          Icon={GoogleIcon}
          title="Github"
          link="mailto:joeabbas299@gmail.com"
          size={38}
          hideName
          className="items-start"
        />
      </div>
    </div>
  );
}
