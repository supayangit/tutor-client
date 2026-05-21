"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
    BookOpen,
    Clock3,
    MapPin,
    Wallet,
    MonitorSmartphone,
    CalendarDays,
    GraduationCap,
    BadgeCheck,
} from "lucide-react";

const TutorDetailsPage = () => {

    const params = useParams();

    const [tutor, setTutor] = useState(null);

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        studentName: "",
        phone: "",
        tutorId: "",
        tutorName: "",
        studentEmail: "",
        bookStatus: "Pending",
    });

    useEffect(() => {

        const fetchTutor = async () => {

            try {

                const res = await fetch(
                    `http://localhost:5000/tutors/${params.id}`
                );

                const data = await res.json();

                setTutor(data);

                setFormData((prev) => ({
                    ...prev,
                    tutorId: data._id,
                    tutorName: data.tutorName,
                    studentEmail: "student@example.com", // Replace from auth context
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

        const bookingData = {
            ...formData,
        };

        console.log(bookingData);

        // POST booking data
        // await fetch("http://localhost:5000/bookings", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(bookingData),
        // });

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
                <div className="lg:col-span-2 bg-white rounded-3xl border border-violet-100 shadow-lg p-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">

                        <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-violet-100">

                            <Image
                                src={tutor.photo}
                                alt={tutor.tutorName}
                                fill
                                className="object-cover"
                            />

                        </div>

                        <div>

                            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                                {tutor.tutorName}
                            </h1>

                            <p className="text-xl text-violet-600 font-semibold mb-4">
                                {tutor.subject} Tutor
                            </p>

                            <div className="flex flex-wrap gap-3">

                                <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-xl text-sm font-medium">
                                    {tutor.teachingMode}
                                </span>

                                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-medium">
                                    {tutor.totalSlot} Slots Available
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <Wallet className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Hourly Fee
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.hourlyFee}
                                </h3>

                            </div>

                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <Clock3 className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Available Time
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.availableTime}
                                </h3>

                            </div>

                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <CalendarDays className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Available Days
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.availableDays}
                                </h3>

                            </div>

                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <MapPin className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Location
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.location}
                                </h3>

                            </div>

                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <GraduationCap className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Institution
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.institution || "Not Provided"}
                                </h3>

                            </div>

                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-violet-50">

                            <MonitorSmartphone className="w-6 h-6 text-violet-600 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    Teaching Mode
                                </p>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {tutor.teachingMode}
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* Experience */}
                    <div className="mt-8 p-6 rounded-2xl bg-violet-50">

                        <div className="flex items-center gap-3 mb-4">

                            <BookOpen className="w-6 h-6 text-violet-600" />

                            <h2 className="text-2xl font-bold text-gray-900">
                                Experience
                            </h2>

                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            {tutor.experience}
                        </p>

                    </div>

                </div>

                {/* BOOK SESSION */}
                <div className="bg-white rounded-3xl border border-violet-100 shadow-lg p-8 h-fit sticky top-10">

                    <div className="flex items-center gap-3 mb-6">

                        <BadgeCheck className="w-7 h-7 text-violet-600" />

                        <h2 className="text-3xl font-bold text-gray-900">
                            Book Session
                        </h2>

                    </div>

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
                            className="w-full py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg transition-all duration-300"
                        >
                            Confirm Booking
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default TutorDetailsPage;