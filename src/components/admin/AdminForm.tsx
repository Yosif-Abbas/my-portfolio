'use client';

import { useState } from 'react';
import Input from '../Input';
import Spinner from '../Spinner';
import { adminLogin } from '@/lib/actions/auth';
import { useServerAction } from '@/lib/hooks/useServerAction';
import { redirect } from 'next/navigation';

export default function AdminForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error, execute } = useServerAction(adminLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await execute({ email, password });
    if (result) {
      console.log('Logged in user:', result.user);
      console.log('data:', result);
      redirect('/');
    }
    if (error) console.log('error:', error);
  };

  return (
    <form className="flex flex-col gap-y-4 justify-center items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Input
          required
          id="email"
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          isLoading={isLoading}
        />
      </div>
      <div className="flex flex-col">
        <Input
          required
          id="password"
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
          isLoading={isLoading}
        />
      </div>
      <button disabled={isLoading} className="border rounded-full w-60 p-2 cursor-pointer text-lg">
        {isLoading ? <Spinner /> : 'Send Message'}
      </button>
    </form>
  );
}
