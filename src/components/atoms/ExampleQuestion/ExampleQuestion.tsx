'use client';

import Image from 'next/image';
import icon from '@/public/images/communicate.png';

interface ExampleQuestionProps {
  question: string;
  onClick: (question: string) => void;
}

export const ExampleQuestion = ({
  question,
  onClick,
}: ExampleQuestionProps) => {
  return (
    <button
      className="rounded-md sm:text-sm w-full text-left hover:bg-light_grey p-3 flex items-center gap-3"
      onClick={() => onClick(question)}
    >
      <Image alt="" src={icon} width={32} height={32} />
      {question}
    </button>
  );
};
