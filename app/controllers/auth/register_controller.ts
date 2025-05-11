import WebRegister from '#actions/auth/web_register'
import OrganizationInviteDto from '#dtos/organization_invite'
import OrganizationInvite from '#models/organization_invite'
import { registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ inertia, session }: HttpContext) {
    const inviteId = session.get('invite_id')

    if (inviteId) {
      const invite = await OrganizationInvite.find(inviteId)

      if (!invite) {
        session.forget('invite_id')
      } else {
        inertia.share({ invite: new OrganizationInviteDto(invite) })
      }
    }

    return inertia.render('auth/register')
  }

  @inject()
  async store({ request, response }: HttpContext, webRegister: WebRegister) {
    const data = await request.validateUsing(registerValidator)

    const { invite } = await webRegister.handle({ data })

    if (invite) {
      return response.redirect().toRoute('organizations.index')
    }

    // return response.redirect().toRoute('organizations.create') // @TODO: Uncomment this when organizations are implemented
    return response.redirect().toRoute('home.index')
  }
}
