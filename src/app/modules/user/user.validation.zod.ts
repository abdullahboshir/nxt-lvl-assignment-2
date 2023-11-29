import { z } from 'zod'

export const UserZodValidation = z.object({
  userId: z.number().int().positive(),
  username: z.string().min(8).max(20),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number().int().positive(),
  email: z.string().email(),
  isActive: z.boolean().default(false),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z.optional(
    z.array(
      z.object({
        productName: z.string(),
        price: z.number().positive(),
        quantity: z.number().int().positive(),
      }),
    ),
  ),
})
