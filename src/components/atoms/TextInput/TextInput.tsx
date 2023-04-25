import { useState } from 'react';

interface TextInputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  setInput: (value: string) => void;
}

export const TextInput = ({
  id = '',
  type = 'text',
  placeholder = 'Type your question here...',
  setInput,
}: TextInputProps) => {
  const [question, setQuestion] = useState('');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput(question);
  };
  return (
    <form className="relative w-full" onSubmit={onSubmit}>
      <input
        id={id}
        className="block w-full flex-1 rounded-md p-4 placeholder:text-user_grey sm:text-sm drop-shadow-md focus:outline-none"
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setQuestion(event.target.value);
        }}
      />
      <button
        className="text-white bg-blue rounded-md p-3 sm:text-sm absolute right-0 top-0 h-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
