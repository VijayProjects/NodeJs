// require fs module 
const fs = require('fs');

// read directory path
function readFiles() {
  return fs.readdirSync(__dirname); /* If you want to give specific path here write fully qualified path here
                                          C:/my-dir/ */
}
 
// get all files from directory
let directory = readFiles();

directory.forEach(file => {
  // read file from directory
  let readFile = fs.readFileSync(file, 'utf8');
  fs.writeFileSync('WriteData.txt', readFile); /* this will re-write data with replace existing one*/
  fs.appendFileSync('WriteData.txt', readFile); /* this will append the all files data */
  console.log( '------------' + file + ' has been written---------------');
})
