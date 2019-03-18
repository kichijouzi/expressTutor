import express, { Request, Response } from 'express'
const app = express()

app.get(
  '/',
  (req: Request, res: Response) => {
    return res.send('hello')
  }
)

app.listen(
  3000,
  () => {
    console.log('listen port 3000')
  }
)

export default app