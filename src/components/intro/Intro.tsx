import SocialLinks from './SocialLinks';
import { Lexend_Deca } from 'next/font/google';
import Portrait from './Portrait';
import Link from 'next/link';
import AutoLinkText from '../AutoLinkText';

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
});

export default function Intro() {
  return (
    <div className={`${lexendDeca.className} p-4 flex flex-col md:flex-row gap-x-4 container`}>
      <div className="pb-2 md:pb-0 mx-auto">
        <Portrait />
      </div>
      <div className="text-sm sm:text-base flex flex-col justify-between gap-y-2 font-light">
        <div className="flex flex-col gap-y-3">
          <p className="">
          <AutoLinkText text="Hi, I&apos;m Youssef Abbas, a software developer from El Menia, This is my personal
            website where I share my programming projects along with some of my hobbies and 
            activities.
            " />
          </p>
          <p>
          <AutoLinkText text="On this site you can find books I read, games I play, music I listen to and all other
            activities that I like to share." />
          </p>
          <p>
            <span>
              <Link href="/about" className="about-link">
                Here
              </Link>
            </span>
            , If you want to know more about me.
          </p>
        </div>
        <div>
          <h2 className="font-medium">You can find me there as well!</h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
