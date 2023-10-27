const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");
function readMDXFilesAndExtractFrontmatter(fileNames) {
  const result = [];

  fileNames.forEach((fileName) => {
    const filePath = path.join(__dirname, "../versioned_docs/version-2.0.0/tutorials", fileName); // Adjust the directory if needed

    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = grayMatter(fileContent);
      result.push(data);
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

module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: "my-plugin",
    async loadContent() {
      /* ... */
      const files = listFilesInTopLevel();
      const results = readMDXFilesAndExtractFrontmatter(files ?? []) ?? [];
      return Array.from(
        new Set(
          results
            .filter((res) => res.tags)
            .map((res) => res.tags)
            .flat()
        )
      ).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      const tutorialsTags = content ?? [];

      setGlobalData({ tutorialsTags });
    },
    /* other lifecycle API */
  };
};
