"use client";
import React, { Suspense } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";
import dynamic from "next/dynamic";

const LogoutModal = dynamic(() => import("./LogoutModal"));

export default function ProfileMenu({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  const [logoutOpen, setLogoutOpen] = React.useState(false);
  const handleOpen = () => setLogoutOpen(!logoutOpen);
  return (
    <>
      {logoutOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <LogoutModal open={logoutOpen} setOpen={setLogoutOpen} />
        </Suspense>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={name} image={image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={handleOpen}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
