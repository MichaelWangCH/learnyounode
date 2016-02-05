'use strict';

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    var counter = 0;
    var returnValue = [];

    promise1.then(function(val) {
      counter++;
      returnValue[0] = val;

      if (counter == 2) {
        fulfill(returnValue);
      }
    })
    
    promise2.then(function(val) {
      counter++;
      returnValue[1] = val;

      if (counter == 2) {
          fulfill(returnValue);
      }
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log);
