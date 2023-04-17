import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { AppSupabaseClient, Table } from '@/types';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../lib/database.types';

dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

type EmbeddingDTO = Database['public']['Tables']['embedding']['Insert'];

const entries: EmbeddingDTO[] = JSON.parse(
  fs.readFileSync('./src/data/dummyEmbeddings.json', 'utf8')
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

const populateDatabase = async (
  supabase: AppSupabaseClient,
  items: EmbeddingDTO[]
): Promise<Table<'embedding'>> => {
  const { data, error } = await supabase.from('embedding').insert(items);

  if (error) {
    console.log('Insert failed:', error);
    throw error;
  }

  return data;
};

populateDatabase(supabase, entries);
