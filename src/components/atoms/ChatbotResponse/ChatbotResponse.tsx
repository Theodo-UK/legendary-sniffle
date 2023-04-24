'use client';

export const ChatbotResponse = (chatMessage: string, associatedUrl: string) => {
  return (
    <div>
      {`${chatMessage}`}
      {associatedUrl.length > 0 && (
        <>
          <br />
          <br />
          <p>
            You can find out more information about this{' '}
            <a href={associatedUrl} target="_blank">
              <span className="font-bold text-wizz_pink underline">here</span>
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
};
