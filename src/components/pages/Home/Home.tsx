import { ChatbotResponse } from '@/components/atoms/ChatbotResponse/ChatbotResponse';
import { TextInput } from '@/components/atoms/TextInput/TextInput';
import useHome from '@/utils/useHome';

const Home = () => {
  const { setInput, handleClick, chatbotResponse } = useHome();

  return (
    <div>
      <TextInput setInput={setInput} handleClick={handleClick} />
      {chatbotResponse && <ChatbotResponse message={chatbotResponse} />}
    </div>
  );
};

export default Home;
