import React from "react";

const ChartIcon = ({ style }: { style?: string }) => {
  return (
    <div
      className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-red-700 mr-3 ${style}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Bar Chart</title>
        <path
          d="M32 32v432a16 16 0 0016 16h432"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="96"
          y="224"
          width="80"
          height="192"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="240"
          y="176"
          width="80"
          height="240"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="383.64"
          y="112"
          width="80"
          height="304"
          rx="20"
          ry="20"
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

export default ChartIcon;
