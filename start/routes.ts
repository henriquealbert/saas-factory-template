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
| Pages
|--------------------------------------------------------------------------
*/
// Public
router
  .group(() => {
    router.on('/').renderInertia('home')
    router.on('/login').renderInertia('auth/login')
    router.on('/register').renderInertia('auth/register')
    router.on('/forgot-password').renderInertia('auth/forgot-password')
    router.on('/reset-password').renderInertia('auth/reset-password')
    router.on('/verify-email/:token').renderInertia('auth/verify-email')
  })
  .use(middleware.guest())

// Protected
router
  .group(() => {
    router.on('/').renderInertia('app/home')

    // User settings
    router
      .group(() => {
        router.on('/').renderInertia('app/settings/profile')
      })
      .prefix('/settings')
  })
  .prefix('/app')
  .use(middleware.auth({ guards: ['web'] }))

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/
router
  .group(() => {
    router
      .group(() => {
        router.post('/login', [SessionController, 'login'])
        router.post('/register', [SessionController, 'register'])
        router.get('/logout', [SessionController, 'logout'])
      })
      .prefix('/auth')
      .use(middleware.guest())
  })
  .prefix('/api/v1')
