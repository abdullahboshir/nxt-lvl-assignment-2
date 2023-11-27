import express from 'express'
import {
  createUserController,
  getSingleUserController,
  getUserController,
} from './user.controller'

const router = express.Router()

router.post('/', createUserController)
router.get('/', getUserController)
router.get('/:userId', getSingleUserController)

export const userRouters = router
