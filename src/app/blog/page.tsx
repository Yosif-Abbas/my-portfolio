import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Blog() {
  return (
    <div className="page-container">
      <div className="container">
        <h2 className="container-h2">Activities</h2>
        <p>This page is being worked on ☕🧟💻</p>
      </div>
    </div>
  );
}
