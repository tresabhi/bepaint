import { execSync } from 'child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';

const BUILD_DIR = 'dist';

if (existsSync(BUILD_DIR)) {
  console.log(`removing already existing build directory "${BUILD_DIR}"`);
  rmSync(BUILD_DIR, { recursive: true, force: true });
}

console.log('transpiling to JavaScript');
execSync('npx tsc -p tsconfig.json');

console.log('removing devDependencies');
const packageRaw = readFileSync('package.json');
const packageJSON = JSON.parse(packageRaw);

delete packageJSON.devDependencies;

const packageString = JSON.stringify(packageJSON);

writeFileSync('package.json', packageString);
