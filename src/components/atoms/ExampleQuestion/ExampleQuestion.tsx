'use client';

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
      className="rounded-md sm:text-sm w-full text-left hover:bg-light_grey p-5"
      onClick={() => onClick(question)}
    >
      {question}
    </button>
  );
};
