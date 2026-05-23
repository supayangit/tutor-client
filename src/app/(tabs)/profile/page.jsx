import React from 'react';
import ProfileClient from "./ProfileClient";

export const metadata = {
  title: "My Profile",
};

const ProfilePage = () => {
  return (
    <div>
      <ProfileClient/>
    </div>
  );
};

export default ProfilePage;