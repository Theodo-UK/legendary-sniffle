import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Configuration, OpenAIApi, CreateEmbeddingRequest } from 'openai';
import { EmbeddingsArray } from '@/types';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const inputChunks = JSON.parse(
  fs.readFileSync('./src/utils//data/dummyChunks.json', 'utf8')
);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const outputArray: EmbeddingsArray = [];

const callAPI = async (openai, request) => {
  try {
    const completion = await openai.createEmbedding(request);
    return completion.data.data[0].embedding;
  } catch (error) {
    if (error.response) {
      console.log('ERROR STATUS CODE: ', error.response.status);
    } else {
      console.log(error.message);
    }
  }
};

const createEmbeddings = async (openai, inputChunks) => {
  for (const chunk of inputChunks) {
    const request: CreateEmbeddingRequest = {
      model: 'text-embedding-ada-002',
      input: chunk.input_text,
    };
    const embedding = await callAPI(openai, request);
    outputArray.push({ ...chunk, vector: JSON.stringify(embedding) });
  }
  fs.writeFile(
    './src/utils/data/dummyEmbeddings.json',
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

createEmbeddings(openai, inputChunks);
