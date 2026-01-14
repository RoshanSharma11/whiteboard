"use client";

import { Room } from "@/app/[roomid]/Room";
import { StorageTldraw } from "@/components/StorageTldraw";
import { meet, MeetMainStageClient } from '@googleworkspace/meet-addons/meet.addons';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // const { roomid } = useParams();
  const [roomId, setRoomId] = useState("")

  async function initializeMainStageClient(): Promise<MeetMainStageClient> {
    const session = await meet.addon.createAddonSession({
      cloudProjectNumber: '1050924442946',
    });
    return await session.createMainStageClient();
  }

  async function setStartingState(mainStageClient: MeetMainStageClient) {
    const startingState = await mainStageClient.getActivityStartingState();
    const additionalData = JSON.parse(startingState.additionalData ?? '{}');
    setRoomId(additionalData.roomId);
  }


  useEffect(() => {
    async function initializeMainStage() {
      const client = await initializeMainStageClient();
      setStartingState(client);
      // awaitNewColor(client);
    }
    initializeMainStage();
}, []);


  return (
    <Room roomId={(roomId as string) || "123"}>
      <StorageTldraw />
    </Room>
  );
}
