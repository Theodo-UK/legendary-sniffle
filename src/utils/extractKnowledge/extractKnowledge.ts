import { ReturnKnowledge } from '@/types/ReturnKnowledgeType';
import { SupabaseResponse } from '@/types/SupabaseResponse';

const extractKnowledge = (context: SupabaseResponse[]): ReturnKnowledge[] => {
  return context.reduce((acc: ReturnKnowledge[], knowledge) => {
    const inputText = knowledge.input_text;
    const associatedUrl = knowledge.input_url;

    acc.push({ inputText, associatedUrl });

    return acc;
  }, []);
};

export default extractKnowledge;
