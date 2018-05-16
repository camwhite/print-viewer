const app = require('./app')
const sockets = require('./sockets')

const port = process.env.PORT || 1337
const start = async () => {
  try {
    await app.listen(port)
    console.log(`App listening on port ${app.server.address().port}`)
  } catch (err) {
    throw err
  }
}
if (process.env.NODE_ENV !== 'production') {
  require('../webpack')(app)
}
start().then(() => sockets(app.server))
