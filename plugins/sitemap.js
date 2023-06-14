const fs = require("fs-extra");
const path = require("path");
const createSitemap = require("@docusaurus/plugin-sitemap/lib/createSitemap").default;

const options = {
  changefreq: "weekly",
  priority: 0.5,
};

module.exports = function pluginSitemap(context) {
  return {
    name: "docusaurus-plugin-sitemap-custom",

    async postBuild({ siteConfig, routesPaths, outDir }) {
      if (siteConfig.noIndex) {
        return;
      }
      // Generate sitemap.

      const filteredRoutesPaths = routesPaths.filter((path) => !path.includes("1.0.0"));
      const generatedSitemap = await createSitemap(siteConfig, filteredRoutesPaths, options);

      // Write sitemap file.
      const sitemapPath = path.join(outDir, "sitemap.xml");
      try {
        await fs.outputFile(sitemapPath, generatedSitemap);
      } catch (err) {
        throw new Error(`Writing sitemap failed: ${err}`);
      }
    },
  };
};
