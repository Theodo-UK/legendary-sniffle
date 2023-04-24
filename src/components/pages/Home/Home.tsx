import { ChatbotResponse } from '@/components/atoms/ChatbotResponse/ChatbotResponse';
import { ExampleQuestion } from '@/components/atoms/ExampleQuestion/ExampleQuestion';
import { TextInput } from '@/components/atoms/TextInput/TextInput';
import { OutputWindow } from '@/components/layout/OutputWindow/OutputWindow';
import { Header } from '@/components/molecules/Header/Header';
import { EXAMPLE_QUESTIONS } from '@/utils/constants';
import { Header } from '@/components/molecules/Header/Header';
import useHome from '@/utils/useHome';

const Home = () => {
  const { setInput, chatbotResponse, isFetching, handleExampleQuestion } =
    useHome();

  return (
    <OutputWindow>
      <Header />
      {(isFetching || chatbotResponse) && <div>Question</div>}
      <div className="h-full">
        {!chatbotResponse &&
          !isFetching &&
          EXAMPLE_QUESTIONS.map((question) => (
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
