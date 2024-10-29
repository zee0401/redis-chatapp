import { fetchChatGroup } from "@/app/fetch/fetchChatGroup";
import ChatContainer from "@/components/chat/chatContainer";
import { notFound } from "next/navigation";
import React from "react";

const chat = async ({ params }: { params: { id: string } }) => {
  if (params.id.length !== 36) {
    return notFound();
  }
  const chatGroup: ChatGroupType | null = await fetchChatGroup(params.id);
  if (chatGroup === null) {
    return notFound();
  }

  // const chatGroupUsers: Array<GroupChatUserType> | [] =
  //   await fetchChatGroupUsers(params?.id);
  // const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div>
      <ChatContainer groupId={params.id} />
    </div>
  );
};

export default chat;
