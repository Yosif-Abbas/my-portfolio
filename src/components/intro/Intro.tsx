import SocialLinks from './SocialLinks';
import { Lexend_Deca } from 'next/font/google';
import Portrait from './Portrait';
import Link from 'next/link';

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
});

export default function Intro() {
  return (
    <div className={`${lexendDeca.className} p-4 flex flex-col md:flex-row gap-x-4 container`}>
      <div className="pb-2 md:pb-0 mx-auto">
        <Portrait />
      </div>
      <div className="text-sm sm:text-base flex flex-col justify-between gap-y-2">
        <p className="font-light">
          Hi, I&apos;m Youssef Abbas, I am from El Menia, This is my website, really excited to have
          my own website 😅, I am a software developer, and I want to share with you some of my{' '}
          <span>
            <Link href="/projects" className="projects-link">
              programming projects
            </Link>
          </span>{' '}
          and I&apos;d like to share some hobbies and{' '}
          {/* <span>
            <Link href="/activities" className="activities-link">
              activities
            </Link>
          </span> */}
          activities I do.
          <br />
          <span>
            👉{' '}
            <Link href="/about" className="about-link">
              Here
            </Link>
          </span>
          , If you want to know more about me.
        </p>
        <div>
          <h2 className="font-medium">You can find me there as well!</h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
