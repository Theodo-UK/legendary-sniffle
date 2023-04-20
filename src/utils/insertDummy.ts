import dotenv from 'dotenv';
import * as path from 'path';
import { AppSupabaseClient, Table } from '@/types/types';
import { createClient } from '@supabase/supabase-js';
import { EmbeddingDTO } from './populateDatabase';
import * as dummyVector from '../../data/dev/dummyVector.json';

dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

const dummyData: EmbeddingDTO = {
  input_text: 'This is a test string',
  input_url: 'https://test-url.com',
  usage_count: 0,
  vector: dummyVector.vector,
};

const insertItem = async (
  supabase: AppSupabaseClient,
  item: EmbeddingDTO
): Promise<Table<'embedding'>> => {
  const { data, error } = await supabase
    .from('embedding')
    .insert(item)
    .select('*')
    .single();

  if (error) {
    console.log('Insert failed:', error);
    throw error;
  }

  return data;
};

insertItem(supabase, dummyData);
