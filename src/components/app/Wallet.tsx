import DownArrow from "./icons/DownArrow";
import UpArrow from "./icons/UpArrow";

const Wallet = () => {
  return (
    <div className="flex flex-col mx-auto mb-5 p-10 pt-5 min-w-[250px] max-w-[600px] h-[250px] from-pink-500 to-yellow-500 text-zinc-800 border-b-2">
      <div className="flex-grow">
        <h2 className="tracking-[10px] font-semibold text-center mb-10 text-gray-400 text-base">
          BALLANCE
        </h2>
        <div className="flex items-center justify-center pb-5">
          <div className="w-[50px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Wallet</title>
              <rect
                x="48"
                y="144"
                width="416"
                height="288"
                rx="48"
                ry="48"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
            </svg>
          </div>
          <h1 className="ml-5 text-5xl font-extrabold">$560.345</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <UpArrow />
          <div className="">
            <h3 className="font-semibold text-base text-zinc-400">INCOME</h3>
            <div className="font-extrabold text-zinc-500">$56043.043</div>
          </div>
        </div>
        <div className="text-green-600 flex">
          <DownArrow />
          <div className="">
            <h3 className="font-semibold text-base text-zinc-400">EXPENSE</h3>
            <div className="font-extrabold text-zinc-500">$56043.043</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
