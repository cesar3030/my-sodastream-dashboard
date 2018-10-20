import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
import router from './api'
import path from 'path'

const app = express(apiRoot, api)
const server = http.createServer(app)

mongoose.connect(mongo.uri, { useNewUrlParser: true })
mongoose.Promise = Promise

router.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
