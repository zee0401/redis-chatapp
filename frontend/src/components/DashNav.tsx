import React from "react";
import ProfileMenu from "./auth/ProfileMenu";

export default async function DashNav({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  return (
    <nav className="py-2 px-6 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">Blaze Chat</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
}
