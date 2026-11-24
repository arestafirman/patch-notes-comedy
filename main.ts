// Real-Life Patch Notes: The Comedy Changelog
// Entry program: writes one single-line patch note to /output/entry.txt.
//
// Why this entry won the draft:
// - Bug: the pinky toe hitting the table leg at 3 a.m. — instantly
//   recognisable, everyone has winced at it, no setup needed.
// - Stakes first (a 3 a.m. collision), then the fix, then the reversal:
//   the shipped fix is not a tougher toe, it is moving the table 2 cm.
//   The furniture gets patched, the human does not.
// - Punchline is a named concrete artifact: a toe that beeps before
//   impact plus a table moved exactly 2 cm to the left — something you
//   can picture and measure.
// - One comedy idea only, dry engineering register, terse release-note
//   voice: version, "fixed ...", semicolon, the shipped behaviour.
// - 142 characters: inside the 110-155 target band, under the 160 gate.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "v2.0.7: fixed pinky toe colliding with the table leg at 3 a.m.; the toe now beeps before impact and the table has been moved 2 cm to the left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
