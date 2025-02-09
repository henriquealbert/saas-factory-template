import { BaseModelDto } from '@adocasts.com/dto/base'
import Organization from '#models/organization'
import OrganizationInviteDto from '#dtos/organization_invite'
import UserDto from '#dtos/user'

export default class OrganizationDto extends BaseModelDto {
  declare id: number
  declare name: string
  declare createdAt: string
  declare updatedAt: string
  declare invites: OrganizationInviteDto[]
  declare users: UserDto[]

  constructor(organization?: Organization) {
    super()

    if (!organization) return
    this.id = organization.id
    this.name = organization.name
    this.createdAt = organization.createdAt.toISO()!
    this.updatedAt = organization.updatedAt.toISO()!
    this.invites = OrganizationInviteDto.fromArray(organization.invites)
    this.users = UserDto.fromArray(organization.users)
  }
}
