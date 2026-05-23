"use client";

import { useState } from "react";

export default function Page() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("Test crash");
    }

    return (
        <button onClick={() => setCrash(true)}>
            Trigger Error
        </button>
    );
}