import * as path from 'path';
import dotenv from 'dotenv';
import { OpenaiApiType } from '@/app/types/OpenaiApiType';

dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

const fetchData = async (): Promise<OpenaiApiType> => {
  // source: https://supabase.com/docs/guides/getting-started/openai/vector-search
  const temperamentPrimer =
    'You are a helpdesk assistant for WizzAir who loves to help users find the correct information for their questions from our FAQs.';
  const knowledgeBasePrimer =
    'If you are unsure and the answer is not explicitly written in the information provided, say "Sorry, I don\'t know how to help with that.';
  const legalityPrimer = 'You should not provide legal advice of any kind.';
  const userDummyMessage = 'This is a test message!';

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + process.env.API_KEY,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: temperamentPrimer },
        { role: 'system', content: knowledgeBasePrimer },
        { role: 'system', content: legalityPrimer },
        { role: 'user', content: userDummyMessage },
      ],
      temperature: 0.1,
    }),
  });

  const data = await response.json();
  return data as OpenaiApiType;
};

fetchData().then(
  (response) => console.log(response)
  // console.log(response.choices[0].message.content)
);
