"use client";

import React from "react";
import Image from "next/image";
import {
    Clock3,
    MapPin,
    Wallet,
    CalendarDays,
    GraduationCap,
    BadgeCheck,
    BookOpen,
    Mail,
    User,
    School,
    Award,
    Layers,
} from "lucide-react";

const TutorDetails = ({ tutor }) => {
    return (
        <div className="lg:col-span-2 bg-white rounded-3xl border border-violet-100 shadow-lg p-8">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">

                <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-violet-100">

                    <Image
                        src={tutor.photo}
                        alt={tutor.tutorName}
                        fill
                        className="object-cover"
                    />

                </div>

                <div>

                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        {tutor.tutorName}
                    </h1>

                    <p className="text-xl text-violet-600 font-semibold mb-3">
                        {tutor.subject} Tutor
                    </p>

                    <div className="flex flex-wrap gap-3">

                        <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-xl text-sm font-medium">
                            {tutor.teachingMode}
                        </span>

                        <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-medium">
                            {tutor.totalSlot} Slots Available
                        </span>

                        <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-xl text-sm font-medium">
                            Session: {tutor.sessionDate}
                        </span>

                    </div>

                </div>

            </div>

            {/* INFO GRID */}
            <div className="grid sm:grid-cols-2 gap-6">

                {/* Fee */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <Wallet className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Hourly Fee</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.hourlyFee}
                        </h3>
                    </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <Clock3 className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Available Time</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.availableTime}
                        </h3>
                    </div>
                </div>

                {/* Days */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <CalendarDays className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Available Days</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.availableDays}
                        </h3>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <MapPin className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.location}
                        </h3>
                    </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <School className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Institution</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.institution}
                        </h3>
                    </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <Award className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Experience</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.experience}
                        </h3>
                    </div>
                </div>

                {/* Session Date */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <CalendarDays className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Session Date</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.sessionDate}
                        </h3>
                    </div>
                </div>

                {/* Creator */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">
                    <User className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                        <p className="text-sm text-gray-500">Created By</p>
                        <h3 className="font-bold text-lg text-gray-900">
                            {tutor.tutorCreatorName}
                        </h3>
                    </div>
                </div>

            </div>

            {/* EMAIL SECTION */}
            <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3">

                <Mail className="w-5 h-5 text-gray-600" />

                <span className="text-gray-700 font-medium">
                    {tutor.tutorEmail}
                </span>

            </div>

        </div>
    );
};

export default TutorDetails;