// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note for a bug in real life / human biology
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v3.0.7: fixed a bug where the brain replayed an embarrassing moment from 2009 at 3 a.m. with no skip button.";

// Gate: UTF-8 text of 1 to 160 characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the gate: must be 1-160 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to entry.txt`);
console.log(ENTRY);
