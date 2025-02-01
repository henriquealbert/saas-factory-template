import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

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
