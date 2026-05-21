"use client";

import React from "react";

import {
    Calculator,
    Atom,
    FlaskConical,
    Dna,
    BookText,
    Code,
    Languages
} from "lucide-react";

const subjects = [
    {
        icon: Calculator,
        name: "Mathematics",
        color: "from-violet-500 to-purple-600",
    },
    {
        icon: Atom,
        name: "Physics",
        color: "from-purple-500 to-pink-600",
    },
    {
        icon: FlaskConical,
        name: "Chemistry",
        color: "from-violet-600 to-indigo-600",
    },
    {
        icon: Dna,
        name: "Biology",
        color: "from-purple-600 to-violet-600",
    },
    {
        icon: BookText,
        name: "English",
        color: "from-indigo-500 to-violet-600",
    },
    {
        icon: Code,
        name: "Programming",
        color: "from-violet-500 to-purple-600",
    },
    {
        icon: Languages,
        name: "IELTS",
        color: "from-purple-500 to-indigo-600",
    },
];

const SubjectsSection = () => {
    return (
        <section className="py-16 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Popular Subjects
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explore our wide range of subjects taught by expert tutors.
                    </p>

                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6">

                    {subjects.map((subject, index) => {

                        const Icon = subject.icon;

                        return (
                            <div
                                key={index}
                                className="group cursor-pointer"
                            >

                                <div className="bg-white rounded-2xl border border-violet-100 p-5 lg:p-6 text-center hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1">

                                    {/* Icon */}
                                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>

                                        <Icon className="w-7 h-7 text-white" />

                                    </div>

                                    {/* Subject Name */}
                                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">

                                        {subject.name}

                                    </h3>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default SubjectsSection;