import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 200

function checked(text: string): string {
  const trimmed = text.trim()
  if (trimmed.length === 0 || trimmed !== text || text.length > LIMIT) {
    throw new RangeError("entry out of bounds: " + text.length)
  }
  return text
}

const ENTRY = "The meeting about cutting meetings ran long, so we booked a follow-up to decide which meetings to cut. Attendance is mandatory."
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
const payload = checked(ENTRY)
writeFileSync(join(outDir, "entry.txt"), payload, "utf8")
