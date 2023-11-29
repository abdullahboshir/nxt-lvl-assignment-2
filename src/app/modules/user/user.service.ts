import { UserModel } from '../user.model'
import { TUser } from './user.interface'

// create a new user services
export const createUserService = async (userInfo: any) => {
  // check if the user is exist with static method

  //   if (await UserModel.isUserExsist(userInfo.userId)) {
  //     throw new Error('User is already exists!')
  //   }

  const findUser = await UserModel.findOne({ userId: userInfo.userId })

  if (findUser) {
    throw new Error('User is already exists!')
  }

  const createUserResFromDB = await UserModel.create(userInfo)

  return createUserResFromDB
}

export const getUsersService = async () => {
  const getUsersResFromDB = await UserModel.find().select({
    password: 0,
    userId: 0,
    isActive: 0,
    hobbies: 0,
    orders: 0,
  })
  return getUsersResFromDB
}

// get a single user services
export const getSingleUserService = async (userId: string) => {
  const getSingleUserResFromDB = await UserModel.findOne({ userId })

  if (!getSingleUserResFromDB) {
    throw new Error('User not found')
  }

  return getSingleUserResFromDB
}

// update a user services
export const updateUserService = async (userId: string, userBody: any) => {
  const checkUser = await UserModel.findOne({ userId })

  if (!checkUser) {
    throw new Error('User not found')
  }

  const updateUserResFromDB = await UserModel.findOneAndUpdate(
    { userId },
    userBody,
    {
      new: true,
      upsert: true,
    },
  )

  return updateUserResFromDB
}

// delete a user services
export const deleteUser = async (userId: string) => {
  const checkUser = await UserModel.findOne({ userId })

  if (!checkUser) {
    throw new Error('User not found')
  }

  const userDeleteRes = await UserModel.updateOne(
    { userId },
    { isDeleted: true },
    { upsert: true },
  )

  return userDeleteRes
}

// create a new orders services
export const orderResFromDB = async (userId: string, userBody: any) => {
  const checkUser = await UserModel.findOne({ userId })
  if (!checkUser) {
    throw new Error('User not found')
  }

  let updateUserResFromDB

  if (!checkUser?.orders) {
    updateUserResFromDB = await UserModel.findOneAndUpdate(
      { userId },
      { orders: userBody },
      { upsert: true, new: true },
    )
  }

  if (checkUser?.orders) {
    updateUserResFromDB = await UserModel.findOneAndUpdate(
      { userId },
      { $push: { orders: userBody } },
      {
        upsert: true,
        new: true,
      },
    )
  }

  return null
}

// get orders services
export const getOrdersService = async (userId: string) => {
  const userRes = await UserModel.findOne({ userId })

  if (!userRes) {
    throw new Error('User not found')
  }

  if (!userRes.orders === undefined || userRes.orders.length === 0) {
    throw new Error('You have no any orders, Please create a new order')
  }

  return userRes?.orders
}
