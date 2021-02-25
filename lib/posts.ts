import fs from "fs";
import readline from "readline";
import * as dotenv from "dotenv";
import marked from "marked";
import path from "path";
import { WikiHeader, WikiHeaderWithBody } from "../interfaces";
dotenv.config();

const postsDirectory = path.join(process.cwd(), "/blog/wiki");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    })
    .reduce((accu, curr) => {
      if (curr.params.id.includes(".un~") || curr.params.id.includes("~")) return [...accu];
      if (curr.params.id === "wiki" || curr.params.id === "diary") return [...accu];
      return [...accu, curr];
    }, []);
}

async function getMinimumBodyFromId(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileStream = fs.createReadStream(fullPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let body = "";
  let headerStarted = false;

  for await (const line of rl) {
    if (line === "---" && !headerStarted) {
      headerStarted = true;
      continue;
    }
    if (line === "---" && headerStarted) {
      headerStarted = false;
      continue;
    }
    if (headerStarted) continue;

    if (line.includes("##")) continue;

    body += line;
    if (body.length >= 350) break;
  }

  return body;
}

async function getAllHeaders() {
  const fileNames = fs.readdirSync(postsDirectory);
  const onlyPostsFileNames = fileNames.filter((fileName) => {
    if (fileName.includes(".un~") || fileName.includes("~")) return false;
    if (fileName === "wiki" || fileName === "diary" || fileName === "index.md") return false;
    return true;
  });

  return Promise.all(
    onlyPostsFileNames.map<Promise<WikiHeader>>(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileStream = fs.createReadStream(fullPath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      const header = {};
      let headerStarted = false;

      for await (const line of rl) {
        if (line === "---" && headerStarted) break;
        if (line === "---") {
          headerStarted = true;
          continue;
        }

        const seperateIndex = line.indexOf(":");
        const [property, value] = [line.slice(0, seperateIndex), line.slice(seperateIndex + 1)];
        header[property.trim()] = value.trim();
      }

      return header as WikiHeader;
    })
  );
}

export async function getRecentCreatedPosts(goalCount: number): Promise<WikiHeaderWithBody[]> {
  const allHeaders = await getAllHeaders();

  return Promise.all(
    allHeaders
      .filter((header) => {
        return header.publish === "true";
      })
      .sort(
        ({ created: createdA }, { created: createdB }) =>
          new Date(createdB).getTime() - new Date(createdA).getTime()
      )
      .slice(0, goalCount)
      .map(async (header) => {
        const texts = await getMinimumBodyFromId(header.title);
        return { ...header, texts };
      })
  );
}

export async function getRecentModifiedPosts(goalCount: number): Promise<WikiHeaderWithBody[]> {
  const allHeaders = await getAllHeaders();

  return Promise.all(
    allHeaders
      .filter((header) => {
        return header.publish === "true";
      })
      .sort(
        ({ modified: modifiedA }, { modified: modifiedB }) =>
          new Date(modifiedB).getTime() - new Date(modifiedA).getTime()
      )
      .slice(0, goalCount)
      .map(async (header) => {
        const texts = await getMinimumBodyFromId(header.title);
        return { ...header, texts };
      })
  );
}

function deleteHeader(html: string) {
  return html.replace(/<hr>\n(.|\n)*?\n<hr>\n/, "");
}

export function getPostDatasFromId(id: string, _deleteHeader: boolean = true): string {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = marked(fileContents);

  return _deleteHeader ? deleteHeader(processedContent) : processedContent;
}
