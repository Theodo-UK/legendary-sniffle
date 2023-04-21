import { OutputWindow } from '@/components/layout/OutputWindow/OutputWindow';
import { TextInput } from '../components/atoms/TextInput/TextInput';

export default async function HomePage() {
  return (
    <OutputWindow>
      <div className="text-center h-24 bg-white">Logo</div>
      <div>Question</div>
      <div className="h-full">Response</div>
      <TextInput />
    </OutputWindow>
  );
}
