import { OpenaiApiType } from '@/app/types/OpenaiApiType';

const fetchData = async (): Promise<OpenaiApiType> => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + process.env.API_KEY,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test!' }],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return data as OpenaiApiType;
};

fetchData().then((response) =>
  console.log(response.choices[0].message.content)
);
