import { Request, Response } from 'express'
import {
  createUserService,
  getSingleUserService,
  getUsersService,
} from './user.service'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const createUserRes = await createUserService(req.body)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: createUserRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User created is failed',
      error,
    })
  }
}

export const getUserController = async (req: Request, res: Response) => {
  try {
    const getUsersRes = await getUsersService()

    res.status(200).json({
      success: true,
      message: 'Users get are successfully',
      data: getUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User get is failed',
      error,
    })
  }
}

export const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const getSingleUsersRes = await getSingleUserService(userId)

    res.status(200).json({
      success: true,
      message: 'Users get are successfully',
      data: getSingleUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User get is failed',
      error,
    })
  }
}
