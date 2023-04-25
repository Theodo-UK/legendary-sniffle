'use client';
import Image from 'next/image';
import icon from '@public/person.png';

type SubmittedQuestionType = {
  message: string;
};

export const SubmittedQuestion = ({ message }: SubmittedQuestionType) => {
  return (
    <div className="rounded-md text-user_grey sm:text-sm w-full text-left p-3 flex items-start gap-3">
      <div className="flex-none">
        <Image alt="person icon" src={icon} width={32} height={32} />
      </div>
      <div className="pt-1">{message}</div>
    </div>
  );
};
