import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { storeSessionValidator } from '#validators/session'
import { UserService } from '#services/user_service'
import { createUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'

@inject()
export default class SessionController {
  constructor(private userService: UserService) {}

  async login({ request, auth, response, session }: HttpContext) {
    try {
      const { email, password, rememberMe } = await request.validateUsing(storeSessionValidator)

      const user = await User.verifyCredentials(email, password)
      console.log(user)

      await auth.use('web').login(user)

      return response.redirect('/app')
    } catch (error) {
      console.log(error)
      session.flash('errors', { error: 'Invalid credentials' })
      return response.redirect().back()
    }
  }

  async register({ request, response, auth, session }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(createUserValidator)

      const user = await this.userService.createUser({ email, password })

      await auth.use('web').login(user)

      return response.redirect('/app')
    } catch (error) {
      session.flash('errors', { error: 'Registration failed' })
      return response.redirect().back()
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
