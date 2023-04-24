'use client';

type ChatResponseType = {
  message: string;
};

export const ChatbotResponse = ({ message }: ChatResponseType) => {
  return <div>{`${message}`}</div>;
};
