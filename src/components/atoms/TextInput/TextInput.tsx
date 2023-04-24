export const TextInput = ({
  id = '',
  type = 'text',
  placeholder = 'Enter your question',
  setInput,
  handleClick,
}) => {
  return (
    <div className="flex flex-row space-x-sm">
      <input
        id={id}
        className="block flex-1 rounded-md border border-grey p-sm placeholder-grey sm:text-sm"
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        className="text-white bg-blue rounded-md p-sm sm:text-sm"
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
    </div>
  );
};
