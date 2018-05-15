const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

// Instantiate the app
const app = require('fastify')()

// Path to index
const publicPath = path.join(__dirname, '../public')

if (process.env.NODE_ENV !== 'production') {
  app.use(require('morgan')('dev'))
}
app.register(require('fastify-static'), { root: publicPath })
app.get('/', async (request, reply) => {
  reply.sendFile('index.html')
})

module.exports = app
