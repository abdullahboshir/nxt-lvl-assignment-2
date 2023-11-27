import { UserModel } from '../user.model'
import { TUser } from './user.interface'

export const createUserService = async (userInfo: TUser) => {
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

export const getSingleUserService = async (userId: string) => {
  const getSingleUserResFromDB = await UserModel.findOne({ userId }).select({
    password: 0,
  })
  return getSingleUserResFromDB
}
