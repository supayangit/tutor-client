"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddTutorPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    tutorName: "",
    photo: "",
    subject: "Mathematics",
    availableDays: "",
    availableTime: "",
    hourlyFee: "",
    totalSlot: "",
    sessionDate: "",
    institution: "",
    experience: "",
    location: "",
    teachingMode: "Online",
  });

  // Redirect if not logged in (basic protection)
//   if (!isPending && !session?.user) {
//     router.push("/signin");
//     return null;
//   }

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const payload = {
      ...formData,
      tutorEmail: session?.user?.email,
    };

    // 1. Console submitted data
    console.log("Submitted Tutor Data:", payload);

    // 2. Send to backend server (Express)
    const res = await fetch("http://localhost:5000/tutors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log("Server Response:", data);

    if (!res.ok) {
      throw new Error(data?.message || "Failed to create tutor");
    }

    alert("Tutor created successfully!");

    router.push("/tutors");
  } catch (error) {
    console.error("Error creating tutor:", error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 px-4 py-10">
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-violet-100 p-6 md:p-10">

        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-violet-700 mb-2">
          Add New Tutor
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Create a tutor listing for students to book sessions
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Tutor Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Tutor Name
            </label>
            <input
              name="tutorName"
              value={formData.tutorName}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter tutor name"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="https://imgbb.com/image-link"
            />
          </div>

          {/* Subject + Mode */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Subject / Category
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              >
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>English</option>
                <option>Programming</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Teaching Mode
              </label>
              <select
                name="teachingMode"
                value={formData.teachingMode}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              >
                <option>Online</option>
                <option>Offline</option>
                <option>Both</option>
              </select>
            </div>
          </div>

          {/* Available Days + Time */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Available Days
              </label>
              <input
                name="availableDays"
                value={formData.availableDays}
                onChange={handleChange}
                placeholder="Sun - Thu"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Available Time Slot
              </label>
              <input
                name="availableTime"
                value={formData.availableTime}
                onChange={handleChange}
                placeholder="5:00 PM - 8:00 PM"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>
          </div>

          {/* Fee + Slot */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Hourly Fee
              </label>
              <input
                type="number"
                name="hourlyFee"
                value={formData.hourlyFee}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Total Slot
              </label>
              <input
                type="number"
                name="totalSlot"
                value={formData.totalSlot}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>
          </div>

          {/* Date + Institution */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Session Start Date
              </label>
              <input
                type="date"
                name="sessionDate"
                value={formData.sessionDate}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Institution & Experience
              </label>
              <input
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 3 years at XYZ University"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Location (Area/City)
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-violet-400"
              placeholder="Dhaka / Mirpur / Online"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-violet-200"
          >
            {loading ? "Creating Tutor..." : "Create Tutor"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddTutorPage;