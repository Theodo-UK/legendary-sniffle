import dotenv from 'dotenv';
import * as path from 'path';
import { Configuration, OpenAIApi, CreateEmbeddingRequest } from 'openai';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });
import * as fs from 'fs';

const inputChunks = JSON.parse(
  fs.readFileSync('./src/utils//data/dummyChunks.json', 'utf8')
);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const outputArray: object[] = [];

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
  for (const obj of inputChunks) {
    const request: CreateEmbeddingRequest = {
      model: 'text-embedding-ada-002',
      input: obj.input_text,
    };
    const embedding = await callAPI(openai, request);
    outputArray.push({ ...obj, vector: JSON.stringify(embedding) });
  }
  fs.writeFile(
    './src/utils/data/dummyEmbeddings.json',
    JSON.stringify(outputArray),
    'utf8',
    function (error) {
      if (error) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(error);
      }

      console.log('Embeddings file has been saved.');
    }
  );
};

createEmbeddings(openai, inputChunks);
