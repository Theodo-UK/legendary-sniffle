import dotenv from 'dotenv';
import * as path from 'path';
import { AppSupabaseClient, Table } from '@/types';
import { Database } from '../lib/database.types';

dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

export type EmbeddingDTO = Database['public']['Tables']['embedding']['Insert'];

export const populateDatabase = async (
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
