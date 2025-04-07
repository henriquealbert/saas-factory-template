import User from '#models/user'
import string from '@adonisjs/core/helpers/string'
import encryption from '@adonisjs/core/services/encryption'
import ExpirePasswordResetTokens from './expire_password_reset_tokens.js'
import { DateTime } from 'luxon'
import router from '@adonisjs/core/services/router'
import env from '#start/env'
import mail from '@adonisjs/mail/services/main'
import logger from '@adonisjs/core/services/logger'

type Params = {
  email: string
}

export default class TrySendPasswordResetEmail {
  static async handle({ email }: Params) {
    const user = await User.query().where({ email }).first()
    const value = string.generateRandom(32)
    const encryptedValue = encryption.encrypt(value)

    if (!user) {
      logger.info(`User with email not found: ${email}`)
      return
    }

    await ExpirePasswordResetTokens.handle({ user })
    await user.related('passwordResetTokens').create({
      value,
      expiresAt: DateTime.now().plus({ hour: 1 }),
    })

    const resetLink = router
      .builder()
      .prefixUrl(env.get('APP_URL'))
      .params({ value: encryptedValue })
      .make('forgot_password.reset')

    logger.info(`Sending password reset email to: ${user.email}`)
    try {
      await mail.send((message) => {
        message
          .to(user.email)
          .from('onboarding@resend.dev')
          .subject('Reset Your Password')
          .htmlView('emails/forgot_password', {
            user,
            resetLink,
          })
      })
      logger.info(`Password reset email sent to: ${user.email}`)
    } catch (error) {
      logger.error(`Error sending password reset email to: ${user.email}`, {
        error: JSON.stringify(error),
      })
    }
  }
}
