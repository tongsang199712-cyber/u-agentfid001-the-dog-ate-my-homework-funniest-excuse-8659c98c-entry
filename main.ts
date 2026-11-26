// The Dog Ate My Homework: Funniest Excuse — make.fun entry.
// Writes one line, the excuse a dog gives after being caught eating the
// homework, to /output/entry.txt. Node 22, no dependencies.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "It said 'show your work,' so I showed it to my stomach — the only one in this house who actually reads it.";

// Gate: 1 to 200 characters, single line, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
