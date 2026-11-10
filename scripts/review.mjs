// Runs Claude Code headless to review a campaign folder.
// Usage: node scripts/review.mjs <campaign-folder>
// Exit code 1 if any finding is high severity, 2 on a script error.
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node scripts/review.mjs <campaign-folder>");
  process.exit(2);
}

const schema = JSON.stringify(JSON.parse(readFileSync(resolve(root, "review/findings.schema.json"), "utf8")));
const prompt =
  `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. Report only real problems.`;

const args = [
  "-p", prompt,
  "--output-format", "json",
  "--json-schema", schema,
  "--allowedTools", "Read,Glob,Grep",
];

// shell:true so Windows finds claude.cmd; args are quoted by hand.
const quote = (s) => `"${s.replace(/"/g, '\\"')}"`;
const run = spawnSync("claude", args.map(quote), {
  cwd: root,
  encoding: "utf8",
  shell: true,
  maxBuffer: 64 * 1024 * 1024,
});

if (run.status !== 0) {
  console.error("claude failed:", run.stderr || run.stdout);
  process.exit(2);
}

let parsed;
try {
  parsed = JSON.parse(run.stdout);
} catch {
  console.error("Could not parse claude output:\n" + run.stdout);
  process.exit(2);
}

// Output may be one object, or a list whose last item is the result.
const result = Array.isArray(parsed) ? parsed[parsed.length - 1] : parsed;
const out = result?.structured_output;
if (!out || !Array.isArray(out.findings)) {
  console.error("No structured_output in result:\n" + JSON.stringify(result, null, 2));
  process.exit(2);
}

mkdirSync(resolve(root, "review"), { recursive: true });
writeFileSync(resolve(root, "review/findings.json"), JSON.stringify(out, null, 2) + "\n");

const count = (sev) => out.findings.filter((f) => f.severity === sev).length;
const high = count("high");
console.log(
  `${folder}: ${out.findings.length} findings (${high} high, ${count("medium")} medium, ${count("low")} low)`
);
process.exit(high > 0 ? 1 : 0);
