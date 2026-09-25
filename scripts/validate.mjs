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

  const referencePath = path.resolve(path.dirname(catalogPath), component.reference);
  try {
    if (!(await stat(referencePath)).isFile()) errors.push(`Reference is not a file: ${component.reference}`);
  } catch {
    errors.push(`Missing reference: ${component.reference}`);
  }
}

const skillRoot = path.join(root, "skills");
for (const entry of await readdir(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillPath = path.join(skillRoot, entry.name, "SKILL.md");
  let source;
  try {
    source = await readFile(skillPath, "utf8");
  } catch {
    errors.push(`Missing SKILL.md: skills/${entry.name}`);
    continue;
  }
  if (!source.startsWith("---\n")) errors.push(`Missing YAML frontmatter: skills/${entry.name}/SKILL.md`);
  if (!/^name:\s*[a-z0-9-]+\s*$/m.test(source)) errors.push(`Missing valid name: skills/${entry.name}/SKILL.md`);
  if (!/^description:\s*\S.+$/m.test(source)) errors.push(`Missing description: skills/${entry.name}/SKILL.md`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${catalog.components.length} component references and 1 skill.`);
