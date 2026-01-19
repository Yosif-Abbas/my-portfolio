'use client';

import ImageContainer from '@/components/ImageContainer';
import Link from 'next/link';
import AutoLinkText from '../AutoLinkText';

export default function AboutMe() {
  return (
    <div className="container">
      <h2 className="container-h2">About Me</h2>
      <div className="mt-2">
        <ImageContainer
          src="/about-images/image-2.jpg"
          alt="Youssef Abbas"
          className="my-4"
          fullQuality
        />
        <div
          className="font-light text-base leading-relaxed 
          md:text-lg md:text-left"
        >
          <p>
            Hi, I&apos;m Youssef, I am from El Menia and a recent computer science graduate from
            Menia university, I am primarily a front-end developer, using React and Next.js to
            create modern, user-friendly websites, I Learned React and Next.js through{' '}
            <Link
              target="_blank"
              href="https://www.udemy.com/certificate/UC-8b327141-d046-468d-8da4-5a7d384adb8b/"
              className="text-link"
            >
              Jonas Schmedtmann&apos;s course
            </Link>{' '}
            and built{' '}
            <Link
              target="_blank"
              href="https://the-wild-oasis-alpha-lovat.vercel.app"
              className="text-link"
            >
              The Wild Oasis
            </Link>{' '}
            (hotel admin dashboard) , and{' '}
            <Link
              target="_blank"
              href="https://the-wild-oasis-website-seven-nu.vercel.app/"
              className="text-link"
            >
              The Wild Oasis Website
            </Link>{' '}
            (customer-facing site). Recently I&apos;ve been exploring back-end development using
            Express and Mongoose, And built the{' '}
            <Link
              target="_blank"
              href="https://natours-backend-two.vercel.app/api-docs"
              className="text-link"
            >
              Natours API
            </Link>{' '}
            using TypeScript for the first time.
          </p>
          <br />
          <p>
            I&apos;m particularly proud of my graduation project, a 3-month collaboration with a
            teammate where we built a full website from scratch using{' '}
            <Link
              target="_blank"
              href="https://github.com/Yosif-Abbas/EDUQUEST"
              className="text-link"
            >
              Github
            </Link>
            . We used React, TanStack Query and Tailwind for the front-end, and Supabase for
            back-end and database.{' '}
            <Link target="_blank" href="https://eduquest-d1d.pages.dev/" className="text-link">
              EDUQUEST
            </Link>{' '}
            is a role-based learning platform: teachers can create and manage courses, while
            students can browse and enroll in them.
          </p>
          <br />
          <br />



          
          <p>
            <AutoLinkText text="I used to spend a lot of time playing video games such as League of Legends, Valorant,
              and Apex Legends. In 2025, I decided to quit and shift my focus toward more meaningful
              habits, particularly reading. That decision helped me save a significant amount of time." />
          </p>
          <p>
          <AutoLinkText text="  I enjoy listening to music across a wide range of genres. My favorites include lo-fi hip-hop, instrumental classical music, and classic Arabic music. My favorite singer is Umm Kulthum." />
          </p>
        </div>
      </div>
    </div>
  );
}
