/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const SessionController = () => import('#controllers/session_controller')

/*
|--------------------------------------------------------------------------
| Public
|--------------------------------------------------------------------------
*/
router.group(() => {
  router.on('/').renderInertia('home')
  router.on('/login').renderInertia('auth/login')
  router.on('/register').renderInertia('auth/register')
  router.on('/forgot-password').renderInertia('auth/forgot-password')
  router.on('/reset-password').renderInertia('auth/reset-password')
  router.on('/verify-email/:token').renderInertia('auth/verify-email')
})

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/
router.post('login', [SessionController, 'login']).use(middleware.guest())
router.post('logout', [SessionController, 'logout']).use(middleware.auth({ guards: ['web'] }))

/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
*/
router
  .group(() => {
    // router.on('/').renderInertia('app/home')
    router.get('/', async ({ inertia, auth }) => {
      const user = await auth.authenticateUsing(['web'])
      console.log(user)

      return inertia.render('app/home', { user })
    })

    // User settings
    router
      .group(() => {
        router.on('/').renderInertia('app/settings/profile')
      })
      .prefix('/settings')
  })
  .prefix('/app')
  .use(middleware.auth({ guards: ['web'] }))
