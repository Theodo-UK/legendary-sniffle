export const OutputWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center relative overflow-hidden">
      <div className="w-full h-full max-w-screen-lg flex flex-col px-8 sm:px-24 py-5 gap-5 justify-content">
        {children}
      </div>
    </div>
  );
};
