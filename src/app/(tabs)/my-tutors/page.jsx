"use client";

import React, { useEffect, useState } from "react";
import TutorCard from "@/app/components/tutor/TutorCard";
import { authClient } from "@/lib/auth-client";

const MyTutorsPage = () => {
    const { data: session, isPending } = authClient.useSession();

    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyTutors = async () => {
            try {
                if (!session?.user?.id) return;

                const res = await fetch(
                    `http://localhost:5000/my-tutors?userId=${session.user.id}`
                );

                const data = await res.json();

                console.log("My Tutors:", data);

                setTutors(data);

            } catch (error) {
                console.error("Failed to fetch my tutors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyTutors();
    }, [session]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-14 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My Tutors
                    </h1>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Manage tutors you have created. Update or track your listings easily.
                    </p>

                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-14 h-14 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && tutors.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-violet-100">

                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            No Tutors Created Yet
                        </h2>

                        <p className="text-gray-500">
                            Start by adding your first tutor profile.
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

export default MyTutorsPage;