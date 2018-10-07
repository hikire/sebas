#!/usr/bin/env node

const { executeCommand } = require("../index");

const args = process.argv.slice(2);
if (args[0] === "--version" || args[0] === "-v") {
  const { version } = require("../package.json");
  process.stdout.write(`Sebas v${version}\n`);
} else if (args.length) {
  executeCommand(...args).catch(error => {
    console.error(error);
    process.exit(1);
  });
} else {
  process.stdout.write(`Usage:
  sbas COMMAND [ARGS]\n`);
}
