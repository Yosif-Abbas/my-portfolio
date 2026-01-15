'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function getProjects() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true });

  console.log(data);

  if (error) throw error;
  return data;
}
