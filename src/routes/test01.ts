import express, { Request, Response } from 'express'
import bodyParser = require('body-parser');
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req: Request, res: Response) => {
  res.send('test01 root')
})

router.post('/', (req: Request, res: Response) => {
  res.send(req.body.title)
})

router.get('/about', (req: Request, res: Response) => {
  res.send('test01 about')
})

module.exports = router