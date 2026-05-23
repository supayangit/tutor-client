"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddTutorPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // ALL KEYS SAME AS DATABASE
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

        // extra useful fields
        created_by: session?.user?.id,
        tutorEmail: session?.user?.email,
        tutorCreatorName: session?.user?.name,
        createdAt: new Date().toISOString(),

        // format values properly
        hourlyFee: `$${formData.hourlyFee}/hr`,
        totalSlot: Number(formData.totalSlot),
      };

      console.log("Submitted Tutor Data:", payload);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to create tutor");
      }

      toast.success("Tutor created successfully!");

      // wait 2 seconds before redirect
      setTimeout(() => {
        router.push("/tutors");
      }, 2500);

    } catch (error) {
      console.error("Error creating tutor:", error);

      toast.error(error.message);

    } finally {
      setLoading(false);
    }
  };

  // if (!isPending && !session?.user) {
  //   router.push("/signin");
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 px-4 py-10">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-violet-100 p-6 md:p-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add New Tutor
          </h1>

          <p className="text-sm text-violet-600 mt-2">
            Create a tutor profile for students to book sessions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

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
                Hourly Fee ($)
              </label>

              <input
                type="number"
                name="hourlyFee"
                value={formData.hourlyFee}
                onChange={handleChange}
                required
                placeholder="45"
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
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition shadow-lg shadow-violet-200"
          >
            {loading ? "Creating Tutor..." : "Create Tutor"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddTutorPage;