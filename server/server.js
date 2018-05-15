const app = require('./app')
const sockets = require('./sockets')

const port = 1337 || process.env.PORT
const start = async () => {
  try {
    await app.listen(port)
  } catch (err) {
    throw err
  }
}
if (process.env.NODE_ENV !== 'production') {
  require('../webpack')(app)
}
start().then(() => sockets(app.server))
