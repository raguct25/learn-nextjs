"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, [session]);

  return (
    <div className="flex">
      <div className="flex flex-col w-1/6">
        <h1 className="m-5 text-center text-orange-400 text-2xl">Learnings</h1>
      </div>
      <div className="flex m-5 w-5/6 flex-row-reverse">
        {session?.user ? (
          <div className="flex flex-row">
            <button
              className="ml-2 w-52 bg-slate-600 px-4 py-2 hover:bg-slate-400 text-white text-sm"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Image
              src={`${session?.user.image}`}
              width={40}
              height={40}
              className="rounded-full ml-2"
              alt="profile"
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  className="w-52 bg-slate-600 px-4 py-2  hover:bg-slate-400 text-white text-sm"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
