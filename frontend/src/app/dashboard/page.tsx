import DashNav from "@/components/DashNav";
import React from "react";
import { getServerSession } from "next-auth";
import {
  authOptions,
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";
import CreateChat from "@/components/groupChat/CreateChat";
import { chatGroupType } from "../../types";
import { fetchChatGroups } from "../fetch/fetchChatGroup";

const dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  const groups: Array<chatGroupType> | [] = await fetchChatGroups(
    session?.user?.token
  );
  return (
    <div>
      <DashNav
        name={session?.user?.name ?? "user"}
        image={session?.user?.image ?? undefined}
      />
      <div className="container">
        <div className="mt-6 text-end">
          <CreateChat user={session?.user!} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default dashboard;
