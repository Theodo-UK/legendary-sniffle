import * as path from 'path';
import dotenv from 'dotenv';
import { OpenaiApiType, OpenaiMessageType } from '@/types/OpenaiApiType';
import {
  knowledgeBasePrimer,
  legalityPrimer,
  preventRoleChangePrimer,
  temperamentPrimer,
} from './primer';

dotenv.config({ path: path.resolve(__dirname, '../../../..', '.env.local') });

type getChatResponseType = {
  knowledge: string[];
  prompt: string;
};

export const getChatResponse = async (
  props: getChatResponseType
): Promise<OpenaiApiType> => {
  // source: https://supabase.com/docs/guides/getting-started/openai/vector-search
  const customKnowledge: OpenaiMessageType[] = props.knowledge
    ? props.knowledge.map((info) => {
        return { role: 'system', content: 'Information: ' + info };
      })
    : [];

  console.log(customKnowledge);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: temperamentPrimer },
        { role: 'system', content: preventRoleChangePrimer },
        { role: 'system', content: knowledgeBasePrimer },
        { role: 'system', content: legalityPrimer },
        ...customKnowledge,
        { role: 'user', content: 'Question: ' + props.prompt },
      ],
      temperature: 0,
    }),
  });

  const data = await response.json();

  return data as OpenaiApiType;
};
