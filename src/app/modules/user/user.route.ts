import express from 'express'
import {
  createUserController,
  deleteUserController,
  getOrdersController,
  getSingleUserController,
  getUserController,
  orderUserController,
  updateUserController,
} from './user.controller'

const router = express.Router()

router.post('/', createUserController)
router.get('/', getUserController)
router.get('/:userId', getSingleUserController)
router.put('/:userId', updateUserController)
router.delete('/:userId', deleteUserController)
router.put('/:userId/orders', orderUserController)
router.get('/:userId/orders', getOrdersController)

export const userRouters = router
