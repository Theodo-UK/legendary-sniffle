import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './lib/database.types';

export type AppSupabaseClient = SupabaseClient<Database>;
export type Table<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];

export type EmbeddingsArray = {
  input_url: string;
  input_text: string;
  vector: string;
}[];
