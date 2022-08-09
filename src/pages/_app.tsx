import "../supabase";
import supa from "../supabase";
import { useAtom } from "jotai";
import "../../styles/globals.css";
import { useEffect } from "react";
import supabase from "../supabase";
import { userAtom } from "atom/atoms";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    supa.auth.onAuthStateChange(async (user: any) => {
      if (user) {
        const user = supabase.auth.user();
        console.log("USER: ", user);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <Component {...pageProps} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default MyApp;
