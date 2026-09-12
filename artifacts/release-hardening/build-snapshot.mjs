import fs from "node:fs/promises";
import path from "node:path";
import {createHash} from "node:crypto";
import assert from "node:assert/strict";

const testedRoot = process.argv[2];
assert.ok(testedRoot, "Pass the isolated build directory.");
async function filesAt(dir) {
  const entries=await fs.readdir(dir,{withFileTypes:true});
  const nested=await Promise.all(entries.map(entry=>entry.isDirectory()?filesAt(path.join(dir,entry.name)):[path.join(dir,entry.name)]));
  return nested.flat();
}
const files=[...(await filesAt("src")),...(await filesAt("public")),...(await filesAt("scripts")),"package.json","package-lock.json","next.config.ts","tsconfig.json"];
const records=[];
for(const file of files) {
  const digest=buffer=>createHash("sha256").update(buffer).digest("hex");
  const source=digest(await fs.readFile(file));
  const tested=digest(await fs.readFile(path.join(testedRoot,file)));
  assert.equal(tested,source,`Build source differs: ${file}`);
  records.push({path:file.replaceAll("\\","/"),sha256:source});
}
await fs.writeFile("artifacts/release-hardening/build-snapshot.json",JSON.stringify({sourceRoot:process.cwd(),testedRoot,fileCount:records.length,allMatch:true,files:records},null,2));
console.log(`Verified ${records.length} identical source, asset and build-configuration files.`);
