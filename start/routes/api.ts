const SessionController = () => import('#controllers/session_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

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
