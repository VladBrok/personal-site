import { exec } from "child_process";
import fs from "fs/promises";
import projects from "../src/data/projects.json" assert { type: "json" };

const result = [...projects];

for (let i = 0; i < result.length; i++) {
  const project = result[i];
  const imageUrls = (await fs.readdir(`./public/${project.pathToImages}`)).map(
    url => `${project.pathToImages}${url}`
  );

  if (!equal(project.imageUrls, imageUrls)) {
    result[i] = { ...project, imageUrls };
  }
}

if (!equal(result, projects)) {
  await save();
}

function equal(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);
}

async function save() {
  const PROJECTS_FILE = "./src/data/projects.json";

  await fs.writeFile(PROJECTS_FILE, JSON.stringify(result));
  exec(`npx prettier --write ${PROJECTS_FILE}`, (_err, _out, buffer) =>
    console.log(buffer)
  );
}
