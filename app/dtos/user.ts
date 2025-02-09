import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import PasswordResetTokenDto from '#dtos/password_reset_token'
import OrganizationDto from '#dtos/organization'

export default class UserDto extends BaseModelDto {
  declare id: number
  declare fullName: string | null
  declare email: string
  declare password: string
  declare createdAt: string
  declare updatedAt: string | null
  declare passwordResetTokens: PasswordResetTokenDto[]
  declare organizations: OrganizationDto[]

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.fullName = user.fullName
    this.email = user.email
    this.password = user.password
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
    this.passwordResetTokens = PasswordResetTokenDto.fromArray(user.passwordResetTokens)
    this.organizations = OrganizationDto.fromArray(user.organizations)
  }
}
