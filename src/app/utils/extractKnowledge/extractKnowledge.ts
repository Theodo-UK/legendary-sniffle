import { SupabaseResponse } from '@/types/SupabaseResponse';

const extractKnowledge = (context: SupabaseResponse[]): string[] => {
  return context.reduce((acc: string[], knowledge) => {
    const inputText = knowledge.input_text;

    acc.push(inputText);

    return acc;
  }, []);
};

export default extractKnowledge;
