import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.on('/').renderInertia('public/home').as('public.home').use(middleware.guest())
