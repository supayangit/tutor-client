"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
    BookOpen,
    CircleX,
    BadgeCheck,
} from "lucide-react";

const MySessionsPage = () => {

    const { data: session } = authClient.useSession();

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    const [cancelLoading, setCancelLoading] = useState("");
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);

    // =========================
    // FETCH USER BOOKINGS
    // =========================
    useEffect(() => {

        const fetchBookings = async () => {

            try {

                if (!session?.user?.id) return;

                const res = await fetch(
                    `http://localhost:5000/bookings/student/${session.user.id}`
                );

                const data = await res.json();

                // only booked sessions
                const activeBookings = data.filter(
                    (booking) =>
                        booking.bookStatus?.toLowerCase() !== "cancelled"
                );

                setBookings(activeBookings);

            } catch (error) {

                console.error(error);

                toast.error("Failed to load sessions");

            } finally {

                setLoading(false);

            }

        };

        fetchBookings();

    }, [session?.user?.id]);

    // =========================
    // CANCEL SESSION
    // =========================
    const handleCancel = async () => {

        if (!selectedBookingId) return;

        try {

            setCancelLoading(selectedBookingId);

            const res = await fetch(
                `http://localhost:5000/bookings/${selectedBookingId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        bookStatus: "Cancelled",
                    }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to cancel session");
            }

            setBookings((prev) =>
                prev.filter((b) => b._id !== selectedBookingId)
            );

            toast.success("Session cancelled successfully");

        } catch (error) {

            toast.error(error.message);

        } finally {

            setCancelLoading("");
            setShowCancelModal(false);
            setSelectedBookingId(null);

        }
    };

    // =========================
    // LOADING
    // =========================
    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-50">

                <div className="w-14 h-14 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-14 px-4">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-10 text-center">

                    <div className="flex items-center justify-center gap-3 mb-4">

                        <BookOpen className="w-10 h-10 text-violet-600" />

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            My Sessions
                        </h1>

                    </div>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        View and manage all tutoring sessions you have booked.
                    </p>

                </div>

                {/* EMPTY STATE */}
                {bookings.length === 0 && (

                    <div className="bg-white rounded-3xl border border-violet-100 shadow-lg p-14 text-center">

                        <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-6">

                            <BookOpen className="w-12 h-12 text-violet-600" />

                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            No Sessions Found
                        </h2>

                        <p className="text-gray-600 text-lg">
                            You have not booked any tutoring sessions yet.
                        </p>

                    </div>

                )}

                {/* TABLE */}
                {bookings.length > 0 && (

                    <div className="overflow-x-auto bg-white rounded-3xl border border-violet-100 shadow-xl">

                        <table className="w-full">

                            <thead className="bg-violet-50 border-b border-violet-100">

                                <tr>

                                    <th className="text-left px-6 py-5 text-gray-700 font-semibold">
                                        Tutor Name
                                    </th>

                                    <th className="text-left px-6 py-5 text-gray-700 font-semibold">
                                        Student Name
                                    </th>

                                    <th className="text-left px-6 py-5 text-gray-700 font-semibold">
                                        Email
                                    </th>

                                    <th className="text-left px-6 py-5 text-gray-700 font-semibold">
                                        Status
                                    </th>

                                    <th className="text-center px-6 py-5 text-gray-700 font-semibold">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {bookings.map((booking) => (

                                    <tr
                                        key={booking._id}
                                        className="border-b border-violet-50 hover:bg-violet-50/50 transition"
                                    >

                                        {/* Tutor */}
                                        <td className="px-6 py-5 font-semibold text-gray-900">
                                            {booking.tutorName}
                                        </td>

                                        {/* Student */}
                                        <td className="px-6 py-5 text-gray-700">
                                            {booking.studentName}
                                        </td>

                                        {/* Email */}
                                        <td className="px-6 py-5 text-gray-700">
                                            {booking.studentEmail}
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-5">

                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700 font-medium text-sm">

                                                <BadgeCheck className="w-4 h-4" />

                                                {booking.bookStatus}

                                            </span>

                                        </td>

                                        {/* ACTION */}
                                        <td className="px-6 py-5 text-center">

                                            <button
                                                onClick={() => {
                                                    setSelectedBookingId(booking._id);
                                                    setShowCancelModal(true);
                                                }}
                                                disabled={
                                                    cancelLoading === booking._id
                                                }
                                                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition font-semibold"
                                            >

                                                <CircleX className="w-4 h-4" />

                                                {cancelLoading === booking._id
                                                    ? "Cancelling..."
                                                    : "Cancel"}

                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

                {/* CANCEL CONFIRM MODAL */}
                {showCancelModal && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                        <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

                            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                Cancel Session
                            </h2>

                            <p className="text-gray-600 mb-6">
                                Are you sure you want to cancel this session? This action cannot be undone.
                            </p>

                            <div className="flex justify-end gap-3">

                                <button
                                    onClick={() => {
                                        setShowCancelModal(false);
                                        setSelectedBookingId(null);
                                    }}
                                    className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700"
                                >
                                    No, Keep
                                </button>

                                <button
                                    onClick={handleCancel}
                                    disabled={cancelLoading === selectedBookingId}
                                    className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold"
                                >
                                    {cancelLoading === selectedBookingId
                                        ? "Cancelling..."
                                        : "Yes, Cancel"}
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};

export default MySessionsPage;