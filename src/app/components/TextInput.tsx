'use client';
import { useState } from 'react';

export const TextInput = ({
  id = '',
  type = 'text',
  placeholder = 'Enter your question',
}) => {
  const [input, setInput] = useState('');

  const onSubmit = () => {
    console.log('User input:', input);
  };

  return (
    <div className="flex flex-row space-x-sm">
      <input
        id={id}
        className="block flex-1 rounded-md border border-grey p-sm placeholder-grey sm:text-sm"
        type={type}
        placeholder={placeholder}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className="text-white bg-blue rounded-md p-sm sm:text-sm"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};
