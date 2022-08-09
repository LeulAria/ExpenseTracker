import React from "react";

const Bookmark = ({ style }: { style?: string }) => {
  return (
    <div
      className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-red-700 mr-3 ${style}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Bookmark</title>
        <path
          d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
};

export default Bookmark;
