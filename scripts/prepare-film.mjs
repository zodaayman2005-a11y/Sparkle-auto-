import { spawnSync } from "node:child_process";
import { stat } from "node:fs/promises";

// Requires a local FFmpeg build with libx264. No hosted encoder or runtime service.
const ffmpeg = process.env.FFMPEG_BIN || "ffmpeg";
for (const [height, width, maxrate, buffer] of [[720, 1280, "550k", "1100k"], [480, 854, "300k", "600k"]]) {
  const output = `public/media/sparkle-film-${height}-v1.mp4`;
  const result = spawnSync(ffmpeg, [
    "-hide_banner", "-loglevel", "error", "-i", "public/media/sparkle-auto-film.mp4",
    "-vf", `fps=24,scale=${width}:${height}:flags=lanczos`,
    "-c:v", "libx264", "-preset", "slow", "-crf", "28", "-maxrate", maxrate, "-bufsize", buffer,
    "-pix_fmt", "yuv420p", "-g", "48", "-c:a", "aac", "-b:a", "64k",
    "-movflags", "+faststart", "-y", output,
  ], { stdio: "inherit" });
  if (result.error || result.status !== 0) throw result.error || new Error(`Encoding ${height}p failed`);
  console.log(`${output}: ${(await stat(output)).size} bytes`);
}
