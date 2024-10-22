import DashNav from "@/components/DashNav";
import React from "react";
import { getServerSession } from "next-auth";
import {
  authOptions,
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";

const dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  console.log(session);
  return (
    <DashNav
      name={session?.user?.name ?? "user"}
      image={session?.user?.image ?? undefined}
    />
  );
};

export default dashboard;
