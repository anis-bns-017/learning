import React, { useState } from "react";

function ProfileForm() {
  const [profile, setProfile] = useState({ name: "", age: "" });

  const updateProfile = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200">
        <p className="text-3xl font-bold">Learning useState</p>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateProfile("name", e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-1/3 mb-4"
      />
      <input
        type="number"
        placeholder="Age"
        value={profile.age}
        onChange={(e) => updateProfile("age", e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-1/3 mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-700">
        Profile: {profile.name}, {profile.age}
      </h2>
    </div>
  );
}

export default ProfileForm;
