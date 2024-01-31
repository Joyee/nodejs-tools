const config = {
  port: {
    option: '-p,--port <char>',
    descriptor: 'set your server port',
    default: 8080,
    usage: 'my-http-server --port <char>',
  },
  directory: {
    option: '-d,--directory <char>',
    descriptor: 'set your server start directory',
    default: process.cwd(), // 当前目录下
    usage: 'my-http-server --directory <char>'
  },
  cache: {
    option: '-c,--cache <char>',
    descriptor: 'set your server cache',
    default: 'no-cache',
    usage: 'my-http-server --cache <char>'
  },
}

module.exports = config
