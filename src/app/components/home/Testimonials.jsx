"use client";

import React from "react";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Jessica Martinez",
        role: "Medical Student",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
        initials: "JM",
        rating: 5,
        review:
            "MediQueue transformed my study routine! The tutors are incredibly knowledgeable and the scheduling system is so convenient.",
    },
    {
        name: "David Lee",
        role: "High School Senior",
        image:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
        initials: "DL",
        rating: 5,
        review:
            "I improved my math grades significantly thanks to the amazing tutors I found here. Highly recommend to any student!",
    },
    {
        name: "Sophia Williams",
        role: "College Freshman",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        initials: "SW",
        rating: 5,
        review:
            "The flexibility of online sessions helped me balance my busy schedule. My programming skills have improved tremendously!",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="relative py-16 lg:py-24">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        What Our Students Say
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Hear from students who have transformed their learning
                        experience with MediQueue.
                    </p>

                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                    {testimonials.map((testimonial, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-violet-100 p-6 lg:p-8 shadow-lg shadow-violet-500/5 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-200 transition-all duration-300"
                        >

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">

                                {Array.from({
                                    length: testimonial.rating
                                }).map((_, i) => (

                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />

                                ))}

                            </div>

                            {/* Review */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                &ldquo;{testimonial.review}&rdquo;
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4">

                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-violet-100 flex-shrink-0">

                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* User Info */}
                                <div>

                                    <p className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TestimonialsSection;