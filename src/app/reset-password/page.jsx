"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {

  const [password, setPassword] =
    useState("");

  const handleReset = async (e) => {

    e.preventDefault();

    try {

      const { error } =
        await authClient.resetPassword({
          newPassword: password,
        });

      if (error) {

        toast.error(error.message);

        return;

      }

      toast.success(
        "Password updated successfully!"
      );

    } catch (err) {

      console.error(err);

      toast.error(
        "Something went wrong"
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleReset}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >

        <h1 className="text-2xl font-bold text-center dark:text-white">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-xl dark:bg-gray-800 dark:text-white"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-3 rounded-xl"
        >
          Update Password
        </button>

      </form>

    </div>

  );

};

export default ResetPasswordPage;