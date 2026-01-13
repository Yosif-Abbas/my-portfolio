'use client';

import { useState } from 'react';

import Spinner from '../Spinner';
import ContactSuccess from './ContactSuccess';
import ContactError from './ContactError';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusCode(0);
    setLoading(true);

    const result = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, email, name }),
    });

    setStatusCode(result.status);
    setMessage('');
    setEmail('');
    setName('');
    setLoading(false);
  }

  if (statusCode === 200) return <ContactSuccess name={name} />;
  if (statusCode === 500) return <ContactError setStatusCode={setStatusCode} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-8 px-8 items-center">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-xl">
          Full Name
        </label>
        <input
          required
          type="text"
          id="name"
          value={name}
          minLength={3}
          maxLength={30}
          onChange={(e) => setName(e.target.value)}
          className="input"
          disabled={loading}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-xl">
          E-mail (Optional)
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          disabled={loading}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-xl">
          Message
        </label>
        <textarea
          required
          id="message"
          value={message}
          minLength={4}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          disabled={loading}
        />
      </div>

      <button disabled={loading} className="border rounded-full w-60 p-2 cursor-pointer text-lg">
        {loading ? <Spinner /> : 'Send Message'}
      </button>
    </form>
  );
}
