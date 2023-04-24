import { ChatbotResponse } from '@/components/atoms/ChatbotResponse/ChatbotResponse';
import { ExampleQuestion } from '@/components/atoms/ExampleQuestion/ExampleQuestion';
import { TextInput } from '@/components/atoms/TextInput/TextInput';
import { OutputWindow } from '@/components/layout/OutputWindow/OutputWindow';
import useHome from '@/utils/useHome';

const Home = () => {
  const { setInput, chatbotResponse, isFetching, handleExampleQuestion } =
    useHome();
  const questions = [
    'Which transactions are charged with the Call Centre Transaction Fee?',
    'Can I make changes to my reservation or purchase services after I have checked in online?',
    'Wizz Air changed my flight. What happens to my selected seat?',
    'How can I submit a claim?',
  ];

  return (
    <OutputWindow>
      <div className="text-center h-24 bg-white">Logo</div>
      {(isFetching || chatbotResponse) && <div>Question</div>}
      <div className="h-full">
        {!chatbotResponse &&
          !isFetching &&
          questions.map((question) => (
            <ExampleQuestion
              question={question}
              key={question}
              onClick={handleExampleQuestion}
            />
          ))}
        {chatbotResponse && <ChatbotResponse {...chatbotResponse} />}
      </div>
      <TextInput setInput={setInput} />
    </OutputWindow>
  );
};

export default Home;
