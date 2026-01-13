'use client';

import { FaGoodreadsG, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { TbBrandGithubFilled } from 'react-icons/tb';
import SocialLink from '../SocialLink';

export default function SocialLinks() {
  return (
    <div className="flex gap-x-6 justify-around max-w-86 py-2">
      <SocialLink
        Icon={TbBrandGithubFilled}
        title="Github"
        color="#000000"
        link="https://github.com/Yosif-Abbas"
      />
      <SocialLink
        Icon={ImFacebook}
        title="Facebook"
        color="#4267B2"
        link="https://www.facebook.com/youssef.abbas.14473/"
      />
      <SocialLink
        Icon={FaLinkedinIn}
        title="LinkedIn"
        color="#0077b5"
        link="https://www.linkedin.com/in/yosif-abbas-895468250/"
      />
      <SocialLink
        Icon={FaGoodreadsG}
        title="Goodreads"
        color="#181818"
        link="https://www.goodreads.com/user/show/191736337-yosif"
      />
      <SocialLink
        Icon={FaSpotify}
        title="Spotify"
        color="#1DB954"
        link="https://open.spotify.com/user/315mcxdnyok3cwfc7i3v46mtailu?si=d06d9671d95e4d9a"
      />
    </div>
  );
}

// https://www.goodreads.com/user/show/191736337-yosif
