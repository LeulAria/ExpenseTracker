import React from "react";

const UpArrow = ({ style }: {style?: string}) => {
  return (
    <div className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-green-700 mr-3 ${style}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Arrow Up</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 244l144-144 144 144M256 120v292"
        />
      </svg>
    </div>
  );
};

export default UpArrow;
