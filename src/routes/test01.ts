import * as express from 'express'
import bodyParser = require('body-parser');
import { DataStore } from '../modules/dataStore/dataStore'
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('test01 root')
})

router.post('/', (req: express.Request, res: express.Response) => {
  const retVal = { name: req.body.name, description: 'sample'}
  const data = new DataStore()
  data.addData(retVal.name, retVal.description)
  data.disp()
  res.json(retVal)
})

router.get('/about', (req: express.Request, res: express.Response) => {
  res.send('test01 about')
})

module.exports = router