import { Model } from 'mongoose'

export type TUser = {
  userId: number
  username: string
  password: string
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: {
    street: string
    city: string
    country: string
  }
  orders?: [
    {
      productName: string
      price: number
      quantity: number
    },
  ]
  isDeleted: boolean
}

// check if the user is exist with static methods
export interface UserExisting extends Model<TUser> {
  isUserExsist(userId: number): Promise<TUser | null>
}
