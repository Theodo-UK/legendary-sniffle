import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { SupabaseResponse } from '@/types/SupabaseResponse';
import { OpenaiEmbeddingType } from '@/types/OpenaiApiType';
dotenv.config({ path: path.resolve(__dirname, '../../..', '.env.local') });

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

export const fetchContext = async (
  query_vector: OpenaiEmbeddingType
): Promise<SupabaseResponse[]> => {
  const response = await supabaseClient.rpc(
    'vector_search_allurls_chunks1000',
    {
      query_vector,
      match_threshold: 0.78,
      match_count: 5,
      min_content_length: 0,
    }
  );

  return response.data;
};

export default fetchContext;
