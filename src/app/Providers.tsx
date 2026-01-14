"use client";

import { LiveblocksProvider } from "@liveblocks/react";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <LiveblocksProvider authEndpoint={async (room) => {
      console.log(room);
      
      const headers = {
        "Content-Type": "application/json",
      };
  
      const body = JSON.stringify({
        room,
      });
  
      const response = await fetch("/api/liveblocks-auth", {
        method: "POST",
        headers,
        body,
      });
  
      return await response.json();
    }} throttle={16}>
      {children}
    </LiveblocksProvider>
  );
}
