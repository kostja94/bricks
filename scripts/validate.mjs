import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const errors = [];

const catalogPath = path.join(root, "catalog", "components.json");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const ids = new Set();

for (const component of catalog.components ?? []) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(component.id ?? "")) {
    errors.push(`Invalid component id: ${component.id}`);
  }
  if (ids.has(component.id)) errors.push(`Duplicate component id: ${component.id}`);
  ids.add(component.id);

  if (!["component", "section", "pattern", "workspace"].includes(component.kind)) errors.push(`Invalid kind for ${component.id}: ${component.kind}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(component.primary_family ?? "")) errors.push(`Invalid primary_family for ${component.id}`);
  if (component.delivery_unit !== true) errors.push(`Catalog entry is not an independent delivery unit: ${component.id}`);

  const referencePath = path.resolve(path.dirname(catalogPath), component.reference);
  try {
    if (!(await stat(referencePath)).isFile()) errors.push(`Reference is not a file: ${component.reference}`);
  } catch {
    errors.push(`Missing reference: ${component.reference}`);
  }
}

const skillRoot = path.join(root, "skills");
let skillCount = 0;
for (const entry of await readdir(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  skillCount++;
  const skillPath = path.join(skillRoot, entry.name, "SKILL.md");
  let source;
  try {
    source = await readFile(skillPath, "utf8");
  } catch {
    errors.push(`Missing SKILL.md: skills/${entry.name}`);
    continue;
  }
  if (!source.replaceAll("\r\n", "\n").startsWith("---\n")) errors.push(`Missing YAML frontmatter: skills/${entry.name}/SKILL.md`);
  if (!/^name:\s*[a-z0-9-]+\s*$/m.test(source)) errors.push(`Missing valid name: skills/${entry.name}/SKILL.md`);
  const declaredName = source.match(/^name:\s*([a-z0-9-]+)\s*$/m)?.[1];
  if (declaredName !== entry.name) errors.push(`Skill name/folder mismatch: ${entry.name}`);
  if (!/^description:\s*\S.+$/m.test(source)) errors.push(`Missing description: skills/${entry.name}/SKILL.md`);
}

// Check local resources throughout the maintained docs, including untracked additions.
async function checkLinks(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await checkLinks(file); continue; }
    if (!entry.name.endsWith(".md")) continue;
    const source = await readFile(file, "utf8");
    for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].split("#")[0];
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      try { await stat(path.resolve(path.dirname(file), decodeURIComponent(target))); }
      catch { errors.push(`Broken local link in ${path.relative(root, file)}: ${target}`); }
    }
  }
}
await checkLinks(root);

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${catalog.components.length} component references and ${skillCount} skills.`);
