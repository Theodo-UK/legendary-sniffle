import { useState } from 'react';

export const TextInput = ({
  id = '',
  type = 'text',
  placeholder = 'Enter your question',
  setInput,
}) => {
  const [question, setQuestion] = useState('');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput(question);
  };
  return (
    <form className="flex flex-row space-x-sm" onSubmit={onSubmit}>
      <input
        id={id}
        className="block flex-1 rounded-md border border-grey p-sm placeholder-grey sm:text-sm"
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setQuestion(event.target.value);
        }}
      />
      <button
        className="text-white bg-blue rounded-md p-sm sm:text-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
