"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const MyTutorsPage = () => {

    const { data: session } = authClient.useSession();

    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [tutorToDelete, setTutorToDelete] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        tutorName: "",
        photo: "",
        subject: "",
        availableDays: "",
        availableTime: "",
        hourlyFee: "",
        totalSlot: "",
        sessionDate: "",
        institution: "",
        experience: "",
        location: "",
        teachingMode: "",
    });

    // Fetch Tutors
    useEffect(() => {

        const fetchMyTutors = async () => {

            try {

                if (!session?.user?.id) return;

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/my-tutors?userId=${session.user.id}`
                );

                const data = await res.json();

                setTutors(data);

            } catch (error) {

                console.error("Failed to fetch tutors:", error);

            } finally {

                setLoading(false);

            }

        };

        fetchMyTutors();

    }, [session]);

    // Open Update Modal
    const handleDeleteClick = (tutor) => {

        setTutorToDelete(tutor);

        setIsDeleteModalOpen(true);

    };

    const confirmDeleteTutor = async () => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutorToDelete._id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.deletedCount > 0 || data.success) {

                // remove instantly from UI
                const remainingTutors = tutors.filter(
                    (tutor) => tutor._id !== tutorToDelete._id
                );

                setTutors(remainingTutors);

                setIsDeleteModalOpen(false);

                setTutorToDelete(null);

                toast.success("Tutor deleted successfully!");

            }

        } catch (error) {

            console.error("Failed to delete tutor:", error);

            toast.error("Failed to delete tutor");

        }

    };

    const handleOpenModal = (tutor) => {

        setSelectedTutor(tutor);

        setFormData({
            tutorName: tutor.tutorName || "",
            photo: tutor.photo || "",
            subject: tutor.subject || "",
            availableDays: tutor.availableDays || "",
            availableTime: tutor.availableTime || "",
            hourlyFee: tutor.hourlyFee || "",
            totalSlot: tutor.totalSlot || "",
            sessionDate: tutor.sessionDate || "",
            institution: tutor.institution || "",
            experience: tutor.experience || "",
            location: tutor.location || "",
            teachingMode: tutor.teachingMode || "",
        });

        setIsModalOpen(true);

    };

    // Handle Input Change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    // Update Tutor
    const handleUpdateTutor = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/tutors/${selectedTutor._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0 || data.success) {

                // Update instantly without reload
                const updatedTutors = tutors.map((tutor) =>
                    tutor._id === selectedTutor._id
                        ? { ...tutor, ...formData }
                        : tutor
                );

                setTutors(updatedTutors);

                setIsModalOpen(false);

                toast.success("Tutor updated successfully!");

            }

        } catch (error) {

            console.error("Failed to update tutor:", error);

            toast.error("Failed to update tutor");

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-10 sm:py-14 px-3 sm:px-4">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        My Tutors
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Manage tutors you have created. Update your tutor information easily.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center items-center py-16 sm:py-20">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && tutors.length === 0 && (
                    <div className="text-center py-16 sm:py-20 bg-white rounded-2xl sm:rounded-3xl border border-violet-100 px-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                            No Tutors Created Yet
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base">
                            Start by adding your first tutor profile.
                        </p>
                    </div>
                )}

                {/* TABLE (Desktop / Tablet) */}
                {!loading && tutors.length > 0 && (
                    <div className="hidden sm:block overflow-x-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-violet-100">
                        <table className="min-w-full text-sm sm:text-base">

                            <thead className="bg-violet-100">
                                <tr>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Photo</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Tutor Name</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Subject</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Mode</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Fee</th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-gray-700">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tutors.map((tutor, index) => (
                                    <tr
                                        key={tutor._id}
                                        className={`border-t border-violet-50 ${index % 2 === 0 ? "bg-white" : "bg-violet-50/40"
                                            }`}
                                    >
                                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                                            <img
                                                src={tutor.photo}
                                                alt={tutor.tutorName}
                                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover"
                                            />
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-800">
                                            {tutor.tutorName}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600">
                                            {tutor.subject}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600">
                                            {tutor.teachingMode}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-violet-700">
                                            {tutor.hourlyFee}
                                        </td>

                                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <button
                                                    onClick={() => handleOpenModal(tutor)}
                                                    className="px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm"
                                                >
                                                    Update
                                                </button>

                                                <button
                                                    onClick={() => handleDeleteClick(tutor)}
                                                    className="px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                )}

                {/* MOBILE CARD VIEW */}
                {!loading && tutors.length > 0 && (
                    <div className="sm:hidden space-y-4">
                        {tutors.map((tutor) => (
                            <div
                                key={tutor._id}
                                className="bg-white border border-violet-100 rounded-2xl p-4 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={tutor.photo}
                                        className="w-14 h-14 rounded-xl object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {tutor.tutorName}
                                        </h3>
                                        <p className="text-sm text-gray-500">{tutor.subject}</p>
                                    </div>
                                </div>

                                <div className="mt-3 text-sm text-gray-600 space-y-1">
                                    <p>Mode: {tutor.teachingMode}</p>
                                    <p>Fee: <span className="font-bold text-violet-700">{tutor.hourlyFee}</span></p>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => handleOpenModal(tutor)}
                                        className="flex-1 py-2 bg-violet-600 text-white rounded-lg text-sm"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => handleDeleteClick(tutor)}
                                        className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (

                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

                    <div className="bg-white w-full max-w-md rounded-3xl p-8 relative">

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Delete Tutor
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Are you sure you want to delete{" "}
                            <span className="font-semibold text-gray-900">
                                {tutorToDelete?.tutorName}
                            </span>
                            ? This action cannot be undone.
                        </p>

                        <div className="flex items-center justify-end gap-4">

                            <button
                                onClick={() => {
                                    setIsDeleteModalOpen(false);
                                    setTutorToDelete(null);
                                }}
                                className="px-5 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDeleteTutor}
                                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
                            >
                                Confirm Delete
                            </button>

                        </div>

                    </div>

                </div>

            )}

            {isModalOpen && (

                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">

                    <div className="bg-white w-full max-w-4xl rounded-3xl p-8 relative max-h-[95vh] overflow-y-auto">

                        {/* Close */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Update Tutor
                        </h2>

                        <form onSubmit={handleUpdateTutor} className="space-y-6">

                            {/* Tutor Name */}
                            <div>

                                <label className="text-sm font-semibold text-gray-700">
                                    Tutor Name
                                </label>

                                <input
                                    type="text"
                                    name="tutorName"
                                    value={formData.tutorName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter tutor name"
                                    className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />

                            </div>

                            {/* Photo */}
                            <div>

                                <label className="text-sm font-semibold text-gray-700">
                                    Photo URL
                                </label>

                                <input
                                    type="url"
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    required
                                    placeholder="https://i.ibb.co/..."
                                    className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />

                            </div>

                            {/* Subject + Teaching Mode */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Subject
                                    </label>

                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    >
                                        <option>Mathematics</option>
                                        <option>Physics</option>
                                        <option>Chemistry</option>
                                        <option>Biology</option>
                                        <option>English</option>
                                        <option>Programming</option>
                                        <option>IELTS</option>
                                    </select>

                                </div>

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Teaching Mode
                                    </label>

                                    <select
                                        name="teachingMode"
                                        value={formData.teachingMode}
                                        onChange={handleChange}
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    >
                                        <option>Online</option>
                                        <option>Offline</option>
                                        <option>Both</option>
                                    </select>

                                </div>

                            </div>

                            {/* Available Days + Time */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Available Days
                                    </label>

                                    <input
                                        type="text"
                                        name="availableDays"
                                        value={formData.availableDays}
                                        onChange={handleChange}
                                        required
                                        placeholder="Sun - Thu"
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Available Time
                                    </label>

                                    <input
                                        type="text"
                                        name="availableTime"
                                        value={formData.availableTime}
                                        onChange={handleChange}
                                        required
                                        placeholder="5:00 PM - 8:00 PM"
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                            </div>

                            {/* Fee + Slot */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Hourly Fee
                                    </label>

                                    <input
                                        type="text"
                                        name="hourlyFee"
                                        value={formData.hourlyFee}
                                        onChange={handleChange}
                                        required
                                        placeholder="$45/hr"
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Total Slot
                                    </label>

                                    <input
                                        type="number"
                                        name="totalSlot"
                                        value={formData.totalSlot}
                                        onChange={handleChange}
                                        required
                                        placeholder="10"
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                            </div>

                            {/* Session Date + Institution */}
                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Session Date
                                    </label>

                                    <input
                                        type="date"
                                        name="sessionDate"
                                        value={formData.sessionDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                                <div>

                                    <label className="text-sm font-semibold text-gray-700">
                                        Institution
                                    </label>

                                    <input
                                        type="text"
                                        name="institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                        placeholder="Harvard University"
                                        className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />

                                </div>

                            </div>

                            {/* Experience */}
                            <div>

                                <label className="text-sm font-semibold text-gray-700">
                                    Experience
                                </label>

                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    placeholder="5 years teaching mathematics"
                                    className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />

                            </div>

                            {/* Location */}
                            <div>

                                <label className="text-sm font-semibold text-gray-700">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    placeholder="Dhaka, Bangladesh"
                                    className="w-full mt-2 px-4 py-3 border border-violet-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition shadow-lg shadow-violet-200"
                            >
                                Save Changes
                            </button>

                        </form>

                    </div>

                </div>

            )}

        </div>

    );

};

export default MyTutorsPage;