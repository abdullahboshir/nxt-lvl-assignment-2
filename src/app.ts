import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouters } from './app/modules/user/user.route'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouters)

export default app
