import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'

import User from './user.js'
import OrganizationInvite from './organization_invite.js'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => OrganizationInvite)
  declare invites: HasMany<typeof OrganizationInvite>

  @manyToMany(() => User, {
    pivotTable: 'organization_users',
    pivotColumns: ['role_id'],
  })
  declare users: ManyToMany<typeof User>
}
