const {
  readMDXFilesAndExtractFrontmatter,
  listFilesInTopLevel,
  getUniqueArray,
} = require("./helpers");

module.exports = async function myPlugin() {
  return {
    name: "tutorial-filters",
    async loadContent() {
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
  };
};
