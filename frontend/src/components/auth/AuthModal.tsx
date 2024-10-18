"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AuthModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Getting Start</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Welcome to Blaze Chat
          </AlertDialogTitle>
          <AlertDialogDescription>
            Blaze Chat is a secure and private chat application that allows you
            to create and join chat rooms with ease.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            Cancel
            <Image
              src="/images/google.png"
              alt="google"
              width={25}
              height={25}
              className="mr-4 "
            />
          </AlertDialogAction>
          continue with Google
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  x;
};

export default AuthModal;
