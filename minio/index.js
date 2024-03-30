const Minio = require('minio');
const fs = require('fs');
const path = require('path');

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'nwQ5bB7TwatkzOvtmhvK',
  secretKey: 'UFnFgizhnGIjYVFeuK40IvoB5ZAZBYBMxHHonElt',
})

function put() {
  minioClient.fPutObject('test', 'test.gif', './皮卡丘.gif', function(err, etag) {
    if (err) {
      return console.log(err);
    }
    console.log('上传成功')
  })
}

function get() {
  minioClient.getObject('test', 'test.gif', function (err, stream) {
    if (err) {
      return console.log(err)
    }
    const _filePath = path.join(__dirname, './images/xxx.png')
    stream.pipe(fs.createWriteStream(_filePath));
  })
}

// put()
get()