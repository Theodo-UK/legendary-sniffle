import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

const useHome = () => {
  const [input, setInput] = useState('');

  const handleExampleQuestion = (question: string) => {
    setInput(question);
  };

  const submitUserQuestion = useCallback(async () => {
    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ question: input }),
    });

    return await res.json();
  }, [input]);

  const { data, isFetching } = useQuery({
    queryKey: ['getAnswer', input],
    queryFn: submitUserQuestion,
    enabled: !!input,
  });

  const chatbotResponse = data ? data.response : undefined;

  return {
    setInput,
    chatbotResponse,
    isFetching,
    handleExampleQuestion,
  };
};

export default useHome;
