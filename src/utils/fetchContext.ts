import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

export const fetchContext = async (query_vector) => {
  const response = await supabaseClient.rpc('vector_search', {
    query_vector,
    match_threshold: 0.78,
    match_count: 5,
    min_content_length: 0,
  });
  return response.data;
};
