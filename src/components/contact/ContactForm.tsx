'use client';

import { useState } from 'react';

import Spinner from '../Spinner';
import ContactSuccess from './ContactSuccess';
import ContactError from './ContactError';
import Input from '../Input';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusCode(0);
    setIsLoading(true);

    const result = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, email, name }),
    });

    setStatusCode(result.status);
    setMessage('');
    setEmail('');
    setName('');
    setIsLoading(false);
  }

  if (statusCode === 200) return <ContactSuccess name={name} />;
  if (statusCode === 500) return <ContactError setStatusCode={setStatusCode} />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-8 px-8 items-center">
      <div className="flex flex-col">
        <Input
          id="name"
          label="Full Name"
          required
          type="text"
          value={name}
          setValue={setName}
          isLoading={isLoading}
        />
      </div>

      <div className="flex flex-col">
        <Input
          id="email"
          label="E-mail (Optional)"
          type="email"
          value={email}
          setValue={setEmail}
          isLoading={isLoading}
        />
      </div>

      <div className="flex flex-col">
        <Input
          required
          id="message"
          label="Message"
          type="textarea"
          value={message}
          setValue={setMessage}
          isLoading={isLoading}
        />
      </div>

      <button disabled={isLoading} className="border rounded-full w-60 p-2 cursor-pointer text-lg">
        {isLoading ? <Spinner /> : 'Send Message'}
      </button>
    </form>
  );
}
