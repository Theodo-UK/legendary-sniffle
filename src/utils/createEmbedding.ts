import dotenv from 'dotenv';
import * as path from 'path';
import { CreateEmbeddingRequest, OpenAIApi } from 'openai';
import { Chunk, EmbeddingsArray } from '@/types';
import { CreateEmbeddingResponseDataInner } from '@/types/EmbeddingType';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const IsCreateEmbeddingResponseDataInnerArray = (
  inp: CreateEmbeddingResponseDataInner[] | undefined
): inp is CreateEmbeddingResponseDataInner[] => {
  return (inp as CreateEmbeddingResponseDataInner[]).push !== undefined;
};

const callAPI = async (openai: OpenAIApi, request: CreateEmbeddingRequest) => {
  try {
    const response = await openai.createEmbedding(request);

    const embeddings = response.data.data.map((embedding_response) => {
      return embedding_response;
    });

    return embeddings;
  } catch (error) {
    if (error.response) {
      console.log('ERROR STATUS CODE: ', error.response.status);
    } else {
      console.log(error.message);
    }
  }
};

export const createEmbeddings = async (
  openai: OpenAIApi,
  inputChunks: Chunk[]
) => {
  const request: CreateEmbeddingRequest = {
    model: 'text-embedding-ada-002',
    input: inputChunks.map((inputChunk) => {
      return inputChunk.input_text;
    }),
  };
  const embeddings = await callAPI(openai, request);
  const outputArray: EmbeddingsArray = inputChunks.map((inputChunk, index) => {
    if (IsCreateEmbeddingResponseDataInnerArray(embeddings)) {
      const embedding = embeddings.filter((val) => {
        return val.index === index;
      })[0];
      return {
        input_url: inputChunk.url,
        input_text: inputChunk.input_text,
        vector: JSON.stringify(embedding.embedding),
      };
    }

    throw Error('Embeddings were unable to be created.');
  });

  return outputArray;
};
