'use client';
import Image from 'next/image';
import icon from '@public/person.png';

type SubmittedQuestionType = {
  message: string;
};

export const SubmittedQuestion = ({ message }: SubmittedQuestionType) => {
  return (
    <div className="rounded-md text-user_grey sm:text-sm w-full text-left p-3 flex items-center gap-3">
      <Image alt="person icon" src={icon} width={32} height={32} />
      {message}
    </div>
  );
};
