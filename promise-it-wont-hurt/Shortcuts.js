// The way you have learned: create promise through the constructor.
var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:
var promise = Promise.resolve('SECRET VALUE');

// Likewise...
var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));

var promise = promise.then(null, function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
});

promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
});
