// String helpers: slugify and truncate.
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function truncate(text, max) {
  return text.length <= max ? text : text.slice(0, max - 3) + "...";
}

module.exports = { slugify, truncate };

if (require.main === module) {
  console.log(slugify(process.argv[2] || "Hello Node World!"));
}
