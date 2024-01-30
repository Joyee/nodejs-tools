const config = {
  port: {
    option: '-p,--port <n>',
    descriptor: 'set your server port',
    default: 8080,
    usage: 'my-http-server --port <n>',
  },
  directory: {
    option: '-d,--directory <n>',
    descriptor: 'set your server start directory',
    default: process.cwd(), // 当前目录下
    usage: 'my-http-server --directory <n>'
  },
  cache: {
    option: '-c,--cache <n>',
    descriptor: 'set your server cache',
    default: 'no-cache',
    usage: 'my-http-server --cache <n>'
  },
}

module.exports = config
