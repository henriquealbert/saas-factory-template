import User from '#models/user'
import { createUserValidator } from '#validators/user'
import { Infer } from '@vinejs/vine/types'

export class UserService {
  async createUser(data: Infer<typeof createUserValidator>) {
    const existingUser = await User.findBy('email', data.email)

    if (existingUser) {
      throw new Error('User already exists')
    }

    const user = await User.create(data)

    return user
  }
}
