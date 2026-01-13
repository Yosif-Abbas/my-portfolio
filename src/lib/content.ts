import fs from 'fs/promises';
import path from 'path';

export async function getProjects() {
  const filePath = path.join(process.cwd(), 'src/content/projects/projects.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const { projects } = JSON.parse(fileContents);
  return projects;
}
