const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");
function removeMdxExtension(fileName) {
  return fileName.replace(/\.mdx$/, ""); // Replaces ".mdx" at the end of the string with an empty string
}
function readMDXFilesAndExtractFrontmatter(fileNames) {
  const result = [];

  fileNames
    .filter((name) => name !== "index.mdx")
    .forEach((fileName) => {
      const filePath = path.join(__dirname, "../versioned_docs/version-2.0.0/tutorials", fileName); // Adjust the directory if needed

      try {
        const fileContent = fs.readFileSync(filePath, "utf8");

        const match = fileContent.match(/^#\s+(.*)/m);
        let title = "";
        if (match) {
          title = match[1].trim();
        }
        const { data } = grayMatter(fileContent);
        result.push({ ...data, title, slug: removeMdxExtension(fileName) });
      } catch (err) {
        console.error(`Error reading or parsing file "${fileName}": ${err}`);
      }
    });

  return result;
}

function listFilesInTopLevel(repositoryPath) {
  repositoryPath = path.resolve(
    path.basename(__dirname),
    "../versioned_docs/version-2.0.0/tutorials"
  );

  try {
    // Read the contents of the repository path
    const files = fs.readdirSync(repositoryPath);

    // Filter out only the files (not subdirectories)
    const topLevelFiles = files.filter((file) => {
      const filePath = path.join(repositoryPath, file);
      return fs.statSync(filePath).isFile();
    });

    return topLevelFiles;
  } catch (err) {
    console.error(`Error listing files in the top level of the repository: ${err}`);
    return [];
  }
}

function getUniqueArray({ objects, key }) {
  return Array.from(
    new Set(
      objects
        .filter((res) => res[key])
        .map((res) => res[key])
        .flat()
    )
  ).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: "my-plugin",
    async loadContent() {
      /* ... */
      const files = listFilesInTopLevel();
      const results = readMDXFilesAndExtractFrontmatter(files ?? []) ?? [];
      return {
        types: getUniqueArray({ objects: results, key: "type" }),
        products: getUniqueArray({ objects: results, key: "product" }),
        allTags: getUniqueArray({ objects: results, key: "tags" }),
        allData: results,
      };
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      const { allData = [], types = [], products = [], allTags = [] } = content;

      setGlobalData({ allData, types, products, allTags });
    },
    /* other lifecycle API */
  };
};
