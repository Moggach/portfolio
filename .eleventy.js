module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");


  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const pluginRss = require("@11ty/eleventy-plugin-rss");
  const pluginSEO = require("eleventy-plugin-seo");
  eleventyConfig.addPlugin(pluginSEO, {
    title: "",
    description: "",
    url: "https://annacunnane.co.uk",
    author: "Anna Cunnane",
    twitter: "@AnnaThereseCu",
    image: "",
    options: {
      titleStyle: "minimalistic",
      twitterCardType: "summary_large_image",
      showPageNumbers: false
    }
  });

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addNunjucksFilter(
    "wordLimit",
    require("./src/filters/word-limit-filter"),
  );
  eleventyConfig.addNunjucksFilter(
    "date",
    require("./src/filters/nunjucks-dayjs-filter"),
  );
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
