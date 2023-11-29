import { Request, Response } from 'express'
import {
  createUserService,
  deleteUser,
  getOrdersService,
  getSingleUserService,
  getUsersService,
  orderResFromDB,
  updateUserService,
} from './user.service'
import { UserZodValidation } from './user.validation.zod'

// create a new user controller
export const createUserController = async (req: Request, res: Response) => {
  try {
    const studentDatas = req.body

    const parseUserValidation = UserZodValidation.parse(studentDatas)

    const createUserRes = await createUserService(parseUserValidation)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: createUserRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User created is failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// get all users controller
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
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// get a single user controller
export const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const getSingleUsersRes = await getSingleUserService(userId)

    res.status(200).json({
      success: true,
      message: 'User get is successfully',
      data: getSingleUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User get is failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// update a user controller
export const updateUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const userBody = req.body
    const updateUsersRes = await updateUserService(userId, userBody)

    res.status(200).json({
      success: true,
      message: 'User update is successfully',
      data: updateUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User update is failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// delete a user controller
export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const deleteUsersRes = await deleteUser(userId)

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: null,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User delete is failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// create a new order controller
export const orderUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const userBody = req.body
    const updateUsersRes = await orderResFromDB(userId, userBody)

    res.status(200).json({
      success: true,
      message: 'order created successfully',
      data: updateUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'order created failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}

// get orders controller
export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const getSingleUsersRes = await getOrdersService(userId)

    res.status(200).json({
      success: true,
      message: 'get orders successfully',
      data: getSingleUsersRes,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Orders get is failed',
      error: {
        code: 500,
        description: error.message,
      },
    })
  }
}
