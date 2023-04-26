import { OpenaiApiType } from '@/types/OpenaiApiType';
import extractKnowledge from '@/utils/handleQuestion/extractKnowledge';
import { getChatResponse } from './getChatResponse';
import createQuestionEmbedding from './createQuestionEmbedding';
import fetchContext from './fetchContext';

export type CallOpenaiType = {
  chatMessage: string;
  associatedUrl: string;
};

export const callOpenai = async (
  userQuestion: string
): Promise<CallOpenaiType> => {
  const embedding = await createQuestionEmbedding(userQuestion);
  const contextResponse = await fetchContext(embedding);

  if (contextResponse.length === 0) {
    console.warn(
      `Warning: Could not find any similar embeddings from the database relating to the question "${userQuestion}".`
    );
    return {
      chatMessage: 'Unable to find information on this topic.',
      associatedUrl: '',
    };
  }

  const customKnowledge = await extractKnowledge(contextResponse);

  const associatedUrl = customKnowledge[0].associatedUrl;

  const chatResponse: OpenaiApiType = await getChatResponse({
    knowledge: customKnowledge,
    prompt: userQuestion,
  });

  if (chatResponse.choices.length === 0) {
    throw new Error('ChatGPT did not provide any answers.');
  }
  const messageResponse = chatResponse.choices[0].message.content;

  const chatMessage = messageResponse.startsWith('Answer: ')
    ? messageResponse.substring(8)
    : messageResponse;

  return { chatMessage, associatedUrl };
};
