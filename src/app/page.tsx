import Intro from '@/components/intro/Intro';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getSession();
  const user = data.session?.user ?? null;

  return (
    <div className="py-8 flex flex-col items-center">
      <Intro />
    </div>
  );
}
