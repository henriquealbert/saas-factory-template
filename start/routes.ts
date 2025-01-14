/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

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
| Dashboard
|--------------------------------------------------------------------------
*/
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
