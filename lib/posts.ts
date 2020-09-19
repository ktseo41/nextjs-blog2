import fs from "fs";
import * as dotenv from "dotenv";
import marked from "marked";
import path from "path";
dotenv.config();

const postsDirectory = process.env.POSTS_LOCATION;

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
      if (curr.params.id.includes(".un~") || curr.params.id.includes("~"))
        return [...accu];
      if (curr.params.id === "wiki" || curr.params.id === "diary")
        return [...accu];
      return [...accu, curr];
    }, []);
}

export function getPostDatasFromId(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = marked(fileContents);

  return processedContent;
}
