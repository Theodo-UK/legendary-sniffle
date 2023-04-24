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
      className="rounded-md p-sm sm:text-sm w-full text-left hover:bg-grey"
      onClick={() => onClick(question)}
    >
      {question}
    </button>
  );
};
