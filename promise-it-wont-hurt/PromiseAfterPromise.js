'use strict';

var promise = first();

var newPromise = promise.then(function(result) {
  return second(result);
});

newPromise.then(console.log);
