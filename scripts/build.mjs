import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { argv } from 'process';

const BUILD_DIR = 'dist';

if (existsSync(BUILD_DIR)) {
  console.log(`removing already existing build directory "${BUILD_DIR}"`);
  rmSync(BUILD_DIR, { recursive: true, force: true });
}

if (argv.includes('--no-transpile')) {
  console.warn('skipped transpiling to JavaScript');
} else {
  console.log('transpiling to JavaScript');

  await build({
    entryPoints: ['src/index.ts'],
    outdir: BUILD_DIR,

    platform: 'neutral',
    bundle: true,
    minify: true,
    sourcemap: true,

    plugins: !argv.includes('--no-types') ? [dtsPlugin()] : [],
  });
}

if (argv.includes('--publish')) {
  console.warn('publish mode enabled; changes will be made to the source code');

  console.log('removing devDependencies');
  const packageRaw = readFileSync('package.json');
  const packageJSON = JSON.parse(packageRaw);

  delete packageJSON.devDependencies;

  const packageString = JSON.stringify(packageJSON);

  writeFileSync('package.json', packageString);
} else {
  console.log('publish mode disabled');
}
