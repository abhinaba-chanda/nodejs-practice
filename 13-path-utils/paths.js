// Small helpers around node:path.
const path = require("node:path");

function fileInfo(p) {
  return { dir: path.dirname(p), name: path.basename(p, path.extname(p)), ext: path.extname(p) };
}

function changeExt(p, ext) {
  const info = fileInfo(p);
  return path.join(info.dir, info.name + ext);
}

module.exports = { fileInfo, changeExt };
