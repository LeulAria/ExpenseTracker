import Badge from "@/components/app/Badge";
import ChartIcon from "@/components/app/icons/ChartIcon";
import DownloadIcon from "@/components/app/icons/DownloadIcon";
import GridIcon from "@/components/app/icons/GridIcon";
import UpArrow from "@/components/app/icons/UpArrow";
import Transaction from "@/components/app/Transaction";
import Wallet from "@/components/app/Wallet";
import Header from "@/components/layout/Header";

const dashboard = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <div className="flex">
        <div className="w-[700px]">
          <div className="sticky top-[80px] backdrop-blur-3xl px-10 py-10">
            <Wallet />
            <div className="flex justify-evenly mx-auto max-w-[600px]">
              <Badge text="Bills" />
              <Badge text="Bills" />
              <Badge text="Bills" />
              <Badge text="Bills" />
              <Badge text="Bills" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mt-5 px-5">
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <h1 className="text-4xl font-extrabold">$560.345</h1>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Total Income This Week
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <h1 className="text-4xl font-extrabold">$560.345</h1>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Total Expense This Week
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <h1 className="text-4xl font-extrabold">$560.345</h1>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Total Income This Month
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <h1 className="text-4xl font-extrabold">$560.345</h1>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Total Expense This Month
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <div className="flex">
                <UpArrow style="w-[50px] h-[50px]" />
                <h1 className="ml-2=1 text-5xl font-extrabold">33%</h1>
              </div>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Goal Achieved
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col p-10 pt-5 min-w-[250px] h-[200px] bg-gray-100 text-zinc-800 rounded-3xl shadow-sm">
              <div className="flex">
                <UpArrow style="w-[50px] h-[50px]" />
                <h1 className="ml-2=1 text-5xl font-extrabold">89%</h1>
              </div>
              <h3 className="mt-2 text-gray-600 text-lg font-semibold text-center">
                Progress From Previous
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-grow mr-auto mt-10">
          <div className="fixed top-[90px] right-2">
            <GridIcon style="m-5 cursor-pointer transition-color duration-200 w-[50px] h-[50px] p-[13px] hover:bg-black hover:text-white transition" />
            <DownloadIcon style="m-5 cursor-pointer transition-color duration-200 w-[50px] h-[50px] p-[13px] hover:bg-black hover:text-white transition" />
            <ChartIcon style="m-5 cursor-pointer transition-color duration-200 w-[50px] h-[50px] p-[13px] hover:bg-black hover:text-white transition" />
          </div>

          <div className="max-w-[600px] mx-auto">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <div className="font-bold text-gray-300 text-center mt-10">
              No More Records Found.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]"></div>
    </div>
  );
};

export default dashboard;
