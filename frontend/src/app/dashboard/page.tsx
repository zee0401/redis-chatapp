import DashNav from "@/components/DashNav";
import React from "react";
import { getServerSession } from "next-auth";
import {
  authOptions,
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";
import CreateChat from "@/components/groupChat/CreateChat";

const dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  console.log(session);
  return (
    <div>
      <DashNav
        name={session?.user?.name ?? "user"}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
        <div className="mt-6 text-end">
          <CreateChat />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
