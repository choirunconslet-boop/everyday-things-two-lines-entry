import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "A toaster is a tiny tanning bed for bread: two glowing bars tan both sides of the slice until a spring pops it up, golden and crisp.",
  "The tanning-bed picture maps the heat on both sides and the timed pop-up, but it leaves out that bread can't feel the heat or ask to stop, so the toaster can burn it black.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
console.log("Wrote /output/entry.txt");
