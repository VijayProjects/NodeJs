// require fs module 
const fs = require('fs');

// read directory path
function readFiles() {
  return fs.readdirSync(__dirname); /* If you want to give specific path here write fully qualified path here
                                          C:/my-dir/ */
}
 
// get all files from directory
let directory = readFiles();

// display all files
console.log('There are totally '+directory.length + ' are available those are')
console.log(directory.toString());
console.log('==================================================================')

// read files data
directory.forEach(file => {
  let fileData = fs.readFileSync(file, 'utf8');
  console.log('-----------------' + file + ' is started----------------');
  console.log(fileData);
  console.log('-----------------' + file + ' is completed----------------');
});
