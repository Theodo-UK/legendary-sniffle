'use client';
import { CallOpenaiType } from '@/utils/openai';

export const ChatbotResponse = (props: CallOpenaiType) => {
  return (
    <div>
      {`${props.chatMessage}`}
      {props.associatedUrl.length > 0 && (
        <>
          <br />
          <br />
          <p>
            You can find out more information about this{' '}
            <a href={props.associatedUrl} target="_blank">
              <span className="font-bold text-wizz_pink underline">here</span>
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
};
