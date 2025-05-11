import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const HomeController = () => import('#controllers/home_controller')
const OrganizationsController = () => import('#controllers/organizations_controller')

router.get('/dashboard', [HomeController, 'index']).as('home.index').use(middleware.auth())

router
  .group(() => {
    router.get('/', [OrganizationsController, 'index']).as('organizations.index')
    router.post('/', [OrganizationsController, 'store']).as('organizations.store')

    router.get('/create', [OrganizationsController, 'create']).as('organizations.create')

    router.get('/:id', [OrganizationsController, 'active']).as('organizations.active')
    router.put('/:id', [OrganizationsController, 'update']).as('organizations.update')
    router.delete('/:id', [OrganizationsController, 'destroy']).as('organizations.destroy')

    router
      .get('/invites/:id/accept', [OrganizationsController, 'acceptInvite'])
      .as('organizations.invites.accept')
  })
  .prefix('/organizations')
  .use(middleware.auth())

// // @TODO: Add settings routes
// // router
// //   .group(() => {
// //     //* Settings (Profile)
// //     router
// //       .get('/settings/profile', [SettingsProfilesController, 'index'])
// //       .as('settings.profile.index')
// //     router
// //       .put('/settings/profile', [SettingsProfilesController, 'update'])
// //       .as('settings.profile.update')

// //     //* Settings (Account)
// //     router
// //       .get('/settings/account', [SettingsAccountsController, 'index'])
// //       .as('settings.account.index')
// //     router
// //       .put('/settings/account/email', [SettingsAccountsController, 'updateEmail'])
// //       .as('settings.account.email')
// //     router
// //       .delete('/settings/account', [SettingsAccountsController, 'destroy'])
// //       .as('settings.account.destroy')

// //     //* Settings (Organization)
// //     router
// //       .get('/settings/organization', [SettingsOrganizationsController, 'index'])
// //       .as('settings.organization.index')
// //     router
// //       .post('/settings/organization/invite', [SettingsOrganizationsController, 'inviteUser'])
// //       .as('settings.organization.invite')
// //     router
// //       .delete('/settings/organization/invite/:id', [
// //         SettingsOrganizationsController,
// //         'cancelInvite',
// //       ])
// //       .as('settings.organization.invite.cancel')
// //     router
// //       .delete('/settings/organization/user/:id', [SettingsOrganizationsController, 'removeUser'])
// //       .as('settings.organization.user.remove')
// //   })
// //   .use([middleware.auth(), middleware.organization()])
