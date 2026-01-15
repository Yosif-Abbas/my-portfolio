import AdminForm from '@/components/admin/AdminForm';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Admin',
};

export default async function Admin() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getSession();
  const user = data.session?.user ?? null;

  if (user) redirect('/');

  return (
    <div className="page-container">
      <div className="container">
        <h2 className="container-h2">Admin</h2>
        <AdminForm />
      </div>
    </div>
  );
}
