import { ChatbotResponse } from '@/components/atoms/ChatbotResponse/ChatbotResponse';
import { TextInput } from '@/components/atoms/TextInput/TextInput';
import { OutputWindow } from '@/components/layout/OutputWindow/OutputWindow';
import { Header } from '@/components/molecules/Header/Header';
import useHome from '@/utils/useHome';

const Home = () => {
  const { setInput, handleClick, chatbotResponse } = useHome();

  return (
    <OutputWindow>
      <Header />
      <div>Question</div>
      <div className="h-full">
        {chatbotResponse && <ChatbotResponse {...chatbotResponse} />}
      </div>
      <TextInput setInput={setInput} handleClick={handleClick} />
    </OutputWindow>
  );
};

export default Home;
