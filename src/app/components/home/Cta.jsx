"use client";

import React from "react";

import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-16 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 p-8 lg:p-16">

                    {/* Background Decorations */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="relative text-center">

                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            Ready to Start Learning?
                        </h2>

                        <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Book your first tutor session today and level up your learning experience.
                        </p>

                        <button className="inline-flex items-center justify-center bg-white text-violet-700 hover:bg-white/90 shadow-xl shadow-black/10 rounded-xl px-8 py-4 text-base font-semibold transition group">

                            Explore Tutors

                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;