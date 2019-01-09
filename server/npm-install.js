const fs = require('fs');
const path = require('path');

console.log("Mergin server and client package.json..");

const previousPackageJson = fs.readFileSync('./package.json').toString(); // need 2 variables to save previous package.json's
const clientPackageJson = JSON.parse(fs.readFileSync('../client/package.json').toString());
const serverPackageJson = JSON.parse(previousPackageJson);

// Checking if merge is allowed
checkDependenciesConflicts(serverPackageJson.dependencies, clientPackageJson.dependencies);
checkDependenciesConflicts(serverPackageJson.devDependencies, clientPackageJson.devDependencies);
checkDependenciesConflicts(serverPackageJson.optionalDependencies, clientPackageJson.optionalDependencies);

// Merging 
mergeDependenciesToServer(serverPackageJson, clientPackageJson);


rewriteServerPackageJson(serverPackageJson, previousPackageJson);

// fn's

function rewriteServerPackageJson(serverPackageJson, previousPackageJson) {
  const fs = require('fs');
  fs.writeFile('./prev-package.json', previousPackageJson, function(err) {
    if (err) {
      return console.log('Could not save prev-package.json:', err);
    }
    console.log("prev-package.jsn successfully rewritten!");
    fs.writeFile("./package.json", JSON.stringify(serverPackageJson, null, 2), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("package.json successfully rewritten!");
    }); 
  });
}
function mergeDependenciesToServer(serverPackageJson, clientPackageJson) {
  if (serverPackageJson.dependencies || clientPackageJson.dependencies) {
    serverPackageJson.dependencies = mergeObjects(serverPackageJson.dependencies, clientPackageJson.dependencies);
  }

  if (serverPackageJson.devDependencies || clientPackageJson.devDependencies) {
    serverPackageJson.devDependencies = mergeObjects(serverPackageJson.devDependencies, clientPackageJson.devDependencies);
    Object.keys(serverPackageJson.devDependencies).forEach((devDep) => {
      if (serverPackageJson.dependencies[devDep]) {
        delete serverPackageJson.devDependencies[devDep];
      }
    })
  }

  if (serverPackageJson.optionalDependencies || clientPackageJson.optionalDependencies) {
    serverPackageJson.optionalDependencies = mergeObjects(serverPackageJson.optionalDependencies, clientPackageJson.optionalDependencies);
    Object.keys(serverPackageJson.optionalDependencies).forEach((devDep) => {
      if (serverPackageJson.dependencies[devDep] || serverPackageJson.devDependencies[devDep]) {
        delete serverPackageJson.optionalDependencies[devDep];
      }
    });
  }
}

function mergeObjects(obj1 = {}, obj2 = {}) {
  return Object.assign(obj1, obj2);
}

function checkDependenciesConflicts(serverDependencies, clientDependencies) {
  if (!serverDependencies || !clientDependencies) {
    return;
  }
  Object.keys(clientDependencies).forEach((dependency) => {
    if (serverDependencies[dependency] && serverDependencies[dependency] !== clientDependencies[dependency]) {
      throw new Error(`Dependency already exists in both package.json with different version: 
{"${dependency}": "${clientDependencies[dependency]}" !== "${serverDependencies[dependency]}"}`);
    }
  });
}
