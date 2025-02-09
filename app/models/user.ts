import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import PasswordResetToken from './password_reset_token.js'
import Organization from './organization.js'
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User)

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => PasswordResetToken)
  declare passwordResetTokens: HasMany<typeof PasswordResetToken>

  @manyToMany(() => Organization, {
    pivotTable: 'organization_users',
    pivotColumns: ['role_id'],
  })
  declare organizations: ManyToMany<typeof Organization>
}
