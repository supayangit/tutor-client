"use client";

import React, { useEffect, useState } from "react";

import {
    MapPin,
    Clock,
    DollarSign
} from "lucide-react";

const TutorsSection = () => {

    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchTutors = async () => {

            try {

                const res = await fetch("http://localhost:5000/available-tutors");
                const data = await res.json();

                setTutors(data);

            } catch (err) {

                console.error("Failed to fetch tutors:", err);

            } finally {

                setLoading(false);

            }

        };

        fetchTutors();

    }, []);

    if (loading) {

        return (
            <section className="py-16 text-center text-violet-600 font-medium">
                Loading tutors...
            </section>
        );

    }

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

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover expert tutors ready to help you succeed in your academic journey.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {tutors.map((tutor) => (

                        <div
                            key={tutor._id}
                            className="group bg-white rounded-2xl border border-violet-100 p-6 shadow-lg hover:shadow-xl transition"
                        >

                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-5">

                                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-violet-100">

                                    <img
                                        src={tutor.photo}
                                        alt={tutor.tutorName}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-gray-900 text-lg">
                                        {tutor.tutorName}
                                    </h3>

                                    <div className="mt-1 inline-flex px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-medium">
                                        {tutor.subject}
                                    </div>

                                </div>

                            </div>

                            {/* Fee */}
                            <div className="flex items-center gap-3 text-sm mb-2">

                                <DollarSign className="w-4 h-4 text-violet-600" />

                                <span className="font-medium">
                                    {tutor.hourlyFee}
                                </span>

                            </div>

                            {/* Time */}
                            <div className="flex items-center gap-3 text-sm mb-2">

                                <Clock className="w-4 h-4 text-violet-600" />

                                <span>{tutor.availableTime}</span>

                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 text-sm mb-4">

                                <MapPin className="w-4 h-4 text-violet-600" />

                                <span>{tutor.location}</span>

                            </div>

                            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3 font-medium transition">

                                Book Session

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TutorsSection;