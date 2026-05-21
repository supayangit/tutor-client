"use client";

import React from "react";

import {
    MapPin,
    Clock,
    DollarSign
} from "lucide-react";

const tutors = [
    {
        name: "Dr. Sarah Chen",
        subject: "Mathematics",
        fee: "$45/hr",
        time: "Mon-Fri, 9AM-5PM",
        location: "Online",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
        initials: "SC",
    },
    {
        name: "Prof. James Wilson",
        subject: "Physics",
        fee: "$50/hr",
        time: "Tue-Sat, 10AM-6PM",
        location: "New York, NY",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        initials: "JW",
    },
    {
        name: "Emily Rodriguez",
        subject: "Chemistry",
        fee: "$40/hr",
        time: "Mon-Wed, 2PM-8PM",
        location: "Online",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        initials: "ER",
    },
    {
        name: "Dr. Michael Park",
        subject: "Biology",
        fee: "$55/hr",
        time: "Daily, 8AM-4PM",
        location: "Boston, MA",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        initials: "MP",
    },
    {
        name: "Lisa Thompson",
        subject: "English",
        fee: "$35/hr",
        time: "Mon-Fri, 11AM-7PM",
        location: "Online",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
        initials: "LT",
    },
    {
        name: "Alex Kumar",
        subject: "Programming",
        fee: "$60/hr",
        time: "Weekends, 9AM-9PM",
        location: "San Francisco, CA",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        initials: "AK",
    },
];

const TutorsSection = () => {
    return (
        <section className="py-16 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">

                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                        Featured Tutors
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Available Tutors
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover expert tutors ready to help you succeed in your academic journey.
                    </p>

                </div>

                {/* Tutors Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {tutors.map((tutor, index) => (

                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-violet-100 p-6 shadow-lg shadow-violet-500/5 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                        >

                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-5">

                                {/* Avatar */}
                                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-violet-100 shadow-md flex-shrink-0">

                                    <img
                                        src={tutor.image}
                                        alt={tutor.name}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Info */}
                                <div>

                                    <h3 className="font-semibold text-gray-900 text-lg">
                                        {tutor.name}
                                    </h3>

                                    <div className="mt-1 inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-medium">
                                        {tutor.subject}
                                    </div>

                                </div>

                            </div>

                            {/* Details */}
                            <div className="space-y-3 mb-6">

                                {/* Fee */}
                                <div className="flex items-center gap-3 text-sm text-gray-600">

                                    <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">

                                        <DollarSign className="w-4 h-4 text-violet-600" />

                                    </div>

                                    <span className="font-medium text-gray-900">
                                        {tutor.fee}
                                    </span>

                                </div>

                                {/* Time */}
                                <div className="flex items-center gap-3 text-sm text-gray-600">

                                    <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">

                                        <Clock className="w-4 h-4 text-violet-600" />

                                    </div>

                                    <span>{tutor.time}</span>

                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-3 text-sm text-gray-600">

                                    <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">

                                        <MapPin className="w-4 h-4 text-violet-600" />

                                    </div>

                                    <span>{tutor.location}</span>

                                </div>

                            </div>

                            {/* CTA */}
                            <button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl py-3 font-medium shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 transition-all">

                                Book Session

                            </button>

                        </div>

                    ))}

                </div>

                {/* View All */}
                <div className="text-center mt-12">

                    <button className="border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-xl px-8 py-3 font-medium transition">

                        View All Tutors

                    </button>

                </div>

            </div>

        </section>
    );
};

export default TutorsSection;