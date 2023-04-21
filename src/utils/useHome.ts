import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

const useHome = () => {
  const [input, setInput] = useState('');

  const handleClick = () => {
    refetch();
  };

  const submitUserQuestion = useCallback(async () => {
    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ question: input }),
    });

    return await res.json();
  }, [input]);

  const { data, refetch } = useQuery({
    queryKey: ['getAnswer'],
    queryFn: submitUserQuestion,
    enabled: false,
  });

  const chatbotResponse = data ? data.response : undefined;

  return {
    setInput,
    handleClick,
    chatbotResponse,
  };
};

export default useHome;
