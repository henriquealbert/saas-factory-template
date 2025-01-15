import type User from '#models/user'
import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps, PageProps } from '@adonisjs/inertia/types'
import { ModelAttributes } from '@adonisjs/lucid/types/model'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => ctx.inertia.always(() => ctx.session?.flashMessages.get('errors')),
    user: (ctx) => ctx.auth?.user,
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx',
    pages: (_, page) => !page.includes('app'),
  },
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig>, PageProps {
    user: ModelAttributes<User>
  }
}
