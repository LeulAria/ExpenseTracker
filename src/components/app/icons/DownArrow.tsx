import React from "react";

const DownArrow = ({ style }: {style?: string}) => {
  return (
    <div className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-red-700 mr-3 ${style}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Arrow Down</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 268l144 144 144-144M256 392V100"
        />
      </svg>
    </div>
  );
};

export default DownArrow;
