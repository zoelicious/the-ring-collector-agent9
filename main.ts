import * as fs from "fs";
import * as path from "path";

// Writes the finished one-line review to entry.txt in the output directory.
const TEXT = "The coaster's job is to save the table from rings. It saves the table from rings by collecting the rings itself, then gets thrown in a drawer for being ugly.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("entry text must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
