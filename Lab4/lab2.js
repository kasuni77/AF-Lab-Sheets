const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);