import { userAtom } from "atom/atoms";
import { useAtom } from "jotai";
import React from "react";
import supa from "supabase";
import UserAvatar from "../app/icons/UserAvatar";

const Header = () => {
  const [user, setUser] = useAtom(userAtom);

  async function signOut() {
    await supa.auth.signOut();
    setUser(null);
  }

  return (
    <div className="pb-[60px]">
      <div className="fixed w-full h-[80px] px-[5%] flex items-center justify-between z-20 backdrop-blur-xl border-b-2">
        <h1 className="font-bold text-xl">Expense Tracker</h1>
        <div className="max-w">
          <div className="flex">
            <button className="mx-2 text-gray-700 hover:text-black">
              Dashboard
            </button>

            <button className="mx-2 text-gray-700 hover:text-black">
              About
            </button>
            <button className="bg-black/90 hover:bg-black/80 text-white font-bold ml-3 pt-1 pb-2 px-6 rounded-full">
              Sign in
            </button>

            <button
              onClick={signOut}
              className="bg-black/90 hover:bg-black/80 text-white font-bold ml-3 pt-1 pb-2 px-6 rounded-full"
            >
              Sign out
            </button>
            <div className="flex ml-4  items-center justify-center w-[40px] h-[40px]">
              {user &&
                (user?.user_metadata.avatar_url ? (
                  <img
                    className="w-[35px] h-[35px] rounded-full"
                    src={user?.user_metadata.avatar_url}
                  />
                ) : (
                  <UserAvatar style="w-[50px] h-[50px] text-gray-600" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
