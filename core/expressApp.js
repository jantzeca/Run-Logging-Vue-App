import express from 'express'
import * as bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Keys from './config/keys'

import { routes } from './routes/routes'

const app = express()

app.use(bodyParser.json())

mongoose.connect(
  `mongodb://${Keys.username}:${Keys.password}@ds119064.mlab.com:19064/running-log`,
  { useNewUrlParser: true}
)

routes(app)

export default app

// module.exports = {
//   expressApp: app
// }
