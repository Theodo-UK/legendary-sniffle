import { OpenaiApiType } from '@/app/types/OpenaiApiType';
import extractKnowledge from '@/app/utils/extractKnowledge/extractKnowledge';
import createEmbedding from '@/app/utils/handleApiRequest/createEmbedding/createEmbedding';
import { getChatResponse } from '@/app/utils/handleApiRequest/getChatResponse/getChatResponse';
import fetchContext from '@/utils/fetchContext';
import * as readline from 'readline';

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
