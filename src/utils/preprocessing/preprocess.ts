import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import { createEmbeddings } from './createContextEmbeddings';
import { populateDatabase } from './populateDatabase';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const preprocess = async (table_name: string) => {
  const chunks = JSON.parse(fs.readFileSync('data/prod/chunks.json', 'utf8'));
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  console.log('Creating embeddings...');
  const embeddings = await createEmbeddings(openai, chunks);

  fs.writeFile(
    'data/prod/embeddings.json',
    JSON.stringify(embeddings),
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
  console.log(`Writing embeddings to supabase in table ${table_name}...`);
  populateDatabase(supabase, embeddings, table_name);
  console.log('Done!');
};
const table_name = process.argv[2];
if (!table_name) {
  throw new Error(
    'Error: No table specified. Provide as argument in terminal.'
  );
}
preprocess(table_name);
