'use strict';

function parsePromised() {
  try {
    var jsonObj = JSON.parse(process.argv[2]);
  } catch (e) {
      if (e) {
        return Promise.reject(e);
      } else {
        return Promise.resolve('');
      }
  }
}

parsePromised().then(null, console.log);
