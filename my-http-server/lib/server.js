const http = require('http')
const chalk = require('chalk')

class Server {
  constructor(options) {
    this.port = options.port
    this.directory = options.directory
    this.cache = options.cache
  }

  async handleRequest(req, res) {

  }

  start() {
    const server = http.createServer(this.handleRequest)
    server.listen(this.port, () => {
      console.log(`${chalk.yello('Starting up http-server, serving')}`)
      console.log(` http://127.0.0.1:${chalk.green(this.port)}`)
    })
  }
}

module.exports = Server
