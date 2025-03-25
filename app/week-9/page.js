"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login() {
    setLoading(true);
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  }

 

  return (
    <div>
      {!user && (
        <>
          <h1 className="text-center mt-10 text-3xl">
            Hi, Login is required for access
          </h1>
          <button
            onClick={login}
            disabled={loading}
            className="border-2 border-black rounded-lg px-6 py-3 text-blue font-semibold hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 m-auto block mt-5"
          >
            {loading ? "Logging in..." : "Login with GitHub"}
          </button>
        </>
      )}
      <div>
        {user && (
          <div>
            <h1>Welcome {user.displayName}</h1>
            <Link href="/week-9/shopping-list"> Go to Shopping List</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;