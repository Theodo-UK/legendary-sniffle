import dotenv from 'dotenv';
import * as path from 'path';
import { OpenaiEmbeddingType } from '@/app/types/OpenaiApiType';
dotenv.config({ path: path.resolve(__dirname, '../../../..', '.env.local') });

const createEmbedding = async (query: string): Promise<OpenaiEmbeddingType> => {
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
    throw 'Failed to create embedding for question';
  }

  const {
    data: [{ embedding }],
  } = await embeddingResponse.json();
  return embedding;
};

createEmbedding('').then((embedding) => console.log(embedding));
