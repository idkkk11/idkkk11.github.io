const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    // Switch to the existing 'gh-pages' branch
    await execa("git", ["checkout", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "Update gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
