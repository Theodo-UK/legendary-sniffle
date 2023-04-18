import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import { createEmbeddings } from './createEmbedding';
import { populateDatabase } from './populateDatabase';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const preprocess = async (table_name: string) => {
  const chunks = JSON.parse(fs.readFileSync('data/chunks.json', 'utf8'));
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const outputArray = await createEmbeddings(openai, chunks);

  fs.writeFile(
    'data/embeddings.json',
    JSON.stringify(outputArray),
    'utf8',
    (error) => {
      if (error) {
        console.log('An error occurred while writing JSON Object to File.');
        return;
      }

      console.log('Embeddings file has been saved.');
    }
  );

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
  );
  populateDatabase(supabase, outputArray, table_name);
};
const table_name = process.argv[2];
if (!table_name) {
  throw new Error(
    'Error: No table specified. Provide as argument in terminal.'
  );
}
preprocess(table_name);
