import * as express from 'express'
const app = express()
const test01 = require('./routes/test01')

app.get(
  '/',
  (req: express.Request, res: express.Response) => {
    return res.send('hello')
  }
)

app.use('/test01/', test01)

app.listen(
  3000,
  () => {
    console.log('listen port 3000')
  }
)

module.exports = app
