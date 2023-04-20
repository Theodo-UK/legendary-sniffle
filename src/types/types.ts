import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../lib/database.types';

export type AppSupabaseClient = SupabaseClient<Database>;
export type Table<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];

export type Embedding = {
  input_url: string;
  input_text: string;
  vector: string;
};

export type EmbeddingsArray = Embedding[];

export type Chunk = {
  url: string;
  input_text: string;
};
