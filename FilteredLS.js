var fs = require('fs');

fs.readdir('.', function (err, list) {
  if (err) throw err;
  
  for (var i = 0; i < list.length; i++) {
  	 if (list[i].indexOf(process.argv[2]) > 0) {
  	 	console.log(list[i]);
  	 	console.log('\n');
  	 }
  }
});