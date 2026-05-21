"use client";

import React from "react";

import {
    CalendarCheck,
    ShieldCheck,
    Monitor,
    LayoutGrid
} from "lucide-react";

const features = [
    {
        icon: CalendarCheck,
        title: "Easy Scheduling",
        description:
            "Book sessions in just a few clicks with our intuitive calendar system.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Tutors",
        description:
            "All our tutors go through a rigorous verification and quality check process.",
    },
    {
        icon: Monitor,
        title: "Flexible Learning",
        description:
            "Choose between online video sessions or in-person tutoring based on your preference.",
    },
    {
        icon: LayoutGrid,
        title: "Smart Session Management",
        description:
            "Track, reschedule, and manage all your learning sessions from one dashboard.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="relative py-16 lg:py-24">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose MediQueue?
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Experience the future of personalized learning with our
                        innovative tutor booking platform.
                    </p>

                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-100 p-6 lg:p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200 transition-all duration-300"
                            >

                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center group-hover:from-violet-200 group-hover:to-purple-200 transition-all duration-300">

                                    <Icon className="w-8 h-8 text-violet-600" />

                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FeaturesSection;