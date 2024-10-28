"use client";
import React, { useEffect, useMemo, useCallback } from "react";
import { connectSocket } from "@/lib/socket.config";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";

const ChatContainer = () => {
  // Initialize socket once
  const socket = useMemo(() => {
    const socket = connectSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("chat", (data) => {
      console.log("Client received message: ", data);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  // Emit a message on button click
  const handleClick = useCallback(() => {
    console.log("Button clicked, sending message...");
    socket.emit("message", { name: "Zeshan", id: uuidv4(), message: "hello" });
  }, [socket]);

  return (
    <div>
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
};

export default ChatContainer;
