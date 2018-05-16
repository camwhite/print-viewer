// Modules
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

// Instantiate the app
const app = require('fastify')()

// Statically serve public path
const publicPath = path.join(__dirname, '../public')
app.register(require('fastify-static'), { root: publicPath })

// Middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(require('morgan')('dev'))
}
app.use(require('compression')())

// Routes
app.get('/', (request, reply) => {
  reply.sendFile('index.html')
})

module.exports = app
