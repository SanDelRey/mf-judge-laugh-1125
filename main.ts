import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// One line of office life, judged head to head by an AI.
const line: string = "The meeting about cutting meetings ran long, so we booked a follow-up to decide which meetings to cut. Attendance is mandatory."
if (line.length < 1 || line.length > 200) throw new Error("entry must be 1..200 characters: " + line.length)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")

if (line.trim() !== line || line.trim().length === 0) throw new Error("entry must be non-empty with no surrounding whitespace")
