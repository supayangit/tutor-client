import React from 'react';
import MyBookingsClient from "./MyBookingsClient";

export const metadata = {
  title: "My Booked Sessions",
};

const MyBookingsPage = () => {
    return (
        <div>
            <MyBookingsClient/>
        </div>
    );
};

export default MyBookingsPage;