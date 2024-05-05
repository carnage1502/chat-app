import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full flex justify-between">
        <input
          type="text"
          className="border text-sm rounded-l-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Type a message"
        />
        <button
          type="submit"
          className="bg-black py-2 px-4 rounded-r-lg hover:bg-[#222831]"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
