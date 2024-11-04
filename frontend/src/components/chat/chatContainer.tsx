"use client";
import React, { useEffect, useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialogue";
import Chats from "./Chats";

const ChatContainer = ({
  users,
  group,
  oldMessages,
}: {
  users: Array<GroupChatUserType>;
  group: ChatGroupType;
  oldMessages: Array<MessageType>;
}) => {
  // Initialize socket once
  // const socket = useMemo(() => {
  //   const socket = connectSocket();

  //   socket.auth = {
  //     room: groupId,
  //   };

  //   return socket.connect();
  // }, []);

  // useEffect(() => {
  //   socket.on("chat", (data) => {
  //     console.log("Client received message: ", data);
  //   });

  //   return () => {
  //     socket.close();
  //   };
  // }, [socket]);

  // Emit a message on button click
  // const handleClick = useCallback(() => {
  //   console.log("Button clicked, sending message...");
  //   socket.emit("message", { name: "Zeshan", id: uuidv4(), message: "hello" });
  // }, [socket]);

  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();
  useEffect(() => {
    const data = localStorage.getItem(group.id);
    if (data) {
      const pData = JSON.parse(data);
      setChatUser(pData);
    }
  }, [group.id]);

  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} users={users} user={chatUser} />
        )}

        {/* Messages */}
        <Chats oldMessages={oldMessages} group={group} chatUser={chatUser} />
      </div>
    </div>
  );
};

export default ChatContainer;
