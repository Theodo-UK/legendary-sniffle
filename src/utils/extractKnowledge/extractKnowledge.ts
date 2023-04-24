import { ReturnKnowledge } from '@/types/ReturnKnowledgeType';
import { SupabaseResponse } from '@/types/SupabaseResponse';

const extractKnowledge = (context: SupabaseResponse[]): ReturnKnowledge[] => {
  return context.map((knowledge) => {
    const inputText = knowledge.input_text;
    const associatedUrl = knowledge.input_url;

    return { inputText, associatedUrl };
  });
};

export default extractKnowledge;
