'use client';
import { CallOpenaiType } from '@/utils/openai';
import Image from 'next/image';
import icon from '@public/response.png';

export const ChatbotResponse = (props: CallOpenaiType) => {
  return (
    <div className="rounded-md sm:text-sm w-full text-left hover:bg-light_grey p-3 flex gap-3 items-start">
      <>
        <div className="pt-1 flex-none">
          <Image alt="" src={icon} width={32} height={32} />
        </div>

        <p>
          {`${props.chatMessage}`}
          {props.associatedUrl.length > 0 && (
            <>
              <br />
              <br />
              You can find out more information about this{' '}
              <a href={props.associatedUrl} target="_blank">
                <span className="font-bold text-wizz_pink underline">here</span>
              </a>
              .
            </>
          )}
        </p>
      </>
    </div>
  );
};
