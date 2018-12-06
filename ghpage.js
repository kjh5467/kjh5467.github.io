var ghpages = require("gh-pages");

ghpages.publish("dist", {
  branch: "master",
  repo: "https://github.com/kjh5467/kjh5467.github.io.git"
});
