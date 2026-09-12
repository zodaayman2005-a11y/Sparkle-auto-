"use client";
import { useState } from "react";
import { ScrollStory, VideoPlayer } from "./Stories";
import { strategies } from "@/content/site";
export function MotionLab({ count = 2 }: { count?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="site" lang="en" dir="ltr">
      <div className="shell type-sheet">
        <h1>Internal motion & media fixture</h1>
        <p>Synthetic test media only. Not product evidence.</p>
        <button className="button primary" onClick={() => setOpen(true)}>
          Play test video
        </button>
      </div>
      <ScrollStory locale="en" chapters={strategies.slice(0, count)} />
      <div id="showcase" className="shell type-sheet">
        End of test story
      </div>
      {open && (
        <VideoPlayer
          locale="en"
          asset={{ status: "ready", src: "/api/test-video" }}
          onClose={() => setOpen(false)}
        />
      )}
    </main>
  );
}
