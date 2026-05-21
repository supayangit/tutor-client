"use client";

import { useState } from "react";

export const useBooking = ({ tutor, session }) => {
    const [formData, setFormData] = useState({
        studentName: "",
        phone: "",
        tutorId: "",
        tutorName: "",
        studentEmail: session?.user?.email || "",
        bookStatus: "Pending",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const normalizeDate = (d) => new Date(d).setHours(0, 0, 0, 0);

    const isBookingAllowed = () => {
        if (!tutor) return false;

        const today = normalizeDate(new Date());
        const sessionDate = normalizeDate(tutor.sessionDate);

        const hasSlots = Number(tutor.totalSlot) > 0;
        const dateAllowed = today >= sessionDate;

        return hasSlots && dateAllowed;
    };

    const submitBooking = async (e) => {
        e.preventDefault();

        if (!tutor) return;

        if (!isBookingAllowed()) {
            alert(
                Number(tutor.totalSlot) <= 0
                    ? "No available slots left."
                    : "Booking is not available yet for this tutor"
            );
            return;
        }

        const bookingData = { ...formData };

        const res = await fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData),
        });

        if (!res.ok) throw new Error("Booking failed");

        // decrease slot
        const updatedSlot = Number(tutor.totalSlot) - 1;

        await fetch(`http://localhost:5000/tutors/${tutor._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalSlot: updatedSlot }),
        });

        alert("Booking successful!");
    };

    return {
        formData,
        setFormData,
        handleChange,
        submitBooking,
        isBookingAllowed,
    };
};