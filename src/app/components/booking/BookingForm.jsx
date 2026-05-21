"use client";

export default function BookingForm({
    formData,
    handleChange,
    submitBooking,
    isBookingAllowed,
    tutor,
}) {
    return (
        <form onSubmit={submitBooking} className="space-y-4">

            <Input label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} />
            <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />

            <ReadOnly label="Tutor ID" value={formData.tutorId} />
            <ReadOnly label="Tutor Name" value={formData.tutorName} />
            <ReadOnly label="Student Email" value={formData.studentEmail} />
            <ReadOnly label="Status" value={formData.bookStatus} />

            <button
                type="submit"
                disabled={!isBookingAllowed()}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition
                    ${isBookingAllowed()
                        ? "bg-violet-600 hover:bg-violet-700 text-white"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
            >
                Confirm Booking
            </button>
        </form>
    );
}

const Input = ({ label, ...props }) => (
    <div>
        <label className="block mb-2 font-medium">{label}</label>
        <input
            {...props}
            className="w-full px-4 py-3 rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-500"
        />
    </div>
);

const ReadOnly = ({ label, value }) => (
    <div>
        <label className="block mb-2 font-medium">{label}</label>
        <input
            value={value || ""}
            readOnly
            className="w-full px-4 py-3 rounded-xl bg-gray-100"
        />
    </div>
);