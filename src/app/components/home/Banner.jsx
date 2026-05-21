"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        headline: "Book Expert Tutors Effortlessly",
        subtext:
            "Connect with skilled tutors, schedule personalized sessions, and learn smarter with MediQueue.",
        cta1: "Browse Tutors",
        cta2: "Become a Tutor",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    },
    {
        headline: "Flexible Learning for Every Student",
        subtext:
            "Choose online or offline sessions that fit your schedule perfectly.",
        cta1: "Explore Sessions",
        cta2: "Learn More",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    },
    {
        headline: "Smarter Scheduling, Better Learning",
        subtext:
            "Prevent conflicts and manage sessions with ease.",
        cta1: "Get Started",
        cta2: "How It Works",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    },
];

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);

        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24">

            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-violet-300/30 to-purple-300/30 rounded-full blur-3xl" />

                <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-violet-300/30 rounded-full blur-3xl" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 relative z-10 w-full">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">

                        <div className="space-y-5">

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100/80 backdrop-blur rounded-full text-violet-700 text-sm font-medium">
                                <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                                Trusted by 500+ Students
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {slides[currentSlide].headline}
                            </h1>

                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                {slides[currentSlide].subtext}
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-xl shadow-violet-500/25 rounded-xl px-8 py-4 text-base font-medium transition">
                                {slides[currentSlide].cta1}
                            </button>

                            <button className="border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-xl px-8 py-4 text-base font-medium transition">
                                {slides[currentSlide].cta2}
                            </button>

                        </div>

                        {/* Slider Controls */}
                        <div className="flex items-center gap-4">

                            <button
                                onClick={prevSlide}
                                className="p-2 hover:bg-violet-100 rounded-xl transition"
                            >
                                <ChevronLeft className="w-5 h-5 text-violet-600" />
                            </button>

                            <div className="flex gap-2">

                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? "w-8 bg-gradient-to-r from-violet-500 to-purple-600"
                                                : "w-2 bg-violet-200 hover:bg-violet-300"
                                            }`}
                                    />
                                ))}

                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-2 hover:bg-violet-100 rounded-xl transition"
                            >
                                <ChevronRight className="w-5 h-5 text-violet-600" />
                            </button>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="relative">

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 bg-gradient-to-br from-violet-100 to-purple-100 p-2">

                            <div className="rounded-2xl overflow-hidden">

                                <img
                                    src={slides[currentSlide].image}
                                    alt="Students learning"
                                    className="w-full h-[400px] lg:h-[500px] object-cover transition duration-500"
                                />

                            </div>

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl">

                                <div className="flex items-center gap-3">

                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-white font-bold">
                                            4.9
                                        </span>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Excellent Rating
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Based on 1000+ reviews
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Decorative Shapes */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl opacity-20 blur-xl" />

                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl opacity-20 blur-xl" />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Banner;