"use client";

import React from "react";

import {
    Users,
    GraduationCap,
    Calendar,
    BookOpen
} from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "500+",
        label: "Students",
    },
    {
        icon: GraduationCap,
        value: "120+",
        label: "Tutors",
    },
    {
        icon: Calendar,
        value: "1000+",
        label: "Sessions",
    },
    {
        icon: BookOpen,
        value: "20+",
        label: "Subjects",
    },
];

const StatsSection = () => {
    return (
        <section className="relative py-12 lg:py-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-violet-100 shadow-xl shadow-violet-500/5 p-6 lg:p-10">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                        {stats.map((stat, index) => {

                            const Icon = stat.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center group"
                                >

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">

                                        <Icon className="w-7 h-7 text-violet-600" />

                                    </div>

                                    {/* Value */}
                                    <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">

                                        {stat.value}

                                    </p>

                                    {/* Label */}
                                    <p className="text-gray-600 font-medium mt-1">
                                        {stat.label}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default StatsSection;