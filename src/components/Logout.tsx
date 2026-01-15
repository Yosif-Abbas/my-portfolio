'use client';

import { logout } from '@/lib/actions/auth';
import { useServerAction } from '@/lib/hooks/useServerAction';

export default function Logout() {
  const { execute } = useServerAction(logout);

  const handleLogout = async () => {
    await execute();
  };

  return (
    <button className="text-red-600 cursor-pointer hover:text-[#edd4e6]" onClick={handleLogout}>
      Logout
    </button>
  );
}
