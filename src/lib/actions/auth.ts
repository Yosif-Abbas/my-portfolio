'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function adminLogin({ email, password }: { email: string; password: string }) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export async function logout() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
