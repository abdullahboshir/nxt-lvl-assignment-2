import { Schema, model } from 'mongoose'
import { TUser } from './user/user.interface'
import config from '../config'
const bcrypt = require('bcrypt')

const UserShema = new Schema<TUser>({
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
  hobbies: ['Cooding', 'Traveling', 'Writting'],
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
})

UserShema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt))
  next()
})

UserShema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

export const UserModel = model<TUser>('user', UserShema)
