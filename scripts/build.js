import { execSync } from 'child_process';
import {
  copyFileSync,
  existsSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'fs';

const BUILD_DIR = 'dist';
const INJECT_FROM_ROOT = ['package.json', 'README.md', 'LICENSE'];

if (existsSync(BUILD_DIR)) {
  console.log(`removing already existing build directory "${BUILD_DIR}"`);
  rmSync(BUILD_DIR, { recursive: true, force: true });
}

console.log('transpiling to JavaScript');
execSync('npx tsc -p tsconfig.json');

console.log(`injecting files from root into ${BUILD_DIR}`);
INJECT_FROM_ROOT.forEach((fileName) => {
  console.log(`injecting ${fileName}`);
  copyFileSync(fileName, `${BUILD_DIR}/${fileName}`);
});

console.log('removing devDependencies');
const packageRaw = readFileSync(`${BUILD_DIR}/package.json`);
const packageJSON = JSON.parse(packageRaw);

delete packageJSON.devDependencies;

const packageString = JSON.stringify(packageJSON);

writeFileSync(`${BUILD_DIR}/package.json`, packageString);
