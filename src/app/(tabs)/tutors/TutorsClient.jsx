"use client";

import React, { useEffect, useState } from "react";
import TutorCard from "@/app/components/tutor/TutorCard";

const TutorsPage = () => {

    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    // date filter states
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {

        const fetchTutors = async () => {

            try {

                setLoading(true);

                let url = `${process.env.NEXT_PUBLIC_API_URL}/tutors?search=${search}`;

                // add date filters if selected
                // only start date
                if (startDate) {

                    url += `&startDate=${startDate}`;
                }

                // only end date
                if (endDate) {

                    url += `&endDate=${endDate}`;
                }

                const res = await fetch(url);

                const data = await res.json();

                console.log("Tutors:", data);

                setTutors(data);

            } catch (error) {

                console.error("Failed to fetch tutors:", error);

            } finally {

                setLoading(false);

            }
        };

        // debounce
        const timeout = setTimeout(() => {

            fetchTutors();

        }, 400);

        return () => clearTimeout(timeout);

    }, [search, startDate, endDate]);

    return (

        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-14 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Explore Expert Tutors
                    </h1>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Book professional tutors from various subjects and improve your learning experience with personalized sessions.
                    </p>

                </div>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-10">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search tutors by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 rounded-2xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white shadow-sm"
                    />

                    {/* Start Date */}
                    <div className="flex flex-col min-w-[180px]">

                        <label className="text-sm font-medium text-gray-600 mb-2">
                            Filter by Reg. Start Date
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="px-4 py-3 rounded-2xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white shadow-sm"
                        />

                    </div>

                    {/* End Date */}
                    <div className="flex flex-col min-w-[180px]">

                        <label className="text-sm font-medium text-gray-600 mb-2">
                            Filter by Reg. End Date
                        </label>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="px-4 py-3 rounded-2xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white shadow-sm"
                        />

                    </div>

                </div>

                {/* Loading */}
                {loading && (

                    <div className="flex justify-center items-center py-20">

                        <div className="w-14 h-14 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>

                    </div>
                )}

                {/* Empty */}
                {!loading && tutors.length === 0 && (

                    <div className="text-center py-20 bg-white rounded-3xl border border-violet-100">

                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            No Tutors Found
                        </h2>

                        <p className="text-gray-500">
                            Try changing search or filter options.
                        </p>

                    </div>
                )}

                {/* Tutors Grid */}
                {!loading && tutors.length > 0 && (

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                        {tutors.map((tutor) => (

                            <TutorCard
                                key={tutor._id}
                                tutor={tutor}
                            />

                        ))}

                    </div>
                )}

            </div>

        </div>
    );
};

export default TutorsPage;