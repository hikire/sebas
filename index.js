const { spawn } = require("child_process");
const { lstat, readdir, access, readFile } = require("fs-extra");
const path = require("path");

const SEBAS_FOLDER =
  process.env.SEBAS_DIR || path.join(process.env.HOME, "/.sebas");

const getCommand = async (from, ...args) => {
  const [inputCommand, ...inputArgs] = args;
  try {
    const files = await readdir(from);
    if (files.length) {
      for (let file of files) {
        const filePath = path.join(from, file);
        if (file === inputCommand && (await lstat(filePath)).isDirectory()) {
          return getCommand(filePath, ...inputArgs);
        } else if (inputCommand + ".js" === file) {
          return ["node", filePath, ...inputArgs];
        } else if (inputCommand === file) {
          const commandToExecute = await readFile(filePath, "utf-8");
          return commandToExecute.split(" ").map(a => a.trim());
        }
      }
    }
    return null;
  } catch (error) {
    if (error.code === "ENOENT") {
      process.stderr.write(
        "config folder not find. make sure ~/.sebas exists\n"
      );
      return null;
    } else throw error;
  }
};

const executeCommand = async (...args) => {
  const [command, ...commandArgs] =
    (await getCommand(SEBAS_FOLDER, ...args)) || args;
  const commandProcess = spawn(command, commandArgs, { stdio: "inherit" });
  commandProcess.on("error", error => {
    if (error.code === "ENOENT")
      process.stderr.write("command not found: " + args.join(" ") + "\n");
    else process.stderr.write(error.toString() + "\n");
  });
};

module.exports = { executeCommand };
