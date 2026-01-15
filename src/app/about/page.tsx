import AboutMe from '@/components/about/AboutMe';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div className="page-container">
      <AboutMe />
    </div>
  );
}
