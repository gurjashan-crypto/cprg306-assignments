"use client";

import React from "react";
import NewItem from "./new-item";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const Page = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function logout() {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  }

  return (
    <>
      {user ? (
        <main className="flex flex-col items-center space-y-4 my-4">
          <h1 className="text-5xl">Shopping List</h1>
          <NewItem />
          <button
            onClick={logout}
            className="absolute right-0 mr-9 border-2 border-black rounded-lg px-6 py-3 text-black font-medium hover:text-black transition-all duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center space-y-6 my-6 px-6 py-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl"
>
          <h1 className="text-4xl">Login is required for access</h1>
        </main>
      )}
    </>
  );
};

export default Page;