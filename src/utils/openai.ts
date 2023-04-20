import { OpenaiApiType } from '@/types/OpenaiApiType';
import extractKnowledge from '@/utils/extractKnowledge/extractKnowledge';
import fetchContext from '@/utils/fetchContext';
import * as readline from 'readline';
import { getChatResponse } from './handleApiRequest/getChatResponse/getChatResponse';
import createEmbedding from './handleApiRequest/createEmbedding/createEmbedding';

const callOpenai = async (userQuestion: string) => {
  const embedding = await createEmbedding(userQuestion);
  const contextResponse = await fetchContext(embedding);

  if (contextResponse.length === 0) {
    return 'Unable to find information on this topic.';
  }

  const customKnowledge = await extractKnowledge(contextResponse);

  const chatResponse: OpenaiApiType = await getChatResponse({
    knowledge: customKnowledge,
    prompt: userQuestion,
  });

  const chatMessage = chatResponse.choices[0].message.content;

  return chatMessage;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Question: ', (prompt) => {
  callOpenai(prompt).then((res) => console.log(res));
  rl.close();
});
