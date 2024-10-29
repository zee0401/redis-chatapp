import ChatContainer from "@/components/chat/chatContainer";
import React from "react";

const chat = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return (
    <div>
      <ChatContainer groupId={params.id} />
    </div>
  );
};

export default chat;
