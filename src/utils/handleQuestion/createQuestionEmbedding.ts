import dotenv from 'dotenv';
import * as path from 'path';
import { OpenaiEmbeddingType } from '@/types/OpenaiApiType';
dotenv.config({
  path: path.resolve(__dirname, '../../../../..', '.env.local'),
});

const createQuestionEmbedding = async (
  query: string
): Promise<OpenaiEmbeddingType> => {
  const embeddingResponse = await fetch(
    'https://api.openai.com/v1/embeddings',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: query.replaceAll('\n', ' '),
      }),
    }
  );

  if (embeddingResponse.status !== 200) {
    throw `Failed to create embedding from question\n - Error Status: ${embeddingResponse.status} (${embeddingResponse.statusText})`;
  }

  const {
    data: [{ embedding }],
  } = await embeddingResponse.json();
  return embedding;
};

export default createQuestionEmbedding;
