"use client";
import { useSession } from "@/lib/auth-client";
import TutorDetails from "@/app/components/tutor/TutorDetails";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BadgeCheck } from "lucide-react";

const TutorDetailsPage = () => {

    const params = useParams();

    const [tutor, setTutor] = useState(null);

    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState("");

    const [bookingDisabled, setBookingDisabled] = useState(false);

    const { data: session } = useSession();

    // logged in user
    const currentUser = {
        email: session?.user?.email || "",
        name: session?.user?.name || "",
        id: session?.user?.id || "",
    };

    const [formData, setFormData] = useState({
        tutorName: "",
        phone: "",
        tutorId: "",
        studentEmail: session?.user?.email || "",
        studentName: session?.user?.name || "",
        studentId: session?.user?.id || "",
        bookStatus: "Available",
    });

    useEffect(() => {

        const fetchTutor = async () => {

            try {

                const res = await fetch(
                    `http://localhost:5000/tutors/${params.id}`
                );

                const data = await res.json();

                setTutor(data);

                // Current Date
                const today = new Date();

                // Tutor Session Date
                const sessionDate = new Date(data.sessionDate);

                // Remove time from today's date
                today.setHours(0, 0, 0, 0);

                // Slot Check
                if (Number(data.totalSlot) <= 0) {

                    setBookingDisabled(true);

                    setMessage("No available slots left.");

                    setFormData((prev) => ({
                        ...prev,
                        bookStatus: "Full",
                    }));

                }

                // Session Date Check
                else if (today < sessionDate) {

                    setBookingDisabled(true);

                    setMessage(
                        "Booking is not available yet for this tutor"
                    );

                    setFormData((prev) => ({
                        ...prev,
                        bookStatus: "Unavailable",
                    }));

                }

                setFormData((prev) => ({
                    ...prev,
                    studentId: currentUser.id,               
                    tutorId: data._id,
                    tutorName: data.tutorName,
                    studentEmail: currentUser.email,
                    studentName: currentUser.name,
                }));

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        if (params?.id) {

            fetchTutor();

        }

    }, [params.id]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Final Slot Check
        if (Number(tutor.totalSlot) <= 0) {

            setBookingDisabled(true);

            setMessage(
                "This session is fully booked. You can’t join at the moment."
            );

            setFormData((prev) => ({
                ...prev,
                bookStatus: "Full",
            }));

            return;

        }

        // Session Date Check
        const today = new Date();

        const sessionDate = new Date(tutor.sessionDate);

        // Remove time from today's date
        today.setHours(0, 0, 0, 0);

        // Booking blocked before session date
        if (today < sessionDate) {

            setBookingDisabled(true);

            setMessage(
                "Booking is not available yet for this tutor"
            );

            setFormData((prev) => ({
                ...prev,
                bookStatus: "Unavailable",
            }));

            return;

        }

        const bookingData = {
            ...formData,
        };

        try {

            // Save booking
            const bookingRes = await fetch(
                "http://localhost:5000/bookings",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const bookingResult = await bookingRes.json();

            if (bookingResult.insertedId) {

                // Decrease Slot by 1
                const updatedSlot = Number(tutor.totalSlot) - 1;

                // Update tutor slot in database
                await fetch(
                    `http://localhost:5000/tutors/${tutor._id}`,
                    {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            totalSlot: updatedSlot,
                        }),
                    }
                );

                // Update UI instantly
                setTutor((prev) => ({
                    ...prev,
                    totalSlot: updatedSlot,
                }));

                // Update Booking Status
                setFormData((prev) => ({
                    ...prev,
                    bookStatus: "Booked",
                }));

                // If slot becomes 0
                if (updatedSlot <= 0) {

                    setBookingDisabled(true);

                    setMessage(
                        "This session is fully booked. You can’t join at the moment."
                    );

                    setFormData((prev) => ({
                        ...prev,
                        bookStatus: "Full",
                    }));

                } else {

                    setMessage("Booking successful!");

                }

            }

        } catch (error) {

            console.error(error);

            setMessage("Something went wrong!");

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <p className="text-lg font-medium text-violet-600">
                    Loading Tutor...
                </p>

            </div>

        );

    }

    if (!tutor) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <p className="text-lg font-medium text-red-500">
                    Tutor Not Found
                </p>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-100 py-14 px-4">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* LEFT SIDE */}
                <TutorDetails tutor={tutor} />

                {/* BOOK SESSION */}
                <div className="bg-white rounded-3xl border border-violet-100 shadow-lg p-8 h-fit sticky top-10">

                    <div className="flex items-center gap-3 mb-6">

                        <BadgeCheck className="w-7 h-7 text-violet-600" />

                        <h2 className="text-3xl font-bold text-gray-900">
                            Book Session
                        </h2>

                    </div>

                    {/* MESSAGE */}
                    {message && (
                        <div
                            className={`mb-5 px-4 py-3 rounded-xl text-sm font-medium ${bookingDisabled
                                ? "bg-red-100 text-red-600"
                                : "bg-green-100 text-green-700"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Student Name */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Student Name
                            </label>

                            <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                        </div>

                        {/* Phone */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />

                        </div>

                        {/* Tutor ID */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Tutor ID
                            </label>

                            <input
                                type="text"
                                value={formData.tutorId}
                                readOnly
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-violet-200"
                            />

                        </div>

                        {/* Tutor Name */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Tutor Name
                            </label>

                            <input
                                type="text"
                                value={formData.tutorName}
                                readOnly
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-violet-200"
                            />

                        </div>

                        {/* Student Email */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Student Email
                            </label>

                            <input
                                type="email"
                                value={formData.studentEmail}
                                readOnly
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-violet-200"
                            />

                        </div>

                        {/* Booking Status */}
                        <div>

                            <label className="block mb-2 font-medium text-gray-700">
                                Booking Status
                            </label>

                            <input
                                type="text"
                                value={formData.bookStatus}
                                readOnly
                                className="w-full px-4 py-3 rounded-xl bg-violet-50 border border-violet-200 text-violet-700 font-semibold"
                            />

                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={bookingDisabled}
                            className={`w-full py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 ${bookingDisabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-violet-600 hover:bg-violet-700"
                                }`}
                        >
                            {bookingDisabled
                                ? "Booking Unavailable"
                                : "Confirm Booking"}
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default TutorDetailsPage;