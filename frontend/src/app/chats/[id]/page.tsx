import {
  fetchChatGroup,
  fetchChatGroupUsers,
} from "@/app/fetch/fetchChatGroup";
import ChatContainer from "@/components/chat/chatContainer";
import { notFound } from "next/navigation";
import React from "react";

const chat = async ({ params }: { params: { id: string } }) => {
  if (params.id.length !== 36) {
    return notFound();
  }
  const group: ChatGroupType | null = await fetchChatGroup(params.id);
  if (group === null) {
    return notFound();
  }

  const users: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(
    params?.id
  );
  // const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div>
      <ChatContainer users={users} group={group} />
    </div>
  );
};

export default chat;
