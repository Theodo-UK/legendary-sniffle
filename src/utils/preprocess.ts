import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import { createEmbeddings } from './createEmbedding';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const preprocess = async () => {
  const chunks = JSON.parse(fs.readFileSync('../../data/chunks.json', 'utf8'));
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  // console.log(chunks);
  const outputArray = await createEmbeddings(openai, chunks);
  console.log('check');
  console.log(outputArray);

  fs.writeFile(
    '../../data/embeddings.json',
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
};

preprocess();
