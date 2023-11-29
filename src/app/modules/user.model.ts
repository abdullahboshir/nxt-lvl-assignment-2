import { Schema, model } from 'mongoose'
import { TUser, UserExisting } from './user/user.interface'
import config from '../config'
const bcrypt = require('bcrypt')

const UserSchema = new Schema<TUser, UserExisting>({
  userId: { type: Number, unique: true },
  username: {
    type: String,
    unique: true,
    maxLength: [20, '{VALUE} is do not more then 20 Characters'],
  },
  password: {
    type: String,
    unique: true,
  },
  fullName: {
    firstName: { type: String },
    lastName: { type: String },
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  hobbies: [
    {
      type: String,
    },
  ],
  address: {
    street: String,
    city: String,
    country: String,
  },
  orders: [
    {
      productName: {
        type: String,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

// pre middle ware of the hashed password
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt))
  next()
})

// post middleWare of empty password
UserSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

// post middleWare of find or findOneAndUpdate password hashed
UserSchema.post(
  ['findOneAndUpdate', 'findOne'],
  async function (doc: TUser, next) {
    if (doc) {
      doc.password = ''
    }
    next()
  },
)

// is deleted middle ware
UserSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

// custom static method for existing user check
UserSchema.statics.isUserExist = async function (userId: number) {
  const existingUser = await UserModel.findOne({ userId })
  return existingUser
}

export const UserModel = model<TUser, UserExisting>('user', UserSchema)
