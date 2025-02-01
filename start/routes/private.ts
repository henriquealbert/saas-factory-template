import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

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
