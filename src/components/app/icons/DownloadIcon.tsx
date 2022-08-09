import React from "react";

const DownloadIcon = ({ style }: { style?: string }) => {
  return (
    <div
      className={`flex p-3 rounded-full w-[50px] h-[50px] bg-white text-green-700 mr-3 ${style}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Cloud Download</title>
        <path
          d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03"
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

export default DownloadIcon;
