const http = require('http')
const chalk = require('chalk')
const url = require('url')
const path = require('path')
const fs = require('fs').promises
const ejs = require('ejs')
const mime = require('mime')

class Server {
  constructor(options) {
    this.port = options.port
    this.directory = options.directory
    this.cache = options.cache
  }

  async handleRequest(req, res) {
    let { pathname } = url.parse(req.url)
    pathname = decodeURIComponent(pathname)
    let requestUrl = path.join(this.directory, pathname)

    try {
      const statObj = await fs.stat(requestUrl)
      if (statObj.isDirectory()) {
        let dirs = await fs.readdir(this.directory)
        let content = await ejs.renderFile(path.resolve(this.directory, 'index.html'), {
          dirs: dirs.map(dir => ({
            name: dir,
            pathname: path.join(pathname, dir),
          })),
          port: this.port,
          directory: this.directory,
        })
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(content)
      } else {
        res.setHeader('Content-Type',  `${mime.getType(requestUrl)};charset=utf-8`)
        createReadStream(requestUrl).pipe(res)
      }
    } catch (error) {
      console.log(error)
      res.statusCode = 404
      res.end('Not Found')
    }
  }

  start() {
    const server = http.createServer(this.handleRequest.bind(this))
    server.listen(this.port, () => {
      console.log(`${chalk.yellow('Starting up http-server, serving')}`)
      console.log(` http://127.0.0.1:${chalk.green(this.port)}`)
    })
  }
}

module.exports = Server
