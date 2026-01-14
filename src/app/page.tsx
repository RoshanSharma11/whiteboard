"use client";

import { useEffect, useState } from "react";
import {
  meet,
  MeetSidePanelClient,
} from "@googleworkspace/meet-addons/meet.addons";
import { BASE_URL, CLOUD_PROJECT_NUMBER } from "@/constants/constants";

export default function Page() {
  const [sidePanelClient, setSidePanelClient] = useState<MeetSidePanelClient>();

  // Launches the main stage when the main button is clicked.
  async function startActivity(e: unknown) {
    try {
      if (!sidePanelClient) {
        throw new Error("Side Panel is not yet initialized!");
      }
      const meetInfo = await sidePanelClient.getMeetingInfo();

      await sidePanelClient.startActivity({
        mainStageUrl: `${BASE_URL}/${meetInfo.meetingCode}`,
        additionalData: JSON.stringify({ roomId: meetInfo.meetingCode }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Prepares the add-on Side Panel Client.
   */
  useEffect(() => {
    (async () => {
      try {
        const session = await meet.addon.createAddonSession({
          cloudProjectNumber: CLOUD_PROJECT_NUMBER,
        });
        setSidePanelClient(await session.createSidePanelClient());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div>This is the add-on Side Panel. Only you can see this.</div>
      <button onClick={startActivity}>Launch Activity in Main Stage.</button>
    </>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// const Home = () => {
//     const router = useRouter()
//     const meetId = 'd86fqe8'

//   useEffect(() => {
//     router.replace(`/${meetId}`)
//   }, []);
//   return <div>Home</div>;
// };

// export default Home;
