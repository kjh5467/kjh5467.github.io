var ghpages = require("gh-pages");

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(
  "dist",
  {
    branch: "master",
    repo: "https://github.com/kjh5467/kjh5467.github.io"
  },
  callback
);
