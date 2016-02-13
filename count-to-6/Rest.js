module.exports = function average(...args) {
  var result = 0;
  result = args.reduce((x, y) => x + y);

  return result/args.length;
};
