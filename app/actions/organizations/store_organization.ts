import User from '#models/user'
import { organizationValidator } from '#validators/organization'
import { Infer } from '@vinejs/vine/types'
import db from '@adonisjs/lucid/services/db'
import Organization from '#models/organization'
import Roles from '#enums/roles'

type Params = {
  user: User
  data: Infer<typeof organizationValidator>
}

export default class StoreOrganization {
  static async handle({ user, data }: Params) {
    return db.transaction(async (trx) => {
      // 1. create our organization
      const organization = await Organization.create(data, { client: trx })

      // 2. make this user the admin
      await this.#assignAdmin(organization, user)

      return organization
    })
  }

  static async #assignAdmin(organization: Organization, user: User) {
    return organization.related('users').attach({
      [user.id]: {
        role_id: Roles.ADMIN,
      },
    })
  }
}
