const fs = require("fs");
const path = require("path");

// Load the tsconfig.json file
const tsconfigPath = "./tsconfig.json";
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));

// Resolve the alias path
const alias = "@ui/utils";
const aliasPath = resolvePathFromAlias(alias, tsconfig.compilerOptions.paths);

// Log the resolved path
console.log(`Resolved path for ${alias}: ${aliasPath}`);

// Function to resolve the path from alias
function resolvePathFromAlias(alias, paths) {
  // Check if the alias exists in paths
  if (paths && paths[alias]) {
    // Get the first path from the paths array
    const resolvedPath = paths[alias][0];
    // Resolve the path relative to the current directory
    return path.resolve(resolvedPath);
  }
  // If alias is not found, return null
  return null;
}
