"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

import { toast } from "sonner";
import { Input } from "../ui/input";

export default function CreateChat() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Chat</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create your new Chat</DialogTitle>
        </DialogHeader>
        <form>
          <div className="mt-4">
            <Input placeholder="Enter chat title" />
            <span className="text-red-400"></span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter passcode" />
            <span className="text-red-400"></span>
          </div>
          <div className="mt-4">
            <Button className="w-full"></Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
