module.exports = function makeImportant(arg, times = arg.length) {
  return arg + '!'.repeat(times);
};
