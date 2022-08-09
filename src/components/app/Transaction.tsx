import React from "react";
import Bookmark from "./icons/Bookmark";
import UpArrow from "./icons/UpArrow";

const Transaction = () => {
  return (
    <div className="cursor-pointer my-5 p-5 flex items-center justify-between w-full h-[120px] bg-white border-l-8 shadow-sm rounded-r-lg transition-transform duration-300 hover:scale-105">
      <UpArrow style="bg-gray-300/40 w-[50px] h-[50px]" />
      <div className="flex justify-between ml- flex-grow">
        <div>
          <h1 className="font-bold text-base">Restaurant and Cafe</h1>
          <div className="text-gray-500 tracking-wide text-sm">
            26 Auguest 2019
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-extrabold mr-2">-243.43</div>
          <Bookmark style="cursor-pointer hover:bg-blue-100 hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
