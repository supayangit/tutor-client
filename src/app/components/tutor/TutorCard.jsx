"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    BookOpen,
    Clock3,
    MapPin,
    Wallet,
    MonitorSmartphone,
    CalendarDays,
} from "lucide-react";

const TutorCard = ({ tutor }) => {

    return (

        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-100 p-6 hover:bg-white hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200 transition-all duration-300">

            {/* Top */}
            <div className="flex items-center gap-4 mb-6">

                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-violet-100">

                    <Image
                        src={tutor.photo}
                        alt={tutor.tutorName}
                        fill
                        className="object-cover"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-bold text-gray-900">
                        {tutor.tutorName}
                    </h2>

                    <p className="text-violet-600 font-medium">
                        {tutor.subject}
                    </p>

                </div>

            </div>

            {/* Info */}
            <div className="space-y-4 mb-6">

                <div className="flex items-center gap-3 text-gray-600">

                    <Wallet className="w-5 h-5 text-violet-500" />

                    <span>{tutor.hourlyFee}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-600">

                    <Clock3 className="w-5 h-5 text-violet-500" />

                    <span>{tutor.availableTime}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-600">

                    <CalendarDays className="w-5 h-5 text-violet-500" />

                    <span>{tutor.availableDays}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-600">

                    <MapPin className="w-5 h-5 text-violet-500" />

                    <span>{tutor.location}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-600">

                    <MonitorSmartphone className="w-5 h-5 text-violet-500" />

                    <span>{tutor.teachingMode}</span>

                </div>

                <div className="flex items-start gap-3 text-gray-600">

                    <BookOpen className="w-5 h-5 text-violet-500 mt-1" />

                    <span className="line-clamp-2">
                        {tutor.experience}
                    </span>

                </div>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-violet-100">

                <div>

                    <p className="text-sm text-gray-500">
                        Slots Available
                    </p>

                    <p className="font-bold text-violet-700">
                        {tutor.totalSlot}
                    </p>

                </div>

                <Link
                    href={`/tutors/${tutor._id}`}
                    className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
                >
                    Book Session
                </Link>

            </div>

        </div>
    );
};

export default TutorCard;