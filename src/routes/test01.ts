import * as express from 'express'
import bodyParser = require('body-parser');
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('test01 root')
})

router.post('/', (req: express.Request, res: express.Response) => {
  const retVal = { title: req.body.title, description: 'jsontest'}
  res.json(retVal)
})

router.get('/about', (req: express.Request, res: express.Response) => {
  res.send('test01 about')
})

module.exports = router