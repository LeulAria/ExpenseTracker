import React from "react";

const GridIcon = ({ style }: { style?: string }) => {
  return (
    <div
      className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-red-700 mr-3 ${style}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>Grid</title>
        <rect
          x="48"
          y="48"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="288"
          y="48"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="48"
          y="288"
          width="176"
          height="176"
          rx="20"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          x="288"
          y="288"
          width="176"
          height="176"
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

export default GridIcon;
