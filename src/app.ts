import express, { Application } from 'express'
import cors from 'cors'
import { userRouters } from './app/modules/user/user.route'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouters)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
