const common = [
  "features/**/*.feature",
  "--require-module ts-node/register",
  "--require features/step_definitions/**/*.ts",
  "--require features/support/**/*.ts",
  "--publish-quiet",
].join(" ");

module.exports = {
  default: common,
};
