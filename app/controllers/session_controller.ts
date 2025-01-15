import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { storeSessionValidator } from '#validators/session'

export default class SessionController {
  async login({ request, auth, response }: HttpContext) {
    /**
     * Step 1: Get credentials from the request body
     */
    const { email, password, rememberMe } = await request.validateUsing(storeSessionValidator)

    /**
     * Step 2: Verify credentials
     */
    const user = await User.verifyCredentials(email, password)

    /**
     * Step 3: Login user
     */
    await auth.use('web').login(
      user,
      /**
       * Generate token when "rememberMe" input exists
       */
      rememberMe
    )

    /**
     * Step 4: Send them to a protected route
     */
    response.redirect('/app')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
