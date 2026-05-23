"use client";

import React from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import {
  Mail,
  User,
  CalendarDays,
  Phone,
  ShieldCheck,
} from "lucide-react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="w-14 h-14 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-violet-100 shadow-xl p-8 relative overflow-hidden">

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-200 blur-3xl opacity-30 rounded-full" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">

            {/* Avatar with gradient border */}
            <div className="p-[4px] rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-pink-400 shadow-lg">
              <div className="w-32 h-32 rounded-full bg-white p-[4px]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={user?.image || "/assets/user.png"}
                    alt="profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name and Email */}
            <div className="text-center md:text-left flex-1">

              <h1 className="text-3xl font-bold text-gray-900">
                {user?.name || "Unknown User"}
              </h1>

              <p className="text-violet-600 font-medium mt-1">
                {user?.email}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                Verified Account
              </div>

            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Name */}
          <div className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm flex items-center gap-4">
            <User className="text-violet-600" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-gray-900">
                {user?.name || "Not provided"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm flex items-center gap-4">
            <Mail className="text-violet-600" />
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold text-gray-900">
                {user?.email || "Not provided"}
              </p>
            </div>
          </div>

          {/* Phone*/}
          <div className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm flex items-center gap-4">
            <Phone className="text-violet-600" />
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-semibold text-gray-400">
                Not added yet
              </p>
            </div>
          </div>

          {/* Joined Date */}
          <div className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm flex items-center gap-4">
            <CalendarDays className="text-violet-600" />
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-semibold text-gray-900">
                {user?.createdAt
                  ? new Date(user.createdAt).toDateString()
                  : "Unknown"}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Profile data is synced from authentication session.
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;