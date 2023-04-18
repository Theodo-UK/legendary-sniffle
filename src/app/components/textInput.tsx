'use client';
import { useState } from 'react';

export const TextInput = () => {
  const [input, setInput] = useState('');

  const onSubmit = () => {
    console.log('User input:', input);
  };

  return (
    <div className="flex flex-row space-x-sm">
      <input
        className="block flex-1 rounded-md border border-grey px-sm py-sm placeholder-grey sm:text-sm"
        type="text"
        placeholder="Enter your question"
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className="text-white bg-blue rounded-md px-sm py-xs sm:text-sm"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};
